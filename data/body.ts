import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const body: QuizItem[] = [
  { english: 'Head', arabic: 'رأس', transliteration: 'Ras', imageData: SVG_TEMPLATES.emoji('👤'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ras', 'Yad', 'Qadam', 'Ayn'] } },
  { english: 'Hand', arabic: 'يد', transliteration: 'Yad', imageData: SVG_TEMPLATES.emoji('✋'), audioData: DUMMY_AUDIO, options: { transliterated: ['Yad', 'Ras', 'Rijl', 'Udhun'] } },
  { english: 'Foot', arabic: 'قدم', transliteration: 'Qadam', imageData: SVG_TEMPLATES.emoji('🦶'), audioData: DUMMY_AUDIO, options: { transliterated: ['Qadam', 'Yad', 'Anf', 'Fam'] } },
  { english: 'Eye', arabic: 'عين', transliteration: 'Ayn', imageData: SVG_TEMPLATES.emoji('👁️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ayn', 'Udhun', 'Ras', 'Yad'] } },
  { english: 'Nose', arabic: 'أنف', transliteration: 'Anf', imageData: SVG_TEMPLATES.emoji('👃'), audioData: DUMMY_AUDIO, options: { transliterated: ['Anf', 'Fam', 'Ayn', 'Qadam'] } },
];
