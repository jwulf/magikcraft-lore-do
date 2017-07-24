
//Do (10).times(function () {//something}).withDelay(1000).start();

export const Do = function Do(iterations: number){
    return {
        times: function (fn: (iteration?: number) => any) {
            return {
                withDelay: function (delay: number) {
                    return {
                        start: function (callback? : (n: number)=> void) {
                            // Set up the iterations, with delay
                            for (let n = 0; n < iterations; n++) {
                                const _fn = (n === iterations - 1) ?
                                    function (){
                                        fn(iterations - 1);
                                        if (typeof callback !== "undefined") {
                                            callback(iterations - 1);
                                        }
                                    } :
                                    () => fn(n)
                                magikcraft.io.setTimeout(_fn, n * delay);
                            }
                        }
                    }
                }
            }
        }
    }
}

