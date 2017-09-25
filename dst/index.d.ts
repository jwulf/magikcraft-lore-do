export declare type TaskCallback = (iterations?: number) => void;
export declare const Do: (iterations?: number) => Doable;
export declare class Doable {
    private iterations;
    constructor(iterations: number);
    times: (fn: () => void) => Schedulable;
}
export declare class Schedulable {
    private iterations;
    private fn;
    constructor(opts: any);
    now(done?: TaskCallback): void;
    withDelay(delay: number): DelayedExecutable;
}
export declare class Executable {
    private iterations;
    private fn;
    private done;
    constructor(opts: any);
    execute(): void;
}
export declare class DelayedExecutable {
    private iterations;
    private fn;
    private delay;
    constructor(opts: any);
    now: (done?: TaskCallback | undefined) => void;
    private execute(done?);
}
/**
 * The implementation below uses a closure to maintain configuration state. It's a more elegant,
 * purely functional implementation - but the intellisense experience for users sucks.
 * The class-based implementation above has a much more discoverable and traversible API via
 * intellisense.
 */
export declare const spells: {
    _default: (iterations?: number) => Doable;
};
export declare const _lore: {
    namespace: string;
    loreToLoad: {
        name: string;
        code: () => (iterations?: number) => Doable;
        cost: number;
    }[];
};
