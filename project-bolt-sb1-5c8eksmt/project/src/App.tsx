import React, { useState } from 'react';
import { QuizSetup } from './components/QuizSetup';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResults } from './components/QuizResults';
import { quizQuestions } from './data/questions';
import { Difficulty, QuizState } from './types';
import { Brain } from 'lucide-react';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    correctAnswers: 0,
    selectedSet: 1,
    selectedDifficulty: 'easy',
    isQuizStarted: false,
    isQuizComplete: false,
  });

  const startQuiz = (difficulty: Difficulty, set: number) => {
    setQuizState({
      ...quizState,
      selectedDifficulty: difficulty,
      selectedSet: set,
      isQuizStarted: true,
      currentQuestion: 0,
      correctAnswers: 0,
      isQuizComplete: false,
    });
  };

  const handleAnswer = (answer: string) => {
    const currentQuestions = quizQuestions.filter(
      q => q.difficulty === quizState.selectedDifficulty && q.set === quizState.selectedSet
    );
    const isCorrect = answer === currentQuestions[quizState.currentQuestion].correctAnswer;

    setQuizState(prev => ({
      ...prev,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      currentQuestion: prev.currentQuestion + 1,
      isQuizComplete: prev.currentQuestion + 1 === 5,
    }));
  };

  const restartQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      correctAnswers: 0,
      selectedSet: 1,
      selectedDifficulty: 'easy',
      isQuizStarted: false,
      isQuizComplete: false,
    });
  };

  const currentQuestions = quizQuestions.filter(
    q => q.difficulty === quizState.selectedDifficulty && q.set === quizState.selectedSet
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <Brain className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold">Quiz Master</h1>
        </div>

        {!quizState.isQuizStarted && <QuizSetup onStart={startQuiz} />}

        {quizState.isQuizStarted && !quizState.isQuizComplete && (
          <>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">
                  Set {quizState.selectedSet}
                </span>
                <span className="text-sm text-gray-600">
                  Score: {quizState.correctAnswers}/{quizState.currentQuestion}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{
                    width: `${(quizState.currentQuestion / 5) * 100}%`,
                  }}
                />
              </div>
            </div>

            <QuizQuestion
              question={currentQuestions[quizState.currentQuestion]}
              onAnswer={handleAnswer}
              questionNumber={quizState.currentQuestion + 1}
              totalQuestions={5}
            />
          </>
        )}

        {quizState.isQuizComplete && (
          <QuizResults
            correctAnswers={quizState.correctAnswers}
            totalQuestions={5}
            onRestart={restartQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;