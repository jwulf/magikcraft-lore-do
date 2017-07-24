export declare const Do: (iterations: number) => {
    times: (fn: (iteration?: number | undefined) => any) => {
        withDelay: (delay: number) => {
            start: () => void;
        };
    };
};
