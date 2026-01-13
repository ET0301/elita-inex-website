
export interface Product {
  id: string;
  name: string;
  description: string;
  useCases: string[];
  options: {
    sizes: string[];
    colors: string[];
    fabrics: string[];
    mechanisms: string[];
  };
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export enum ImageSize {
  SIZE_1K = '1K',
  SIZE_2K = '2K',
  SIZE_4K = '4K'
}

export interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: number;
}
