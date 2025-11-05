import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const shapes: QuizItem[] = [
  { english: 'Circle', arabic: 'دائرة', transliteration: 'Da\'ira', imageData: SVG_TEMPLATES.emoji('🔵'), audioData: DUMMY_AUDIO, options: { transliterated: ['Da\'ira', 'Murabba\'', 'Muthallath', 'Najma'] } },
  { english: 'Square', arabic: 'مربع', transliteration: 'Murabba\'', imageData: SVG_TEMPLATES.emoji('🟥'), audioData: DUMMY_AUDIO, options: { transliterated: ['Murabba\'', 'Da\'ira', 'Mustatil', 'Qalb'] } },
  { english: 'Triangle', arabic: 'مثلث', transliteration: 'Muthallath', imageData: SVG_TEMPLATES.emoji('🔺'), audioData: DUMMY_AUDIO, options: { transliterated: ['Muthallath', 'Murabba\'', 'Da\'ira', 'Hilal'] } },
  { english: 'Star', arabic: 'نجمة', transliteration: 'Najma', imageData: SVG_TEMPLATES.emoji('⭐'), audioData: DUMMY_AUDIO, options: { transliterated: ['Najma', 'Qalb', 'Hilal', 'Da\'ira'] } },
  { english: 'Heart', arabic: 'قلب', transliteration: 'Qalb', imageData: SVG_TEMPLATES.emoji('❤️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Qalb', 'Najma', 'Murabba\'', 'Baydawi'] } },
  { english: 'Rectangle', arabic: 'مستطيل', transliteration: 'Mustatil', imageData: SVG_TEMPLATES.emoji('▭'), audioData: DUMMY_AUDIO, options: { transliterated: ['Mustatil', 'Murabba\'', 'Da\'ira', 'Muthallath'] } },
  { english: 'Oval', arabic: 'بيضاوي', transliteration: 'Baydawi', imageData: SVG_TEMPLATES.emoji('🥚'), audioData: DUMMY_AUDIO, options: { transliterated: ['Baydawi', 'Da\'ira', 'Qalb', 'Najma'] } },
  { english: 'Crescent', arabic: 'هلال', transliteration: 'Hilal', imageData: SVG_TEMPLATES.emoji('🌙'), audioData: DUMMY_AUDIO, options: { transliterated: ['Hilal', 'Najma', 'Da\'ira', 'Muthallath'] } },
];
