import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const actions: QuizItem[] = [
  { english: 'Eat', arabic: 'يأكل', transliteration: 'Ya\'kul', imageData: SVG_TEMPLATES.emoji('😋'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ya\'kul', 'Yashrab', 'Yanam', 'Yajri'] } },
  { english: 'Drink', arabic: 'يشرب', transliteration: 'Yashrab', imageData: SVG_TEMPLATES.emoji('🥤'), audioData: DUMMY_AUDIO, options: { transliterated: ['Yashrab', 'Ya\'kul', 'Yaqra\'', 'Yal\'ab'] } },
  { english: 'Run', arabic: 'يجري', transliteration: 'Yajri', imageData: SVG_TEMPLATES.emoji('🏃'), audioData: DUMMY_AUDIO, options: { transliterated: ['Yajri', 'Yaqif', 'Yajlis', 'Yanam'] } },
  { english: 'Sleep', arabic: 'ينام', transliteration: 'Yanam', imageData: SVG_TEMPLATES.emoji('😴'), audioData: DUMMY_AUDIO, options: { transliterated: ['Yanam', 'Ya\'kul', 'Yajri', 'Yaktub'] } },
  { english: 'Read', arabic: 'يقرأ', transliteration: 'Yaqra\'', imageData: SVG_TEMPLATES.emoji('📖'), audioData: DUMMY_AUDIO, options: { transliterated: ['Yaqra\'', 'Yaktub', 'Yashrab', 'Yal\'ab'] } },
  { english: 'Write', arabic: 'يكتب', transliteration: 'Yaktub', imageData: SVG_TEMPLATES.emoji('✍️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Yaktub', 'Yaqra\'', 'Yajlis', 'Yanam'] } },
  { english: 'Play', arabic: 'يلعب', transliteration: 'Yal\'ab', imageData: SVG_TEMPLATES.emoji('⚽'), audioData: DUMMY_AUDIO, options: { transliterated: ['Yal\'ab', 'Yajri', 'Ya\'kul', 'Yaqif'] } },
  { english: 'Sit', arabic: 'يجلس', transliteration: 'Yajlis', imageData: SVG_TEMPLATES.emoji('🪑'), audioData: DUMMY_AUDIO, options: { transliterated: ['Yajlis', 'Yaqif', 'Yajri', 'Yaktub'] } },
  { english: 'Stand', arabic: 'يقف', transliteration: 'Yaqif', imageData: SVG_TEMPLATES.emoji('🧍'), audioData: DUMMY_AUDIO, options: { transliterated: ['Yaqif', 'Yajlis', 'Yanam', 'Yal\'ab'] } },
];
