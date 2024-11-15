import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type InputBoxProps = {
    type: 'checkbox' | 'radio';
    id: string;
    name: string;
    children: React.ReactNode;
    checked?: boolean;
    disabled?: boolean;
    correct?: boolean;
    incorrect?: boolean;
    answerShown?: boolean;
    noShadow?: boolean;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare function InputBox({ type, id, name, children, checked, disabled, correct, incorrect, answerShown, noShadow, dataTestId, }: InputBoxProps): import("react/jsx-runtime").JSX.Element;
