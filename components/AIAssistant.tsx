
import React, { useState, useRef } from 'react';
import { GeminiService, decode, decodeAudioData, encode } from '../services/gemini';
import { ImageSize, GeneratedImage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'chat' | 'visualize'>('chat');
  const [isConsulting, setIsConsulting] = useState(false);
  const [transcriptions, setTranscriptions] = useState<{ text: string, isUser: boolean }[]>([]);

  const [imagePrompt, setImagePrompt] = useState('');
  const [imageSize, setImageSize] = useState<ImageSize>(ImageSize.SIZE_1K);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [sourceImage, setSourceImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const initAudio = async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume();
    }
  };

  const handleAudioChunk = async (base64: string) => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
    const audioBuffer = await decodeAudioData(decode(base64), ctx, 24000, 1);
    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(ctx.destination);
    source.onended = () => sourcesRef.current.delete(source);
    source.start(nextStartTimeRef.current);
    nextStartTimeRef.current += audioBuffer.duration;
    sourcesRef.current.add(source);
  };

  const stopConsulting = () => {
    sessionRef.current = null;
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    sourcesRef.current.forEach(s => s.stop());
    sourcesRef.current.clear();
    setIsConsulting(false);
  };

  const startConsulting = async () => {
    try {
      await initAudio();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const session = await GeminiService.startLiveConsultation({
        onAudioChunk: handleAudioChunk,
        onTranscription: (text, isUser) => setTranscriptions(prev => [...prev, { text, isUser }]),
        onInterrupted: () => {
          sourcesRef.current.forEach(s => s.stop());
          sourcesRef.current.clear();
          nextStartTimeRef.current = 0;
        }
      });
      sessionRef.current = session;
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const source = inputCtx.createMediaStreamSource(stream);
      const processor = inputCtx.createScriptProcessor(4096, 1, 1);
      processor.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        const int16 = new Int16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) int16[i] = inputData[i] * 32768;
        session.sendRealtimeInput({ media: { data: encode(new Uint8Array(int16.buffer)), mimeType: 'audio/pcm;rate=16000' } });
      };
      source.connect(processor);
      processor.connect(inputCtx.destination);
      setIsConsulting(true);
    } catch (err) {
      alert("Microphone required for consultation.");
    }
  };

  const generateImage = async () => {
    if (!imagePrompt) return;
    setIsGenerating(true);
    try {
      const url = await GeminiService.generateAwningVisualization(imagePrompt, imageSize, sourceImage || undefined);
      setGeneratedImages(prev => [{ url, prompt: imagePrompt, timestamp: Date.now() }, ...prev]);
    } catch (err: any) {
      if (err.message?.includes('403') || err.message?.includes('permission')) {
        alert("Permission Denied. 2K/4K renders require a Paid API Key. Please click 'Configure Key' and ensure you select a key from a paid project.");
      } else {
        alert("Rendering failed. Please check your connection and configuration.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSourceImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const openKeySelection = () => {
    // @ts-ignore
    if (window.aistudio) window.aistudio.openSelectKey();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-12 right-12 flex flex-col items-center gap-2 group z-[100]"
      >
        <div className="w-20 h-20 bg-brand-charcoal/90 backdrop-blur-md text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all border border-brand-bronze/20">
          <div className="w-8 h-8 bronze-gradient rounded-sm transform rotate-45 flex items-center justify-center shadow-lg">
            <i className="fa-solid fa-sparkles text-[10px] -rotate-45"></i>
          </div>
        </div>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-bronze text-shadow">Concierge</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-xl" onClick={() => setIsOpen(false)}></div>

          <div className="relative w-full max-w-4xl bg-brand-sand rounded-[2rem] shadow-2xl flex flex-col h-[80vh] overflow-hidden border border-white/10">
            <div className="p-10 border-b border-brand-charcoal/5 flex flex-col gap-6 bg-white/50">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2 uppercase tracking-[0.1em]">Digital Studio</h2>
                  <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-brand-bronze">Expert Consultation & Visualization</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="w-12 h-12 rounded-full border border-brand-charcoal/10 text-brand-charcoal/40 hover:text-brand-charcoal transition-colors flex items-center justify-center">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            <div className="flex bg-white/30 p-2 gap-2 border-b border-brand-charcoal/5">
              <button
                onClick={() => setMode('chat')}
                className={`flex-1 py-4 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${mode === 'chat' ? 'bg-brand-charcoal text-white shadow-xl' : 'text-brand-charcoal/30 hover:text-brand-charcoal/60'}`}
              >
                Live Consultation
              </button>
              <button
                onClick={() => setMode('visualize')}
                className={`flex-1 py-4 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${mode === 'visualize' ? 'bg-brand-charcoal text-white shadow-xl' : 'text-brand-charcoal/30 hover:text-brand-charcoal/60'}`}
              >
                Architectural Renders
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-12 bg-white/10">
              {mode === 'chat' ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className={`w-48 h-48 rounded-full border border-brand-bronze/10 flex items-center justify-center mb-16 relative ${isConsulting ? 'animate-pulse' : ''}`}>
                    <div className={`w-32 h-32 rounded-full flex items-center justify-center text-4xl shadow-2xl transition-all duration-700 ${isConsulting ? 'bg-brand-bronze text-white' : 'bg-brand-charcoal text-white/20'}`}>
                      <i className={`fa-solid ${isConsulting ? 'fa-volume-high' : 'fa-microphone-slash'}`}></i>
                    </div>
                  </div>

                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider">Connect with a Specialist</h3>
                    <p className="text-brand-charcoal/40 text-sm leading-relaxed mb-12 font-light">
                      Speak naturally to discuss your property constraints, material density, and architectural matching.
                    </p>

                    {!isConsulting ? (
                      <button onClick={startConsulting} className="bronze-gradient text-white px-16 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] w-full shadow-2xl hover:scale-105 transition-all">
                        Initiate Voice Call
                      </button>
                    ) : (
                      <button onClick={stopConsulting} className="bg-red-500 text-white px-16 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] w-full shadow-2xl">
                        Terminate Call
                      </button>
                    )}
                  </div>

                  <div className="w-full mt-20 space-y-8 text-left max-w-2xl mx-auto">
                    {transcriptions.map((t, i) => (
                      <div key={i} className={`flex ${t.isUser ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] px-8 py-5 rounded-3xl text-sm leading-relaxed font-light ${t.isUser ? 'bg-brand-charcoal text-white/70 rounded-tr-none' : 'bg-white shadow-sm border border-brand-charcoal/5 text-brand-charcoal/80 rounded-tl-none italic'}`}>
                          {t.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-16">
                  <div className="space-y-10 bg-white p-12 rounded-[2rem] shadow-sm border border-brand-charcoal/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <label className="block text-[10px] font-bold text-brand-bronze mb-6 uppercase tracking-[0.3em]">Environment Context</label>
                        {sourceImage ? (
                          <div className="relative aspect-video rounded-2xl overflow-hidden border border-brand-charcoal/5">
                            <img src={sourceImage} className="w-full h-full object-cover" alt="Context" />
                            <button
                              onClick={() => setSourceImage(null)}
                              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-charcoal/80 text-white flex items-center justify-center hover:bg-brand-charcoal transition-all shadow-lg"
                            >
                              <i className="fa-solid fa-xmark text-xs"></i>
                            </button>
                          </div>
                        ) : (
                          <div
                            onClick={() => fileInputRef.current?.click()}
                            className="aspect-video rounded-2xl bg-brand-sand/50 border-2 border-dashed border-brand-charcoal/10 flex flex-col items-center justify-center cursor-pointer hover:bg-brand-sand transition-all group"
                          >
                            <i className="fa-solid fa-cloud-arrow-up text-brand-charcoal/10 text-3xl mb-4 group-hover:text-brand-bronze transition-colors"></i>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/40">Upload Property Photo</p>
                            <input
                              type="file"
                              ref={fileInputRef}
                              className="hidden"
                              accept="image/*"
                              onChange={handleFileUpload}
                            />
                          </div>
                        )}
                        <p className="mt-4 text-[10px] text-brand-charcoal/30 font-light italic">Upload a photo of your facade for more accurate AI placement.</p>
                      </div>
                      <div className="flex flex-col">
                        <label className="block text-[10px] font-bold text-brand-bronze mb-6 uppercase tracking-[0.3em]">Awning Specifications</label>
                        <textarea
                          value={imagePrompt}
                          onChange={(e) => setImagePrompt(e.target.value)}
                          placeholder="e.g. A graphite-grey retractable awning over the upper terrace. Minimalist structural frame."
                          className="flex-grow w-full p-8 rounded-2xl bg-brand-sand/50 border-none outline-none focus:ring-1 focus:ring-brand-bronze/30 text-sm tracking-wide font-light placeholder:text-brand-charcoal/20 transition-all resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 items-end">
                      <div className="flex-grow w-full">
                        <div className="flex justify-between items-center mb-6">
                          <label className="block text-[10px] font-bold text-brand-bronze uppercase tracking-[0.3em]">Fidelity Level</label>
                          <button
                            onClick={openKeySelection}
                            className="text-[8px] font-bold uppercase tracking-widest text-brand-charcoal/40 hover:text-brand-bronze transition-colors flex items-center gap-2"
                          >
                            <i className="fa-solid fa-key"></i> Configure Paid Key
                          </button>
                        </div>
                        <select
                          value={imageSize}
                          onChange={(e) => setImageSize(e.target.value as ImageSize)}
                          className="w-full p-5 rounded-2xl bg-brand-sand/50 border-none outline-none text-[10px] font-bold uppercase tracking-widest"
                        >
                          <option value={ImageSize.SIZE_1K}>1080p Architectural Draft (Standard Key)</option>
                          <option value={ImageSize.SIZE_2K}>2K Studio Presentation (Paid Key Only)</option>
                          <option value={ImageSize.SIZE_4K}>4K Production Quality (Paid Key Only)</option>
                        </select>
                      </div>
                      <button
                        onClick={generateImage}
                        disabled={isGenerating || !imagePrompt}
                        className="bg-brand-charcoal text-white px-12 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-bronze disabled:opacity-30 disabled:cursor-not-allowed transition-all h-[60px] shadow-xl w-full sm:w-auto"
                      >
                        {isGenerating ? <i className="fa-solid fa-spinner fa-spin mr-3"></i> : <i className="fa-solid fa-cube mr-3"></i>}
                        {isGenerating ? 'Rendering...' : 'Generate Render'}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-12">
                    {generatedImages.map((img, i) => (
                      <div key={img.timestamp} className="bg-white p-6 rounded-[2rem] shadow-xl border border-brand-charcoal/5">
                        <div className="aspect-video rounded-2xl overflow-hidden mb-8 bg-brand-graphite">
                          <img src={img.url} alt={img.prompt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                        </div>
                        <div className="px-4">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-bronze">Technical Proposal</span>
                            <span className="text-[10px] text-brand-charcoal/30 font-bold uppercase tracking-widest">{new Date(img.timestamp).toLocaleTimeString()}</span>
                          </div>
                          <p className="text-sm text-brand-charcoal/50 leading-relaxed italic mb-8 font-light">"{img.prompt}"</p>
                          <a href={img.url} download className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-bronze transition-colors">
                            Export Assets <i className="fa-solid fa-arrow-right-to-bracket rotate-90"></i>
                          </a>
                        </div>
                      </div>
                    ))}
                    {generatedImages.length === 0 && !isGenerating && (
                      <div className="py-24 text-center">
                        <div className="w-20 h-20 bg-brand-charcoal/5 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-charcoal/10">
                          <i className="fa-solid fa-camera-viewfinder text-3xl"></i>
                        </div>
                        <p className="text-brand-charcoal/20 italic text-sm tracking-wide">Renders of your architectural vision will be compiled here.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="p-10 bg-white/50 border-t border-brand-charcoal/5 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-brand-bronze animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-charcoal/40">Studio Core v4.2 Connected</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/20">© Elita Inex Architectural Group</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
