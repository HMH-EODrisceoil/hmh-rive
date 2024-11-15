import { default as React } from 'react';
import { FigureProps } from '../Figure/Figure';
import { BlockquoteProps } from '../Blockquote/Blockquote';

export type SingleBlockquoteProps = BlockquoteProps & FigureProps;
export declare const SingleBlockquote: React.FC<SingleBlockquoteProps>;
