export type Language = 'en' | 'ar';

export interface Category {
  id: 'numbers' | 'alphabet' | 'animals' | 'colors' | 'objects' | 'food' | 'family' | 'body' | 'clothing' | 'weather' | 'random';
  name: {
    en: string;
    ar: string;
  };
  icon: string;
}

export interface QuizItem {
  english: string;
  arabic: string;
  transliteration: string;
  imageData: string; // base64 data URL for the image
  audioData: string; // base64 encoded audio data
  options: {
    transliterated: string[];
  };
}

export type GameState = 'menu' | 'loading' | 'playing' | 'error';