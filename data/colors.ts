import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const colors: QuizItem[] = [
  { english: 'Red', arabic: 'أحمر', transliteration: 'Ahmar', imageData: SVG_TEMPLATES.color('red'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ahmar', 'Azraq', 'Akhdar', 'Asfar'] } },
  { english: 'Blue', arabic: 'أزرق', transliteration: 'Azraq', imageData: SVG_TEMPLATES.color('blue'), audioData: DUMMY_AUDIO, options: { transliterated: ['Azraq', 'Ahmar', 'Abyad', 'Aswad'] } },
  { english: 'Green', arabic: 'أخضر', transliteration: 'Akhdar', imageData: SVG_TEMPLATES.color('green'), audioData: DUMMY_AUDIO, options: { transliterated: ['Akhdar', 'Asfar', 'Ahmar', 'Azraq'] } },
  { english: 'Yellow', arabic: 'أصفر', transliteration: 'Asfar', imageData: SVG_TEMPLATES.color('yellow'), audioData: DUMMY_AUDIO, options: { transliterated: ['Asfar', 'Akhdar', 'Aswad', 'Abyad'] } },
  { english: 'Black', arabic: 'أسود', transliteration: 'Aswad', imageData: SVG_TEMPLATES.color('black'), audioData: DUMMY_AUDIO, options: { transliterated: ['Aswad', 'Abyad', 'Azraq', 'Ahmar'] } },
];
