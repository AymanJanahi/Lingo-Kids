import { Language } from './types';

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
    generatingAudio: "Getting sound...",
    score: "Score",
    roundComplete: "Round Complete!",
    yourScore: "Your Score",
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
    generatingAudio: "نجلب الصوت...",
    score: "النتيجة",
    roundComplete: "انتهت الجولة!",
    yourScore: "نتيجتك",
  }
};