import { default as React } from 'react';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';

export type ButtonProps = {
    children: React.ReactNode;
    primary: boolean;
    title?: string;
    disabled?: boolean;
    correct?: boolean;
    incorrect?: boolean;
    submit?: 'button' | 'submit';
    clickHandler?: () => void;
    iconId?: IconId;
    iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    fill?: Color;
    iconPosition?: 'before' | 'after';
    iconOpacity?: number | undefined;
    ariaLabel?: string;
    dataTestId?: string;
    additionalClass?: string;
    gradeBand?: GradeBand;
};
export declare const Button: React.FC<ButtonProps>;
