import { default as React } from 'react';
import { Color } from 'src/utils/colors';
import { GradeBand } from 'src/enum/gradeband';

export type HeaderProps = {
    children: React.ReactNode;
    borderWidth?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    borderColor?: Color;
    borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    headerBackgroundColor?: Color;
    headerBreakoutColor?: Color;
    headerBackgroundImage?: string;
    paddingTop?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    paddingBottom?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    paddingLeft?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    paddingRight?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    className?: string;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare const Header: React.FC<HeaderProps>;
