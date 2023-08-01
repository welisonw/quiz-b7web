import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
   question: Question,
   count: number,
   onAnswer: (answer: number) => void,
}

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

   const checkQuestion = (index: number) => {
      if (selectedAnswer === null) {
         setSelectedAnswer(index);

         setTimeout(() => {
            onAnswer(index);
            setSelectedAnswer(null);
         }, 1100);
      };
   };

   return (
      <div>
         <div className="text-xl font-bold mb-5">{count}.{question.question}</div>
         <div>
            {
               question.options.map((item, index) => (
                  <div
                     key={index}
                     className={`border border-blue-300 px-3 py-2 rounded-md text-lg mb-4 bg-blue-100
                     ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:bg-blue-50'}
                     ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === index && 'bg-green-100 border-green-300'}
                     ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === index && 'bg-red-100 border-red-300'}
                     `}
                     onClick={() => checkQuestion(index)}
                  >
                     {item}
                  </div>
               ))
            }
         </div>
      </div>
   )
};
