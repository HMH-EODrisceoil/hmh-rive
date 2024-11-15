import { default as React } from 'react';
import { GradeBand } from '../../enum/gradeband';

export type MultipleChoiceQuestionProp = {
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
export declare function MultipleChoiceQuestion({ type, id, name, children, checked, disabled, correct, incorrect, answerShown, dataTestId, }: MultipleChoiceQuestionProp): import("react/jsx-runtime").JSX.Element;
