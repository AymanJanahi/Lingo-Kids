import { QuizItem } from '../types';
import { SVG_TEMPLATES, DUMMY_AUDIO } from './_helpers';

export const clothing: QuizItem[] = [
  { english: 'Shirt', arabic: 'قميص', transliteration: 'Qamees', imageData: SVG_TEMPLATES.emoji('👕'), audioData: DUMMY_AUDIO, options: { transliterated: ['Qamees', 'Bintal', 'Hithaa', 'Qubba\'ah'] } },
  { english: 'Pants', arabic: 'بنطلون', transliteration: 'Bintal', imageData: SVG_TEMPLATES.emoji('👖'), audioData: DUMMY_AUDIO, options: { transliterated: ['Bintal', 'Qamees', 'Fustan', 'Jawarib'] } },
  { english: 'Shoes', arabic: 'حذاء', transliteration: 'Hithaa', imageData: SVG_TEMPLATES.emoji('👟'), audioData: DUMMY_AUDIO, options: { transliterated: ['Hithaa', 'Jawarib', 'Qamees', 'Bintal'] } },
  { english: 'Hat', arabic: 'قبعة', transliteration: 'Qubba\'ah', imageData: SVG_TEMPLATES.emoji('👒'), audioData: DUMMY_AUDIO, options: { transliterated: ['Qubba\'ah', 'Hithaa', 'Fustan', 'Qamees'] } },
  { english: 'Socks', arabic: 'جوارب', transliteration: 'Jawarib', imageData: SVG_TEMPLATES.emoji('🧦'), audioData: DUMMY_AUDIO, options: { transliterated: ['Jawarib', 'Hithaa', 'Bintal', 'Qubba\'ah'] } },
  { english: 'Dress', arabic: 'فستان', transliteration: 'Fustan', imageData: SVG_TEMPLATES.emoji('👗'), audioData: DUMMY_AUDIO, options: { transliterated: ['Fustan', 'Tannura', 'Qamees', 'Bintal'] } },
  { english: 'Jacket', arabic: 'سترة', transliteration: 'Sutra', imageData: SVG_TEMPLATES.emoji('🧥'), audioData: DUMMY_AUDIO, options: { transliterated: ['Sutra', 'Qamees', 'Mi\'taf', 'Kanza'] } },
  { english: 'Skirt', arabic: 'تنورة', transliteration: 'Tannura', imageData: SVG_TEMPLATES.emoji('👗'), audioData: DUMMY_AUDIO, options: { transliterated: ['Tannura', 'Fustan', 'Bintal', 'Qamees'] } },
  { english: 'Scarf', arabic: 'وشاح', transliteration: 'Wishah', imageData: SVG_TEMPLATES.emoji('🧣'), audioData: DUMMY_AUDIO, options: { transliterated: ['Wishah', 'Qubba\'ah', 'Quffazat', 'Hizam'] } },
  { english: 'Gloves', arabic: 'قفازات', transliteration: 'Quffazat', imageData: SVG_TEMPLATES.emoji('🧤'), audioData: DUMMY_AUDIO, options: { transliterated: ['Quffazat', 'Jawarib', 'Wishah', 'Hithaa'] } },
  { english: 'Sweater', arabic: 'كنزة', transliteration: 'Kanza', imageData: SVG_TEMPLATES.emoji('👕'), audioData: DUMMY_AUDIO, options: { transliterated: ['Kanza', 'Sutra', 'Qamees', 'Mi\'taf'] } },
  { english: 'Coat', arabic: 'معطف', transliteration: 'Mi\'taf', imageData: SVG_TEMPLATES.emoji('🧥'), audioData: DUMMY_AUDIO, options: { transliterated: ['Mi\'taf', 'Sutra', 'Kanza', 'Fustan'] } },
  { english: 'T-shirt', arabic: 'تي شيرت', transliteration: 'T-shirt', imageData: SVG_TEMPLATES.emoji('👕'), audioData: DUMMY_AUDIO, options: { transliterated: ['T-shirt', 'Qamees', 'Kanza', 'Bintal'] } },
  { english: 'Sandals', arabic: 'صندل', transliteration: 'Sandal', imageData: SVG_TEMPLATES.emoji('🩴'), audioData: DUMMY_AUDIO, options: { transliterated: ['Sandal', 'Hithaa', 'Jazma', 'Jawarib'] } },
  { english: 'Boots', arabic: 'جزمة', transliteration: 'Jazma', imageData: SVG_TEMPLATES.emoji('👢'), audioData: DUMMY_AUDIO, options: { transliterated: ['Jazma', 'Hithaa', 'Sandal', 'Qamees'] } },
  { english: 'Belt', arabic: 'حزام', transliteration: 'Hizam', imageData: SVG_TEMPLATES.emoji('🎗️'), audioData: DUMMY_AUDIO, options: { transliterated: ['Hizam', 'Bintal', 'Wishah', 'Qubba\'ah'] } },
  { english: 'Glasses', arabic: 'نظارات', transliteration: 'Natharat', imageData: SVG_TEMPLATES.emoji('👓'), audioData: DUMMY_AUDIO, options: { transliterated: ['Natharat', 'Qubba\'ah', 'Sa\'a', 'Khatim'] } },
  { english: 'Watch', arabic: 'ساعة', transliteration: 'Sa\'a', imageData: SVG_TEMPLATES.emoji('⌚'), audioData: DUMMY_AUDIO, options: { transliterated: ['Sa\'a', 'Khatim', 'Hizam', 'Natharat'] } },
  { english: 'Ring', arabic: 'خاتم', transliteration: 'Khatim', imageData: SVG_TEMPLATES.emoji('💍'), audioData: DUMMY_AUDIO, options: { transliterated: ['Khatim', 'Sa\'a', 'Natharat', 'Wishah'] } },
];
