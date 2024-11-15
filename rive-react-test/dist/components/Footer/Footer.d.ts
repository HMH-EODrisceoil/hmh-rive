import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';
import { Color } from 'src/utils/colors';

export interface FooterProps {
    children: React.ReactNode;
    footerBreakoutColor?: Color;
    footerPosition?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    footerPositionTop?: string;
    footerHeight?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    footerWidth?: string | number;
    footerBreakoutLeft?: string | number;
    footerBreakoutWidth?: string | number;
    footerPaddingTop?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    footerPaddingRight?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    footerPaddingLeft?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    footerPaddingBottom?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    footerMarginTop?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    className?: string;
    dataTestId?: string;
    gradeBand?: GradeBand;
}
export declare const Footer: React.FC<FooterProps>;
