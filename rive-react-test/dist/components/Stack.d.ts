import { default as React } from 'react';

interface BreakpointValues {
    direction?: 'row' | 'column';
    spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    paddingX?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    paddingY?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
interface StackProps {
    children: React.ReactNode;
    xs?: BreakpointValues;
    sm?: BreakpointValues;
    md?: BreakpointValues;
    lg?: BreakpointValues;
    xl?: BreakpointValues;
    className?: string;
    dataTestId?: string;
}
declare const Stack: React.FC<StackProps>;
export default Stack;
