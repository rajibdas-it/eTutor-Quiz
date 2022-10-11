import { Label, Radio } from 'flowbite-react';
import React from 'react';

const AnswerOptions = ({ option, qs, handleQuestionAnswer }) => {
    // console.log(qs);
    const { id, question, correctAnswer, options } = qs;
    return (
        // border border - gray - 700 rounded - md handleQuestionAnswer
        <div className="flex items-center gap-2" onChange={(e) => handleQuestionAnswer(e.target.value)}>
            <input type="radio" value={option} name={question} /> {option}
        </div>
        // <div className="flex items-center gap-2">
        //     <Radio
        //         id={id}
        //         name={question}
        //         value={option}
        //     />
        //     <Label htmlFor={id}>
        //         {option}
        //     </Label>
        // </div>
    );
};

export default AnswerOptions;