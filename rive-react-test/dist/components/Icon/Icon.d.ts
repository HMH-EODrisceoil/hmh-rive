import { default as React } from 'react';
import { Color } from '../../utils/colors';
import { IconId } from '../../utils/icon-list';
import { GradeBand } from 'src/enum/gradeband';

export type IconProps = {
    id: IconId;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'unset';
    fill?: Color | undefined;
    stroke?: Color | undefined;
    opacity?: number | undefined;
    focusable?: boolean;
    className?: string;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare const Icon: React.FC<IconProps>;
