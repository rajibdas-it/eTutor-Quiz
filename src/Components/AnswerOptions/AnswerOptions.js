import { Label, Radio } from 'flowbite-react';
import React from 'react';

const AnswerOptions = () => {
    return (
        <div className="flex items-center gap-2 border border-gray-700 p-5 rounded-md">
            <Radio
                id="united-state"
                name="countries"
                value="USA"
            />
            <Label htmlFor="united-state">
                United States
            </Label>
        </div>
    );
};

export default AnswerOptions;