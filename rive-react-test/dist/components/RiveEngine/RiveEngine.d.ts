import { default as React } from 'react';
import { StateMachineInput } from '@rive-app/react-canvas';

export type RiveEngineProps = {
    src: string;
    desc?: string;
    stateMachine?: string;
    artboard?: string;
    playState?: 'playing' | 'paused' | 'stopped';
    autoplay?: boolean;
    disableTouchScroll?: boolean;
    contain?: boolean;
    inputs?: {
        current: {
            [key: string]: StateMachineInput;
        };
    };
    inputToStateLinks?: {
        [key: string]: any;
    };
    volume?: number;
    ignoreReducedMotion?: boolean;
    ignoreDarkMode?: boolean;
    debug?: boolean;
};
export declare const RiveEngine: React.FC<RiveEngineProps>;
/** General-purpose function for setting RiveInput values */
export declare function setRiveInputValue(newValue: number, inputName: string, inputs: {
    current: {
        [key: string]: StateMachineInput;
    };
}, reportIfMissing?: boolean): {
    fired: boolean;
    prevValue?: undefined;
    newValue?: undefined;
} | {
    prevValue: number | boolean;
    newValue: number;
    fired?: undefined;
} | undefined;
/** A function for updating a State value and an input value simultaneously!
 * TO-DO: Remove? This mightn't be needed if we instead go with watching the state value with a useEffect */
export declare function setStateValue_andRiveInputValue(newValue: any, setterFunction: any, inputName: any, inputs: any): void;
