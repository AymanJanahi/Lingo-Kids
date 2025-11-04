import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const weather: QuizItem[] = [
  { english: 'Sun', arabic: 'شمس', transliteration: 'Shams', imageData: SVG_TEMPLATES.emoji('☀️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Shams', 'Qamar', 'Matar', 'Ghaim'] } },
  { english: 'Moon', arabic: 'قمر', transliteration: 'Qamar', imageData: SVG_TEMPLATES.emoji('🌙'), audioData: DUMMY_AUDIO, options: { transliterated: ['Qamar', 'Shams', 'Najm', 'Samaa'] } },
  { english: 'Rain', arabic: 'مطر', transliteration: 'Matar', imageData: SVG_TEMPLATES.emoji('🌧️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Matar', 'Thalj', 'Shams', 'Ghaim'] } },
  { english: 'Cloud', arabic: 'غيم', transliteration: 'Ghaim', imageData: SVG_TEMPLATES.emoji('☁️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ghaim', 'Matar', 'Shams', 'Qamar'] } },
  { english: 'Star', arabic: 'نجم', transliteration: 'Najm', imageData: SVG_TEMPLATES.emoji('⭐'), audioData: DUMMY_AUDIO, options: { transliterated: ['Najm', 'Qamar', 'Samaa', 'Shams'] } },
  { english: 'Snow', arabic: 'ثلج', transliteration: 'Thalj', imageData: SVG_TEMPLATES.emoji('❄️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Thalj', 'Matar', 'Reeh', 'Barq'] } },
  { english: 'Wind', arabic: 'ريح', transliteration: 'Reeh', imageData: SVG_TEMPLATES.emoji('💨'), audioData: DUMMY_AUDIO, options: { transliterated: ['Reeh', 'Aasifa', 'Ghaim', 'Matar'] } },
  { english: 'Sky', arabic: 'سماء', transliteration: 'Samaa', imageData: SVG_TEMPLATES.emoji('🌌'), audioData: DUMMY_AUDIO, options: { transliterated: ['Samaa', 'Shams', 'Qamar', 'Najm'] } },
  { english: 'Storm', arabic: 'عاصفة', transliteration: 'Aasifa', imageData: SVG_TEMPLATES.emoji('⛈️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Aasifa', 'Reeh', 'Matar', 'Ra\'d'] } },
  { english: 'Rainbow', arabic: 'قوس قزح', transliteration: 'Qaws Quzah', imageData: SVG_TEMPLATES.emoji('🌈'), audioData: DUMMY_AUDIO, options: { transliterated: ['Qaws Quzah', 'Shams', 'Matar', 'Samaa'] } },
  { english: 'Fog', arabic: 'ضباب', transliteration: 'Dabab', imageData: SVG_TEMPLATES.emoji('🌫️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Dabab', 'Ghaim', 'Matar', 'Reeh'] } },
  { english: 'Lightning', arabic: 'برق', transliteration: 'Barq', imageData: SVG_TEMPLATES.emoji('⚡'), audioData: DUMMY_AUDIO, options: { transliterated: ['Barq', 'Ra\'d', 'Aasifa', 'Matar'] } },
  { english: 'Thunder', arabic: 'رعد', transliteration: 'Ra\'d', imageData: SVG_TEMPLATES.emoji('🌩️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ra\'d', 'Barq', 'Aasifa', 'Matar'] } },
];
