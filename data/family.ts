import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const family: QuizItem[] = [
  { english: 'Father', arabic: 'أب', transliteration: 'Ab', imageData: SVG_TEMPLATES.emoji('👨'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ab', 'Umm', 'Akh', 'Ukht'] } },
  { english: 'Mother', arabic: 'أم', transliteration: 'Umm', imageData: SVG_TEMPLATES.emoji('👩'), audioData: DUMMY_AUDIO, options: { transliterated: ['Umm', 'Ab', 'Jadd', 'Jaddah'] } },
  { english: 'Brother', arabic: 'أخ', transliteration: 'Akh', imageData: SVG_TEMPLATES.emoji('👦'), audioData: DUMMY_AUDIO, options: { transliterated: ['Akh', 'Ukht', 'Ab', 'Umm'] } },
  { english: 'Sister', arabic: 'أخت', transliteration: 'Ukht', imageData: SVG_TEMPLATES.emoji('👧'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ukht', 'Akh', 'Ab', 'Umm'] } },
  { english: 'Grandfather', arabic: 'جد', transliteration: 'Jadd', imageData: SVG_TEMPLATES.emoji('👴'), audioData: DUMMY_AUDIO, options: { transliterated: ['Jadd', 'Jaddah', 'Ab', 'Umm'] } },
];
