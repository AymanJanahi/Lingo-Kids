export type Language = 'en' | 'ar';

export interface Category {
  id: 'numbers' | 'alphabet' | 'animals' | 'colors' | 'objects';
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
  imagePrompt: string;
  options: {
    arabic: string[];
    english: string[];
  };
}

export type GameState = 'menu' | 'loading' | 'playing' | 'error';
