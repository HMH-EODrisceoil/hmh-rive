import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type AccordionProps = {
    data: {
        title: string;
        content: React.ReactNode;
    }[];
    variants?: 'default' | 'divider' | 'color';
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare function Accordion({ data, variants, dataTestId }: AccordionProps): import("react/jsx-runtime").JSX.Element;
