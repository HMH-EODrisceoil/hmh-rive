import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type BlockquoteProps = {
    children: React.ReactNode;
    gradeBand?: GradeBand | undefined;
};
export declare const Blockquote: React.FC<BlockquoteProps>;
