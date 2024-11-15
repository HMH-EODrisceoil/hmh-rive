import { default as React } from 'react';
import { GradeBand } from '../../enum/gradeband';

export type RiveSimpleProps = {
    gradeBand?: GradeBand;
    srcDefault?: string;
    src23?: string;
    src45?: string;
    src68?: string;
    src912?: string;
    descDefault?: string;
    desc23?: string;
    desc45?: string;
    desc68?: string;
    desc912?: string;
    stateMachine?: string;
    artboard?: string;
    autoplay?: boolean;
    hidePlayPause?: boolean;
    playState?: string;
    contain?: boolean;
    height?: boolean;
    inputs?: any;
};
export declare const RiveSimple: React.FC<RiveSimpleProps>;
