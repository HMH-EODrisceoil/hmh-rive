import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type CheckboxProps = {
    id: string;
    name: string;
    children: React.ReactNode;
    checked?: boolean;
    disabled?: boolean;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare function Checkbox({ id, name, children, checked, disabled, dataTestId }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
