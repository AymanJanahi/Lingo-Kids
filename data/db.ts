import { QuizItem, Category } from '../types';

// Base64 encoded SVGs for simple, fast-loading, offline images.
const SVG_TEMPLATES = {
  text: (content: string, color: string = 'black') => {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="55%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="${color}">${content}</text></svg>`;
    // The string must be URI encoded to handle unicode characters correctly for btoa.
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
  },
  animal: (emoji: string) => {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="55%" font-size="80" dominant-baseline="middle" text-anchor="middle">${emoji}</text></svg>`;
    // The string must be URI encoded to handle unicode characters correctly for btoa.
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
  },
  color: (fillColor: string) => `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${fillColor}" /></svg>`)}`,
};

export const QUIZ_BANK: Record<Category['id'], QuizItem[]> = {
  numbers: [
    {
      english: 'One', arabic: 'واحد', transliteration: 'Wahid',
      imageData: SVG_TEMPLATES.text('1'),
      options: { transliterated: ['Wahid', 'Ithnan', 'Thalatha', 'Arba\'a'] }
    },
    {
      english: 'Two', arabic: 'اثنان', transliteration: 'Ithnan',
      imageData: SVG_TEMPLATES.text('2'),
      options: { transliterated: ['Ithnan', 'Khamsa', 'Wahid', 'Sitta'] }
    },
    {
      english: 'Three', arabic: 'ثلاثة', transliteration: 'Thalatha',
      imageData: SVG_TEMPLATES.text('3'),
      options: { transliterated: ['Thalatha', 'Sab\'a', 'Asharah', 'Tis\'a'] }
    },
    {
        english: 'Four', arabic: 'أربعة', transliteration: 'Arba\'a',
        imageData: SVG_TEMPLATES.text('4'),
        options: { transliterated: ['Arba\'a', 'Wahid', 'Ithnan', 'Thalatha'] }
    },
    {
        english: 'Five', arabic: 'خمسة', transliteration: 'Khamsa',
        imageData: SVG_TEMPLATES.text('5'),
        options: { transliterated: ['Khamsa', 'Sitta', 'Sab\'a', 'Thamania'] }
    },
  ],
  alphabet: [
    {
      english: 'A (Alif)', arabic: 'أ', transliteration: 'Alif',
      imageData: SVG_TEMPLATES.text('أ'),
      options: { transliterated: ['Alif', 'Ba', 'Ta', 'Tha'] }
    },
    {
      english: 'B (Ba)', arabic: 'ب', transliteration: 'Ba',
      imageData: SVG_TEMPLATES.text('ب'),
      options: { transliterated: ['Ba', 'Jeem', 'Alif', 'Dal'] }
    },
    {
      english: 'T (Ta)', arabic: 'ت', transliteration: 'Ta',
      imageData: SVG_TEMPLATES.text('ت'),
      options: { transliterated: ['Ta', 'Tha', 'Kha', 'Ra'] }
    },
  ],
  animals: [
    {
      english: 'Cat', arabic: 'قطة', transliteration: 'Qitta',
      imageData: SVG_TEMPLATES.animal('🐱'),
      options: { transliterated: ['Qitta', 'Kalb', 'Asad', 'Fil'] }
    },
    {
      english: 'Dog', arabic: 'كلب', transliteration: 'Kalb',
      imageData: SVG_TEMPLATES.animal('🐶'),
      options: { transliterated: ['Kalb', 'Dab', 'Qitta', 'Namir'] }
    },
    {
      english: 'Lion', arabic: 'أسد', transliteration: 'Asad',
      imageData: SVG_TEMPLATES.animal('🦁'),
      options: { transliterated: ['Asad', 'Qird', 'Fil', 'Kalb'] }
    },
    {
      english: 'Elephant', arabic: 'فيل', transliteration: 'Fil',
      imageData: SVG_TEMPLATES.animal('🐘'),
      options: { transliterated: ['Fil', 'Asad', 'Qitta', 'Hisan'] }
    },
  ],
  colors: [
    {
      english: 'Red', arabic: 'أحمر', transliteration: 'Ahmar',
      imageData: SVG_TEMPLATES.color('red'),
      options: { transliterated: ['Ahmar', 'Azraq', 'Akhdar', 'Asfar'] }
    },
    {
      english: 'Blue', arabic: 'أزرق', transliteration: 'Azraq',
      imageData: SVG_TEMPLATES.color('blue'),
      options: { transliterated: ['Azraq', 'Abyad', 'Ahmar', 'Aswad'] }
    },
    {
      english: 'Green', arabic: 'أخضر', transliteration: 'Akhdar',
      imageData: SVG_TEMPLATES.color('green'),
      options: { transliterated: ['Akhdar', 'Burtuqali', 'Azraq', 'Ahmar'] }
    },
     {
      english: 'Yellow', arabic: 'أصفر', transliteration: 'Asfar',
      imageData: SVG_TEMPLATES.color('yellow'),
      options: { transliterated: ['Asfar', 'Ahmar', 'Azraq', 'Akhdar'] }
    },
  ],
  objects: [
    {
      english: 'Book', arabic: 'كتاب', transliteration: 'Kitab',
      imageData: SVG_TEMPLATES.animal('📖'),
      options: { transliterated: ['Kitab', 'Qalam', 'Bayt', 'Kursi'] }
    },
    {
      english: 'House', arabic: 'بيت', transliteration: 'Bayt',
      imageData: SVG_TEMPLATES.animal('🏠'),
      options: { transliterated: ['Bayt', 'Shajara', 'Kitab', 'Sayara'] }
    },
    {
      english: 'Car', arabic: 'سيارة', transliteration: 'Sayara',
      imageData: SVG_TEMPLATES.animal('🚗'),
      options: { transliterated: ['Sayara', 'Bab', 'Bayt', 'Qalam'] }
    },
  ]
};