import { Question, Difficulty } from '../types';

const generateQuestions = (): Question[] => {
  const questions: Question[] = [];
  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];
  
  // Generate 33 sets of questions
  for (let set = 1; set <= 33; set++) {
    difficulties.forEach((difficulty) => {
      // Generate 5 questions for each difficulty in each set
      for (let i = 1; i <= 5; i++) {
        const baseComplexity = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 30;
        questions.push({
          id: questions.length + 1,
          question: `What is ${baseComplexity} + ${i} × ${set}?`,
          options: [
            `${baseComplexity + (i * set)}`,
            `${baseComplexity + (i * set) + 1}`,
            `${baseComplexity + (i * set) - 1}`,
            `${baseComplexity + (i * set) + 2}`
          ],
          correctAnswer: `${baseComplexity + (i * set)}`,
          difficulty,
          set,
        });
      }
    });
  }
  
  return questions;
};

export const quizQuestions = generateQuestions();