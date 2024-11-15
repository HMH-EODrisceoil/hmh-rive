import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type SidebarProps = {
    children: React.ReactNode;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare const Sidebar: React.FC<SidebarProps>;
