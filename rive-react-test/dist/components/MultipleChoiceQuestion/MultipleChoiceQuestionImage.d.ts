import { default as React } from 'react';
import { GradeBand } from '../../enum/gradeband';

export type MultipleChoiceQuestionImageProp = {
    type: 'checkbox' | 'radio';
    id: string;
    name: string;
    children: React.ReactNode;
    checked?: boolean;
    disabled?: boolean;
    answerShown?: boolean;
    correct?: boolean;
    incorrect?: boolean;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare function MultipleChoiceQuestionImage({ type, id, name, children, checked, disabled, correct, incorrect, answerShown, dataTestId, }: MultipleChoiceQuestionImageProp): import("react/jsx-runtime").JSX.Element;
