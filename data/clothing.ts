import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const clothing: QuizItem[] = [
  { english: 'Shirt', arabic: 'قميص', transliteration: 'Qamees', imageData: SVG_TEMPLATES.emoji('👕'), audioData: DUMMY_AUDIO, options: { transliterated: ['Qamees', 'Bintal', 'Hithaa', 'Qubba\'ah'] } },
  { english: 'Pants', arabic: 'بنطلون', transliteration: 'Bintal', imageData: SVG_TEMPLATES.emoji('👖'), audioData: DUMMY_AUDIO, options: { transliterated: ['Bintal', 'Qamees', 'Fustan', 'Jawarib'] } },
  { english: 'Shoes', arabic: 'حذاء', transliteration: 'Hithaa', imageData: SVG_TEMPLATES.emoji('👟'), audioData: DUMMY_AUDIO, options: { transliterated: ['Hithaa', 'Jawarib', 'Qamees', 'Bintal'] } },
  { english: 'Hat', arabic: 'قبعة', transliteration: 'Qubba\'ah', imageData: SVG_TEMPLATES.emoji('👒'), audioData: DUMMY_AUDIO, options: { transliterated: ['Qubba\'ah', 'Hithaa', 'Fustan', 'Qamees'] } },
  { english: 'Socks', arabic: 'جوارب', transliteration: 'Jawarib', imageData: SVG_TEMPLATES.emoji('🧦'), audioData: DUMMY_AUDIO, options: { transliterated: ['Jawarib', 'Hithaa', 'Bintal', 'Qubba\'ah'] } },
];
