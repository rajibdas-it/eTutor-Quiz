import { Label, Radio } from 'flowbite-react';
import React from 'react';

const AnswerOptions = () => {
    return (
        <div>
            <fieldset
                className="flex flex-col gap-4"
                id="radio"
            >
                <legend>
                    Choose your favorite country
                </legend>
                <div className="flex items-center gap-2">
                    <Radio
                        id="united-state"
                        name="countries"
                        value="USA"
                        defaultChecked={true}
                    />
                    <Label htmlFor="united-state">
                        United States
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio
                        id="germany"
                        name="countries"
                        value="Germany"
                    />
                    <Label htmlFor="germany">
                        Germany
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio
                        id="spain"
                        name="countries"
                        value="Spain"
                    />
                    <Label htmlFor="spain">
                        Spain
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio
                        id="uk"
                        name="countries"
                        value="United Kingdom"
                    />
                    <Label htmlFor="uk">
                        United Kingdom
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio
                        id="china"
                        name="countries"
                        value="China"
                        disabled={true}
                    />
                    <Label
                        htmlFor="china"
                        disabled={true}
                    >
                        China (disabled)
                    </Label>
                </div>
            </fieldset>
        </div>
    );
};

export default AnswerOptions;