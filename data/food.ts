import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const food: QuizItem[] = [
  { english: 'Apple', arabic: 'تفاحة', transliteration: 'Tuffaha', imageData: SVG_TEMPLATES.emoji('🍎'), audioData: DUMMY_AUDIO, options: { transliterated: ['Tuffaha', 'Mawz', 'Khubz', 'Maa'] } },
  { english: 'Bread', arabic: 'خبز', transliteration: 'Khubz', imageData: SVG_TEMPLATES.emoji('🍞'), audioData: DUMMY_AUDIO, options: { transliterated: ['Khubz', 'Tuffaha', 'Mawz', 'Jubn'] } },
  { english: 'Water', arabic: 'ماء', transliteration: 'Maa', imageData: SVG_TEMPLATES.emoji('💧'), audioData: DUMMY_AUDIO, options: { transliterated: ['Maa', 'Haleeb', 'Khubz', 'Tuffaha'] } },
  { english: 'Cheese', arabic: 'جبن', transliteration: 'Jubn', imageData: SVG_TEMPLATES.emoji('🧀'), audioData: DUMMY_AUDIO, options: { transliterated: ['Jubn', 'Khubz', 'Mawz', 'Maa'] } },
  { english: 'Banana', arabic: 'موز', transliteration: 'Mawz', imageData: SVG_TEMPLATES.emoji('🍌'), audioData: DUMMY_AUDIO, options: { transliterated: ['Mawz', 'Tuffaha', 'Haleeb', 'Jubn'] } },
];
