export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: Difficulty;
  set: number;
}

export interface QuizState {
  currentQuestion: number;
  correctAnswers: number;
  selectedSet: number;
  selectedDifficulty: Difficulty;
  isQuizStarted: boolean;
  isQuizComplete: boolean;
}