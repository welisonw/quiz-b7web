import { Question } from "@/types/Question";

type Props = {
   questions: Question[];
   answers: number[];
};

export const Results = ({ questions, answers }: Props) => {
   return (
      <div>
         {
            questions.map((item, index) => (
               <div key={index} className='mb-3'>
                  <div className="font-bold">{index + 1}.{item.question}</div>
                  <div className="py-2">Sua resposta: <span className="font-bold text-blue-700">{item.options[item.answer]}</span></div>
                  <div className="mb-5">

                  <span className={`
                     py-1 px-2 rounded border
                     ${item.answer === answers[index] && 'Niiice, very good! 🥳' && 'bg-green-100 border-green-300'}
                     ${item.answer !== answers[index] && 'bg-red-100 border-red-300'}
                     `}
                  >
                     {item.answer === answers[index] ? 'Niiice, very good! 🥳' : 'You missed. Try again! ☹️'}   
                     
                  </span>

                     {/* <span className="font-bold bg-green-100 border-green-300 p-1 rounded-md">{item.answer === answers[index] ? 'Niiice, very good! 🥳' : 'You missed. Try again! ☹️'}</span> */}
                  
                  </div>
               </div>
            ))
         }
      </div>
   );
};
