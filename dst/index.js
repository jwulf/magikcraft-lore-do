"use strict";
//Do (10).times(function () {//something}).withDelay(1000).start();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Do = function Do(iterations) {
    return {
        times: function (fn) {
            return {
                withDelay: function (delay) {
                    return {
                        start: function (callback) {
                            var _loop_1 = function (n) {
                                var _fn = (n === iterations - 1) ?
                                    function () {
                                        fn(iterations - 1);
                                        if (typeof callback !== "undefined") {
                                            callback(iterations - 1);
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
                }
            };
        }
    };
};
exports.spells = {
    _default: exports.Do
};
