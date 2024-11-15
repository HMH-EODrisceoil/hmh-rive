import { default as React } from 'react';
import { GradeBand } from '../../enum/gradeband';

export type DividerProps = {
    orientation?: 'horizontal' | 'vertical';
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare const Divider: React.FC<DividerProps>;
