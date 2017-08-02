export declare const Do: (iterations: number) => {
    times: (fn: (iteration?: number | undefined) => any) => {
        withDelay: (delay: number) => {
            now: (done?: ((n: number) => void) | undefined) => void;
        };
        now: (done?: ((n: number) => void) | undefined) => void;
    };
};
export declare const spells: {
    _default: (iterations: number) => {
        times: (fn: (iteration?: number | undefined) => any) => {
            withDelay: (delay: number) => {
                now: (done?: ((n: number) => void) | undefined) => void;
            };
            now: (done?: ((n: number) => void) | undefined) => void;
        };
    };
};
export declare const _lore: {
    namespace: string;
    loreToLoad: {
        'Do': (iterations: number) => {
            times: (fn: (iteration?: number | undefined) => any) => {
                withDelay: (delay: number) => {
                    now: (done?: ((n: number) => void) | undefined) => void;
                };
                now: (done?: ((n: number) => void) | undefined) => void;
            };
        };
        cost: number;
    }[];
};
