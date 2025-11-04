import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const objects: QuizItem[] = [
  { english: 'Book', arabic: 'كتاب', transliteration: 'Kitab', imageData: SVG_TEMPLATES.emoji('📖'), audioData: DUMMY_AUDIO, options: { transliterated: ['Kitab', 'Qalam', 'Kursi', 'Tawila'] } },
  { english: 'Pen', arabic: 'قلم', transliteration: 'Qalam', imageData: SVG_TEMPLATES.emoji('🖊️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Qalam', 'Kitab', 'Bab', 'Shubbak'] } },
  { english: 'Chair', arabic: 'كرسي', transliteration: 'Kursi', imageData: SVG_TEMPLATES.emoji('🪑'), audioData: DUMMY_AUDIO, options: { transliterated: ['Kursi', 'Tawila', 'Kitab', 'Qalam'] } },
  { english: 'Table', arabic: 'طاولة', transliteration: 'Tawila', imageData: SVG_TEMPLATES.emoji('🟫'), audioData: DUMMY_AUDIO, options: { transliterated: ['Tawila', 'Kursi', 'Bab', 'Shubbak'] } },
  { english: 'Door', arabic: 'باب', transliteration: 'Bab', imageData: SVG_TEMPLATES.emoji('🚪'), audioData: DUMMY_AUDIO, options: { transliterated: ['Bab', 'Shubbak', 'Tawila', 'Kursi'] } },
];
