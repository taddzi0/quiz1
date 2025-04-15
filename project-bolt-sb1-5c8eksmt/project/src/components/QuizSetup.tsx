import React from 'react';
import { Difficulty } from '../types';

interface QuizSetupProps {
  onStart: (difficulty: Difficulty, set: number) => void;
}

export const QuizSetup: React.FC<QuizSetupProps> = ({ onStart }) => {
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<Difficulty>('easy');
  const [selectedSet, setSelectedSet] = React.useState(1);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-3">Select Difficulty</h2>
        <div className="flex gap-4">
          {(['easy', 'medium', 'hard'] as Difficulty[]).map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
              className={`px-4 py-2 rounded-lg capitalize ${
                selectedDifficulty === difficulty
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Select Set</h2>
        <select
          value={selectedSet}
          onChange={(e) => setSelectedSet(Number(e.target.value))}
          className="w-full p-2 border rounded-lg"
        >
          {Array.from({ length: 33 }, (_, i) => i + 1).map((set) => (
            <option key={set} value={set}>
              Set {set}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={() => onStart(selectedDifficulty, selectedSet)}
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
      >
        Start Quiz
      </button>
    </div>
  );
};