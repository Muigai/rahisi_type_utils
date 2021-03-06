export declare type A0 = () => void;
export declare type A1<T> = (b: T) => void;
export declare type A2<T, U> = (b: T, c: U) => void;
export declare type F0<T> = () => T;
export declare type F1<T, U> = (b: T) => U;
export declare type F2<T, U, V> = (b: T, c: U) => V;
export declare type View = HTMLElement;
export declare type Either<T> = T | F0<T>;
export declare const ENTER_KEY = 13;
export declare const ESCAPE_KEY = 27;
export declare const notNullOrWhiteSpace: (s: string | null) => s is string;
