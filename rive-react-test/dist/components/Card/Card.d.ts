import { default as React } from 'react';
import { FigureProps } from '../Figure/Figure';
import { GradeBand } from 'src/enum/gradeband';

export type CardProps = FigureProps & {
    image: boolean;
    headerElement?: keyof React.ReactHTML;
    headerContent?: React.ReactNode;
    mainContent: React.ReactNode;
    footerContent?: React.ReactNode;
    dataTestId?: string;
    gradeBand?: GradeBand;
    children?: React.ReactNode;
};
export declare function Card({ image, headerElement, headerContent, mainContent, footerContent, dataTestId, children, }: CardProps): import("react/jsx-runtime").JSX.Element;
