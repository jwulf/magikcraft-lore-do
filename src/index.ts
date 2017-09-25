
//Do (10).times(function () {//something}).withDelay(1000).now();

export type TaskCallback = (iterations?: number) => void;

export const Do = (iterations = 1) => new Doable(iterations);

export class Doable {
    private iterations: number;
    constructor(iterations: number) {
        this.iterations = iterations;
    }

    times = (fn: () => void) => new Schedulable({iterations: this.iterations, fn});
}


export class Schedulable {
    private iterations: number;
    private fn: () => any;
    constructor(opts: any) {
        this.iterations = opts.iterations;
        this.fn = opts.fn;
    }

    now (done?: TaskCallback) {
        return new Executable({iterations: this.iterations, fn: this.fn, done}).execute();
    }

    withDelay (delay: number) {
        return new DelayedExecutable({iterations: this.iterations, fn: this.fn});
    }
}

export class Executable {
    private iterations: number;
    private fn: any;
    private done: any;
    constructor(opts: any){
        this.iterations = opts.iterations;
        this.fn = opts.fn;
        this.done = opts.done;
    }
    public execute() {
        // Set up the iterations, with delay
        let n;
        for (n = 0; n < this.iterations; n++) {
            this.fn(n)
        }
        if (this.done) this.done(n - 1);
    }
}

export class DelayedExecutable {
    private iterations: number;
    private fn: any;
    private delay: number;

    constructor(opts: any) {
        this.iterations = opts.iterations;
        this.fn = opts.fn;
        this.delay = opts.delay;
    }

    public now = (done?: TaskCallback) => this.execute(done);

    private execute(done?: TaskCallback) {
        // Set up the iterations, with delay
          for (let n = 0; n < this.iterations; n++) {
            const _fn = (n === this.iterations - 1) ?
                 () => {
                    this.fn(this.iterations - 1);
                    if (typeof done !== "undefined") {
                        done(this.iterations - 1);
                    }
                } :
                () => this.fn(n)
            magikcraft.io.setTimeout(_fn, n * this.delay);
        }
    }
}

/**
 * The implementation below uses a closure to maintain configuration state. It's a more elegant,
 * purely functional implementation - but the intellisense experience for users sucks.
 * The class-based implementation above has a much more discoverable and traversible API via
 * intellisense.
 */
/*
export const Do = function Do(iterations: number) {
    return {
        times: function (fn: (iteration?: number) => any) {
            return {
                withDelay: function (delay: number) {
                    return {
                        now: function (done?: (n: number) => void) {
                            // Set up the iterations, with delay
                            for (let n = 0; n < iterations; n++) {
                                const _fn = (n === iterations - 1) ?
                                    function () {
                                        fn(iterations - 1);
                                        if (typeof done !== "undefined") {
                                            done(iterations - 1);
                                        }
                                    } :
                                    () => fn(n)
                                magikcraft.io.setTimeout(_fn, n * delay);
                            }
                        }
                    }
                },
                now: function (done?: (n: number) => void) {
                    // Set up the iterations, with delay
                    let n;
                    for (n = 0; n < iterations; n++) {
                        fn(n)
                    }
                    if (done) done(n - 1);
                }
            }
        }
    }
}
*/


export const spells = {
    _default: Do,
};

export const _lore = {
    namespace: 'sitapati',
    loreToLoad: [
        {
            name: 'Do',
            code: () => Do,
            cost: 0
        }
    ]
}

