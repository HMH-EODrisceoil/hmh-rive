import { default as React } from 'react';
import { Color } from 'src/utils/colors';
import { GradeBand } from 'src/enum/gradeband';

export type PillProps = {
    children: React.ReactNode;
    backgroundColor: Color;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare function Pill({ children, backgroundColor, dataTestId }: PillProps): import("react/jsx-runtime").JSX.Element;
