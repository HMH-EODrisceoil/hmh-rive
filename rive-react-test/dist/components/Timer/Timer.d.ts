import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';

type Size = 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'body-lg' | 'body-md' | 'body-sm' | 'caption' | 'credits';
export type TimerProps = {
    time: number;
    onTimeUp?: () => void;
    size?: Size;
    className?: string;
    ariaLive?: 'polite' | 'assertive' | 'off';
    progressBar?: boolean | undefined;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare const Timer: React.FC<TimerProps>;
export {};
