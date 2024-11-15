import { default as React } from 'react';
import { IconId } from '../../utils/icon-list';
import { Color } from '../../utils/colors';
import { GradeBand } from 'src/enum/gradeband';

export type ButtonMenuProps = {
    id: string;
    children: React.ReactNode;
    title?: string;
    clickHandler?: () => void;
    iconId?: IconId;
    iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    fill?: Color;
    iconPosition?: 'before' | 'after';
    ariaLabel?: string;
    dataTestId?: string;
    additionalClass?: string;
    clickedClass?: string;
    gradeBand?: GradeBand;
};
export declare const ButtonMenu: React.FC<ButtonMenuProps>;
