import { default as React } from 'react';
import { GradeBand } from '../../enum/gradeband';

export type ListProps = {
    data: {
        content: React.ReactNode;
    }[];
    listType?: 'ordered' | 'unordered';
    variants?: 'none' | 'circle' | 'disc' | 'square' | 'alpha' | 'decimal' | 'roman';
    className?: string;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare const List: React.FC<ListProps>;
