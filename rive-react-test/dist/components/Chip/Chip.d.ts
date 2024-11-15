import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type ChipProps = {
    children: React.ReactNode;
    num: string | number;
    totalNum?: string | number;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare function Chip({ children, num, totalNum, dataTestId }: ChipProps): import("react/jsx-runtime").JSX.Element;
