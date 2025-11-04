import { QuizItem, Category } from '../types';

import { numbers } from './numbers';
import { alphabet } from './alphabet';
import { animals } from './animals';
import { colors } from './colors';
import { objects } from './objects';
import { food } from './food';
import { family } from './family';
import { body } from './body';
import { clothing } from './clothing';
import { weather } from './weather';

type QuizBank = Omit<Record<Category['id'], QuizItem[]>, 'random'>;

export const QUIZ_BANK: QuizBank = {
  numbers,
  alphabet,
  animals,
  colors,
  objects,
  food,
  family,
  body,
  clothing,
  weather,
};
