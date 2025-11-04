import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const body: QuizItem[] = [
  { english: 'Head', arabic: 'رأس', transliteration: 'Ras', imageData: SVG_TEMPLATES.emoji('👤'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ras', 'Yad', 'Qadam', 'Ayn'] } },
  { english: 'Hand', arabic: 'يد', transliteration: 'Yad', imageData: SVG_TEMPLATES.emoji('✋'), audioData: DUMMY_AUDIO, options: { transliterated: ['Yad', 'Ras', 'Rijl', 'Udhun'] } },
  { english: 'Foot', arabic: 'قدم', transliteration: 'Qadam', imageData: SVG_TEMPLATES.emoji('🦶'), audioData: DUMMY_AUDIO, options: { transliterated: ['Qadam', 'Yad', 'Anf', 'Fam'] } },
  { english: 'Eye', arabic: 'عين', transliteration: 'Ayn', imageData: SVG_TEMPLATES.emoji('👁️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Ayn', 'Udhun', 'Ras', 'Yad'] } },
  { english: 'Nose', arabic: 'أنف', transliteration: 'Anf', imageData: SVG_TEMPLATES.emoji('👃'), audioData: DUMMY_AUDIO, options: { transliterated: ['Anf', 'Fam', 'Ayn', 'Qadam'] } },
  { english: 'Mouth', arabic: 'فم', transliteration: 'Fam', imageData: SVG_TEMPLATES.emoji('👄'), audioData: DUMMY_AUDIO, options: { transliterated: ['Fam', 'Anf', 'Ayn', 'Udhun'] } },
  { english: 'Ear', arabic: 'أذن', transliteration: 'Udhun', imageData: SVG_TEMPLATES.emoji('👂'), audioData: DUMMY_AUDIO, options: { transliterated: ['Udhun', 'Ayn', 'Fam', 'Ras'] } },
  { english: 'Hair', arabic: 'شعر', transliteration: 'Sha\'r', imageData: SVG_TEMPLATES.emoji('👱‍♀️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Sha\'r', 'Ras', 'Ayn', 'Yad'] } },
  { english: 'Finger', arabic: 'إصبع', transliteration: 'Isba\'', imageData: SVG_TEMPLATES.emoji('👉'), audioData: DUMMY_AUDIO, options: { transliterated: ['Isba\'', 'Yad', 'Qadam', 'Rijl'] } },
  { english: 'Leg', arabic: 'رجل', transliteration: 'Rijl', imageData: SVG_TEMPLATES.emoji('🦵'), audioData: DUMMY_AUDIO, options: { transliterated: ['Rijl', 'Qadam', 'Yad', 'Dhira\''] } },
  { english: 'Arm', arabic: 'ذراع', transliteration: 'Dhira\'', imageData: SVG_TEMPLATES.emoji('💪'), audioData: DUMMY_AUDIO, options: { transliterated: ['Dhira\'', 'Yad', 'Rijl', 'Ras'] } },
  { english: 'Teeth', arabic: 'أسنان', transliteration: 'Asnan', imageData: SVG_TEMPLATES.emoji('😁'), audioData: DUMMY_AUDIO, options: { transliterated: ['Asnan', 'Fam', 'Lisan', 'Anf'] } },
  { english: 'Tongue', arabic: 'لسان', transliteration: 'Lisan', imageData: SVG_TEMPLATES.emoji('👅'), audioData: DUMMY_AUDIO, options: { transliterated: ['Lisan', 'Fam', 'Asnan', 'Udhun'] } },
  { english: 'Neck', arabic: 'عنق', transliteration: 'Unuq', imageData: SVG_TEMPLATES.emoji('👤'), audioData: DUMMY_AUDIO, options: { transliterated: ['Unuq', 'Ras', 'Dhahran', 'Sha\'r'] } },
  { english: 'Back', arabic: 'ظهر', transliteration: 'Dhahran', imageData: SVG_TEMPLATES.emoji('🚶'), audioData: DUMMY_AUDIO, options: { transliterated: ['Dhahran', 'Unuq', 'Rijl', 'Dhira\''] } },
];
