'use client';

import { QuestionItem } from "@/components/QuestionItem";
import { questions } from "@/data/questions";
import { useState } from "react";
import { Results } from "@/components/Results";


const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const title = 'English Quiz';

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    };
  };

  const handleAnswered = (answer: number) => {
    setAnswers([ ...answers, answer ]);

    loadNextQuestion();
  };  

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-300">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black/60">
        <h1 className="p-5 font-bold text-2xl border-b border-gray-300 text-center">{title}</h1>
        <h3 className="p-5">
          {
            !showResult &&
            <QuestionItem 
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          }
          {
            showResult &&
            <Results
              questions={questions}
              answers={answers}
            />
          }

        </h3>
        <div className="p-5 text-center border border-t border-gray-300">
          {
            !showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length > 1 || questions.length === 0 ? 's' : ''}`
          }
          {
            showResult &&
            <button className="px-3 py-2 rounded-md bg-blue-800 text-white hover:bg-blue-600" onClick={handleRestartQuiz}>Restart quiz</button>
          }

        </div>
      </div>
    </div>
  );
};

export default Page;
