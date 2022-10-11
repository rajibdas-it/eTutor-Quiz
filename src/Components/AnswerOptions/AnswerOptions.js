import { Label, Radio } from 'flowbite-react';
import React from 'react';

const AnswerOptions = ({ option, qs }) => {
    // console.log(qs);
    const { id, question, correctAnswer, options } = qs;
    return (
        // border border - gray - 700 rounded - md
        <div className="flex items-center gap-2">
            <Radio
                id={id}
                name={question}
                value={option}
            />
            <Label htmlFor={id}>
                {option}
            </Label>
        </div>
    );
};

export default AnswerOptions;