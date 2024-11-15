import { GradeBand } from 'src/enum/gradeband';

export type InputTextProps = {
    correct: boolean;
    incorrect?: boolean;
    answerShown?: boolean;
    number?: boolean;
    disabled?: boolean;
    defaultText?: string | number;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare function InputText({ correct, incorrect, answerShown, number, disabled, defaultText, dataTestId, }: InputTextProps): import("react/jsx-runtime").JSX.Element;
