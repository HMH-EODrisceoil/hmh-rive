import { default as React } from 'react';
import { ButtonProps } from '../Button/Button';
import { GradeBand } from 'src/enum/gradeband';

export type ButtonRiveProps = ButtonProps & {
    textTransform?: React.CSSProperties['textTransform'];
    opacity?: any | undefined;
    animSrc: string;
    stateMachine?: string;
    buttonText: string;
    gradeBand?: GradeBand;
    height?: boolean;
    playState?: string | null;
};
export declare const ButtonRive: React.FC<ButtonRiveProps>;
