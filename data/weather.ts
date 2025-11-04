import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const weather: QuizItem[] = [
  { english: 'Sun', arabic: 'شمس', transliteration: 'Shams', imageData: SVG_TEMPLATES.emoji('☀️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Shams', 'Qamar', 'Matar', 'Ghaim'] } },
  { english: 'Moon', arabic: 'قمر', transliteration: 'Qamar', imageData: SVG_TEMPLATES.emoji('🌙'), audioData: DUMMY_AUDIO, options: { transliterated: ['Qamar', 'Shams', 'Najm', 'Samaa'] } },
  { english: 'Rain', arabic: 'مطر', transliteration: 'Matar', imageData: SVG_TEMPLATES.emoji('🌧️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Matar', 'Thalj', 'Shams', 'Ghaim'] } },
  { english: 'Cloud', arabic: 'غيم', transliteration: 'Ghaim', imageData: SVG_TEMPLATES.emoji('☁️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ghaim', 'Matar', 'Shams', 'Qamar'] } },
  { english: 'Star', arabic: 'نجم', transliteration: 'Najm', imageData: SVG_TEMPLATES.emoji('⭐'), audioData: DUMMY_AUDIO, options: { transliterated: ['Najm', 'Qamar', 'Samaa', 'Shams'] } },
];
