import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type FigureProps = {
    children?: React.ReactNode;
    caption?: string;
    cite?: string;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare const Figure: React.FC<FigureProps>;
