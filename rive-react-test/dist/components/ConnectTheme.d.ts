import { default as React, ReactElement } from 'react';
import { GradeBand } from '../enum/gradeband';

export declare function ConnectTheme({ children, gradeBand, themeWrapperRef, }: {
    children: ReactElement;
    gradeBand: GradeBand;
    themeWrapperRef: React.RefObject<HTMLElement>;
}): import("react/jsx-runtime").JSX.Element;
