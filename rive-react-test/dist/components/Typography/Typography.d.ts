import { default as React } from 'react';
import { Color } from '../../utils/colors';
import { GradeBand } from '../../enum/gradeband';

type Size = 'heading-xl' | 'heading-lg' | 'heading-md' | 'heading-sm' | 'body-lg' | 'body-md' | 'body-sm' | 'caption' | 'credits';
export interface TypographyProps {
    children: React.ReactNode;
    element?: React.ElementType;
    color?: Color;
    family?: 'sans' | 'serif' | 'mono';
    size?: Size;
    style?: 'normal' | 'italic' | 'oblique';
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    letterSpacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    textAlign?: React.CSSProperties['textAlign'];
    textTransform?: React.CSSProperties['textTransform'];
    opacity?: React.CSSProperties['opacity'];
    className?: string;
    dataTestId?: string;
    ariaLive?: 'polite' | 'assertive' | 'off';
    gradeBand?: GradeBand;
}
export declare const Typography: React.FC<TypographyProps>;
export {};
