import { default as React } from 'react';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';

export type ProgressBarProps = {
    value: number;
    max?: number;
    backgroundColor?: Color;
    barColor?: Color;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare const ProgressBar: React.FC<ProgressBarProps>;
