import React from 'react';
import { Trophy } from 'lucide-react';

interface QuizResultsProps {
  correctAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  correctAnswers,
  totalQuestions,
  onRestart,
}) => {
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="text-center space-y-6">
      <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
      
      <div>
        <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-gray-600">
          You got {correctAnswers} out of {totalQuestions} questions correct
        </p>
        <p className="text-2xl font-bold mt-4">{percentage.toFixed(1)}%</p>
      </div>

      <button
        onClick={onRestart}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Try Another Quiz
      </button>
    </div>
  );
};