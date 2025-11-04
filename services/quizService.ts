import { QUIZ_BANK } from '../data/db';
import { QuizItem, Category } from '../types';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const getQuizDataForCategory = (categoryId: Category['id']): QuizItem[] => {
  if (categoryId === 'random') {
    const allItems = Object.values(QUIZ_BANK).flat();
    return shuffleArray(allItems).slice(0, 10); // Return 10 random items
  }
  
  const items = QUIZ_BANK[categoryId as keyof typeof QUIZ_BANK];
  if (!items) {
    console.error(`No data found for category: ${categoryId}`);
    return [];
  }
  // Shuffle the items for the category and return 5 for the game
  return shuffleArray(items).slice(0, 5);
};