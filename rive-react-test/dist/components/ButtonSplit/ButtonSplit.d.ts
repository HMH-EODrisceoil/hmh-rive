import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type ButtonSplitProps = {
    children: React.ReactNode;
    data: {
        label: string;
        value: React.ReactNode;
    }[];
    disabled?: boolean;
    iconId?: string;
    iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    fill?: string;
    ariaLabel?: string;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare function ButtonSplit({ children, disabled, data, dataTestId }: ButtonSplitProps): import("react/jsx-runtime").JSX.Element;
