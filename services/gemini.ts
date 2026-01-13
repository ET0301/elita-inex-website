
import { GoogleGenAI, Modality, Type } from "@google/genai";
import { ImageSize } from "../types";

export class GeminiService {
  private static async getAI() {
    let apiKey = process.env.API_KEY;

    // Check for platform-provided key if env key is missing or placeholder
    // @ts-ignore
    if ((!apiKey || apiKey === 'PLACEHOLDER_API_KEY') && window.aistudio) {
      // @ts-ignore
      apiKey = await window.aistudio.getSelectedApiKey();
    }

    if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
      // Force prompt if still no key
      // @ts-ignore
      if (window.aistudio) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
        // @ts-ignore
        apiKey = await window.aistudio.getSelectedApiKey();
      }
    }

    if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
      throw new Error("No API key configured. Please select an API key from the platform.");
    }

    return new GoogleGenAI({ apiKey });
  }

  static async checkAndPromptApiKey() {
    // @ts-ignore - window.aistudio is injected by the platform
    if (window.aistudio && !(await window.aistudio.hasSelectedApiKey())) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
    }
  }

  static async generateAwningVisualization(prompt: string, size: ImageSize, sourceImageBase64?: string) {
    try {
      // GUIDELINE: Use gemini-2.5-flash-image by default; upgrade to pro for 2K/4K
      const isProModel = size === ImageSize.SIZE_2K || size === ImageSize.SIZE_4K;
      const modelName = isProModel ? 'gemini-3-pro-image-preview' : 'gemini-2.5-flash-image';

      const ai = await this.getAI();
      const parts: any[] = [];

      if (sourceImageBase64) {
        const matches = sourceImageBase64.match(/^data:([^;]+);base64,(.+)$/);
        if (matches) {
          parts.push({
            inlineData: {
              mimeType: matches[1],
              data: matches[2],
            },
          });
        } else {
          parts.push({
            inlineData: {
              mimeType: 'image/jpeg',
              data: sourceImageBase64,
            },
          });
        }
      }

      parts.push({
        text: sourceImageBase64
          ? `Using the provided photo of this property as the primary architectural context, visualize a bespoke Elita Inex awning seamlessly integrated into the existing facade. Specifications: ${prompt}. Critically ensure the awning is perfectly scaled to the building dimensions, maintains structural realism, and complements the architectural style, materials, and lighting of the property in the photograph. High-end architectural photography style.`
          : `Professional architectural visualization of a premium custom awning: ${prompt}. Highly detailed, realistic lighting, luxury outdoor furniture setting, high-end photography style.`
      });

      const config: any = {
        imageConfig: {
          aspectRatio: "16:9",
        }
      };

      // GUIDELINE: imageSize is only available for gemini-3-pro-image-preview
      if (isProModel) {
        config.imageConfig.imageSize = size;
      }

      const response = await ai.models.generateContent({
        model: modelName,
        contents: { parts },
        config: config,
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      throw new Error("No image data returned from model");
    } catch (error: any) {
      // GUIDELINE: Handle "Requested entity was not found" or 403 by prompting key selection
      if (error?.message?.includes('Requested entity was not found') || error?.message?.includes('403') || error?.message?.includes('permission')) {
        console.warn("Permission issue detected, prompting key selection...");
        // @ts-ignore
        if (window.aistudio) await window.aistudio.openSelectKey();
      }
      console.error("Image generation failed:", error);
      throw error;
    }
  }

  static async startLiveConsultation(callbacks: {
    onAudioChunk: (base64: string) => void,
    onTranscription?: (text: string, isUser) => void,
    onInterrupted?: () => void
  }) {
    const ai = await this.getAI();

    return ai.live.connect({
      model: 'gemini-2.5-flash-native-audio-preview-09-2025',
      callbacks: {
        onopen: () => console.log("Live session opened"),
        onmessage: async (message: any) => {
          const audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
          if (audio) callbacks.onAudioChunk(audio);

          if (message.serverContent?.outputTranscription) {
            callbacks.onTranscription?.(message.serverContent.outputTranscription.text, false);
          } else if (message.serverContent?.inputTranscription) {
            callbacks.onTranscription?.(message.serverContent.inputTranscription.text, true);
          }

          if (message.serverContent?.interrupted) {
            callbacks.onInterrupted?.();
          }
        },
        onerror: (e) => console.error("Live error", e),
        onclose: () => console.log("Live session closed")
      },
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
        },
        systemInstruction: "You are an expert design consultant for Elita Inex, a premium custom awning company. Be professional, helpful, and knowledgeable about materials, installation, and UV protection. Help the customer choose the right design and size for their property.",
        inputAudioTranscription: {},
        outputAudioTranscription: {}
      }
    });
  }
}

// Audio Utilities
export function decode(base64: string) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function encode(bytes: Uint8Array) {
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}
