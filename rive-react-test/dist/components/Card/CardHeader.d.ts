import { default as React } from 'react';

type ValidElementTag = keyof JSX.IntrinsicElements;
export type CardHeaderProps = {
    headerElement?: ValidElementTag;
    children: React.ReactNode;
};
export declare function CardHeader({ headerElement, children }: CardHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
