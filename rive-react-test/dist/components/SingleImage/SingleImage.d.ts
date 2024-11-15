import { default as React } from 'react';
import { FigureProps } from '../Figure/Figure';
import { ImageProps } from '../Image/Image';

export type SingleImageProps = ImageProps & FigureProps;
export declare const SingleImage: React.FC<SingleImageProps>;
