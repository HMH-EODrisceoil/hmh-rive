import { default as React } from 'react';

interface BreakpointValues {
    startCol?: number;
    spanCol?: number;
    rowSpan?: number;
}
interface GridItemProps {
    children: React.ReactNode;
    xs?: BreakpointValues;
    sm?: BreakpointValues;
    md?: BreakpointValues;
    lg?: BreakpointValues;
    xl?: BreakpointValues;
    className?: string;
    dataTestId?: string;
}
declare const GridItem: React.FC<GridItemProps>;
export default GridItem;
