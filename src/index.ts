
//Do (10).times(function () {//something}).withDelay(1000).now();

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


export const spells = {
    _default: Do,
};

export const _lore = {
    namespace: 'sitapati',
    loreToLoad: [
        {
            name: 'Do',
            code: Do,
            cost: 0
        }
    ]
}

