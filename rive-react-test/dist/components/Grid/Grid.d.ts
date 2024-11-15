import { default as React } from 'react';

type GapSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface GridProps {
    children: React.ReactNode;
    gap?: GapSizes;
    gutter?: boolean | GapSizes;
    className?: string;
    style?: string;
    dataTestId?: string;
}
declare const Grid: React.FC<GridProps>;
export default Grid;
