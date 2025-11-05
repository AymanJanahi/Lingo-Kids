import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const places: QuizItem[] = [
  { english: 'House', arabic: 'بيت', transliteration: 'Bayt', imageData: SVG_TEMPLATES.emoji('🏠'), audioData: DUMMY_AUDIO, options: { transliterated: ['Bayt', 'Madrasa', 'Hadiqa', 'Shati\''] } },
  { english: 'School', arabic: 'مدرسة', transliteration: 'Madrasa', imageData: SVG_TEMPLATES.emoji('🏫'), audioData: DUMMY_AUDIO, options: { transliterated: ['Madrasa', 'Bayt', 'Maktaba', 'Mustashfa'] } },
  { english: 'Park', arabic: 'حديقة', transliteration: 'Hadiqa', imageData: SVG_TEMPLATES.emoji('🏞️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Hadiqa', 'Shati\'', 'Bayt', 'Sooq'] } },
  { english: 'Beach', arabic: 'شاطئ', transliteration: 'Shati\'', imageData: SVG_TEMPLATES.emoji('🏖️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Shati\'', 'Hadiqa', 'Masjid', 'Sooq'] } },
  { english: 'Hospital', arabic: 'مستشفى', transliteration: 'Mustashfa', imageData: SVG_TEMPLATES.emoji('🏥'), audioData: DUMMY_AUDIO, options: { transliterated: ['Mustashfa', 'Madrasa', 'Bayt', 'Maktaba'] } },
  { english: 'Market', arabic: 'سوق', transliteration: 'Sooq', imageData: SVG_TEMPLATES.emoji('🛒'), audioData: DUMMY_AUDIO, options: { transliterated: ['Sooq', 'Hadiqa', 'Shati\'', 'Masjid'] } },
  { english: 'Mosque', arabic: 'مسجد', transliteration: 'Masjid', imageData: SVG_TEMPLATES.emoji('🕌'), audioData: DUMMY_AUDIO, options: { transliterated: ['Masjid', 'Bayt', 'Madrasa', 'Sooq'] } },
  { english: 'Library', arabic: 'مكتبة', transliteration: 'Maktaba', imageData: SVG_TEMPLATES.emoji('📚'), audioData: DUMMY_AUDIO, options: { transliterated: ['Maktaba', 'Madrasa', 'Mustashfa', 'Bayt'] } },
];
