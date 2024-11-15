import { default as React } from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type ImageProps = {
    imageSrc: string;
    altText: string;
    dataTestId?: string;
    gradeBand?: GradeBand;
};
export declare const Image: React.FC<ImageProps>;
