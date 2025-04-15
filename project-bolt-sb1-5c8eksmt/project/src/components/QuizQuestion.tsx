import React from 'react';
import { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Question {questionNumber} of {totalQuestions}
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full capitalize">
          {question.difficulty}
        </span>
      </div>

      <h2 className="text-xl font-semibold">{question.question}</h2>

      <div className="grid gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full text-left px-4 py-3 border rounded-lg hover:bg-gray-50 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};