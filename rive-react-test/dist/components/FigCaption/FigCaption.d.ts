import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type FigCaptionProps = {
    caption?: string;
    cite?: string;
    gradeBand?: GradeBand;
};
export declare const FigCaption: React.FC<FigCaptionProps>;
