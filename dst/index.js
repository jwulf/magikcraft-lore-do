"use strict";
//Do (10).times(function () {//something}).withDelay(1000).now();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Do = function Do(iterations) {
    return {
        times: function (fn) {
            return {
                withDelay: function (delay) {
                    return {
                        now: function (done) {
                            var _loop_1 = function (n) {
                                var _fn = (n === iterations - 1) ?
                                    function () {
                                        fn(iterations - 1);
                                        if (typeof done !== "undefined") {
                                            done(iterations - 1);
                                        }
                                    } :
                                    function () { return fn(n); };
                                magikcraft.io.setTimeout(_fn, n * delay);
                            };
                            // Set up the iterations, with delay
                            for (var n = 0; n < iterations; n++) {
                                _loop_1(n);
                            }
                        }
                    };
                },
                now: function (done) {
                    // Set up the iterations, with delay
                    var n;
                    for (n = 0; n < iterations; n++) {
                        fn(n);
                    }
                    if (done)
                        done(n - 1);
                }
            };
        }
    };
};
exports.spells = {
    _default: exports.Do,
};
exports._lore = {
    namespace: 'sitapati',
    loreToLoad: [
        {
            'Do': exports.Do,
            cost: 0
        }
    ]
};
