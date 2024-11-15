import { GradeBand } from 'src/enum/gradeband';

export type SelectBoxProps = {
    data: {
        value: string;
        label: string | number;
    }[];
    defaultValue?: string;
    correct?: boolean;
    incorrect?: boolean;
    answerShown?: boolean;
    disabled?: boolean;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare function SelectBox({ data, defaultValue, correct, incorrect, answerShown, disabled, dataTestId, }: SelectBoxProps): import("react/jsx-runtime").JSX.Element;
