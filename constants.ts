import { Category, Language } from './types';

export const CATEGORIES: Category[] = [
  { id: 'numbers', name: { en: 'Numbers', ar: 'الأرقام' }, icon: '🔢' },
  { id: 'alphabet', name: { en: 'Alphabet', ar: 'الحروف الأبجدية' }, icon: '🔤' },
  { id: 'animals', name: { en: 'Animals', ar: 'الحيوانات' }, icon: '🐘' },
  { id: 'colors', name: { en: 'Colors', ar: 'الألوان' }, icon: '🎨' },
  { id: 'objects', name: { en: 'Objects', ar: 'الأشياء' }, icon: '🧸' },
];

export const UI_TEXT: Record<Language, Record<string, string>> = {
  en: {
    title: "Lingo Kids",
    chooseCategory: "Choose a Category",
    loading: "Getting your game ready...",
    backToMenu: "Back to Menu",
    correct: "Correct!",
    wrong: "Try again!",
    next: "Next",
    error: "Oops! Something went wrong. Please try again.",
    generatingImage: "Drawing a picture...",
    generatingAudio: "Getting sound..."
  },
  ar: {
    title: "أطفال لينجو",
    chooseCategory: "اختر فئة",
    loading: "نجهز لعبتك...",
    backToMenu: "العودة للقائمة",
    correct: "صحيح!",
    wrong: "حاول مرة أخرى!",
    next: "التالي",
    error: "عفوًا! حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    generatingImage: "نرسم صورة...",
    generatingAudio: "نجلب الصوت..."
  }
};
