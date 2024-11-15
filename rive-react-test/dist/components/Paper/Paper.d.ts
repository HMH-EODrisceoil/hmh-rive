import { default as React } from 'react';
import { GradeBand } from '../../enum/gradeband';

export type PaperProps = {
    children: React.ReactNode;
    element?: 'section' | 'article' | 'main' | 'aside' | 'div';
    elevation?: 0 | 1 | 2;
    roundedCorner?: boolean;
    className?: string;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare const Paper: React.FC<PaperProps>;
