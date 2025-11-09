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
  { english: 'Diamond', arabic: 'معين', transliteration: 'Ma\'een', imageData: SVG_TEMPLATES.emoji('💠'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ma\'een', 'Murabba\'', 'Muthallath', 'Da\'ira'] } },
  { english: 'Pentagon', arabic: 'خماسي', transliteration: 'Khumasi', imageData: SVG_TEMPLATES.emoji('⬠'), audioData: DUMMY_AUDIO, options: { transliterated: ['Khumasi', 'Sudasi', 'Thumani', 'Murabba\''] } },
  { english: 'Hexagon', arabic: 'سداسي', transliteration: 'Sudasi', imageData: SVG_TEMPLATES.emoji('⬢'), audioData: DUMMY_AUDIO, options: { transliterated: ['Sudasi', 'Khumasi', 'Thumani', 'Da\'ira'] } },
  { english: 'Octagon', arabic: 'ثماني', transliteration: 'Thumani', imageData: SVG_TEMPLATES.emoji('🛑'), audioData: DUMMY_AUDIO, options: { transliterated: ['Thumani', 'Sudasi', 'Khumasi', 'Murabba\''] } },
  { english: 'Arrow', arabic: 'سهم', transliteration: 'Sahm', imageData: SVG_TEMPLATES.emoji('➡️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Sahm', 'Khatt', 'Da\'ira', 'Najma'] } },
  { english: 'Cross', arabic: 'صليب', transliteration: 'Saleeb', imageData: SVG_TEMPLATES.emoji('➕'), audioData: DUMMY_AUDIO, options: { transliterated: ['Saleeb', 'Khatt', 'Murabba\'', 'Da\'ira'] } },
  { english: 'Cube', arabic: 'مكعب', transliteration: 'Muka\'ab', imageData: SVG_TEMPLATES.emoji('🧊'), audioData: DUMMY_AUDIO, options: { transliterated: ['Muka\'ab', 'Kura', 'Ustuwanah', 'Murabba\''] } },
  { english: 'Sphere', arabic: 'كرة', transliteration: 'Kura', imageData: SVG_TEMPLATES.emoji('⚽'), audioData: DUMMY_AUDIO, options: { transliterated: ['Kura', 'Da\'ira', 'Muka\'ab', 'Baydawi'] } },
  { english: 'Cylinder', arabic: 'اسطوانة', transliteration: 'Ustuwanah', imageData: SVG_TEMPLATES.emoji('🥫'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ustuwanah', 'Muka\'ab', 'Da\'ira', 'Kura'] } },
  { english: 'Cone', arabic: 'مخروط', transliteration: 'Makhroot', imageData: SVG_TEMPLATES.emoji('🔻'), audioData: DUMMY_AUDIO, options: { transliterated: ['Makhroot', 'Haram', 'Muthallath', 'Ustuwanah'] } },
  { english: 'Pyramid', arabic: 'هرم', transliteration: 'Haram', imageData: SVG_TEMPLATES.emoji('🔼'), audioData: DUMMY_AUDIO, options: { transliterated: ['Haram', 'Muthallath', 'Muka\'ab', 'Makhroot'] } },
  { english: 'Line', arabic: 'خط', transliteration: 'Khatt', imageData: SVG_TEMPLATES.emoji('➖'), audioData: DUMMY_AUDIO, options: { transliterated: ['Khatt', 'Sahm', 'Da\'ira', 'Murabba\''] } },
];
