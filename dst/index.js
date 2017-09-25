"use strict";
//Do (10).times(function () {//something}).withDelay(1000).now();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Do = function (iterations) {
    if (iterations === void 0) { iterations = 1; }
    return new Doable(iterations);
};
var Doable = (function () {
    function Doable(iterations) {
        var _this = this;
        this.times = function (fn) { return new Schedulable({ iterations: _this.iterations, fn: fn }); };
        this.iterations = iterations;
    }
    return Doable;
}());
exports.Doable = Doable;
var Schedulable = (function () {
    function Schedulable(opts) {
        this.iterations = opts.iterations;
        this.fn = opts.fn;
    }
    Schedulable.prototype.now = function (done) {
        return new Executable({ iterations: this.iterations, fn: this.fn, done: done }).execute();
    };
    Schedulable.prototype.withDelay = function (delay) {
        return new DelayedExecutable({ iterations: this.iterations, fn: this.fn });
    };
    return Schedulable;
}());
exports.Schedulable = Schedulable;
var Executable = (function () {
    function Executable(opts) {
        this.iterations = opts.iterations;
        this.fn = opts.fn;
        this.done = opts.done;
    }
    Executable.prototype.execute = function () {
        // Set up the iterations, with delay
        var n;
        for (n = 0; n < this.iterations; n++) {
            this.fn(n);
        }
        if (this.done)
            this.done(n - 1);
    };
    return Executable;
}());
exports.Executable = Executable;
var DelayedExecutable = (function () {
    function DelayedExecutable(opts) {
        var _this = this;
        this.now = function (done) { return _this.execute(done); };
        this.iterations = opts.iterations;
        this.fn = opts.fn;
        this.delay = opts.delay;
    }
    DelayedExecutable.prototype.execute = function (done) {
        var _this = this;
        var _loop_1 = function (n) {
            var _fn = (n === this_1.iterations - 1) ?
                function () {
                    _this.fn(_this.iterations - 1);
                    if (typeof done !== "undefined") {
                        done(_this.iterations - 1);
                    }
                } :
                function () { return _this.fn(n); };
            magikcraft.io.setTimeout(_fn, n * this_1.delay);
        };
        var this_1 = this;
        // Set up the iterations, with delay
        for (var n = 0; n < this.iterations; n++) {
            _loop_1(n);
        }
    };
    return DelayedExecutable;
}());
exports.DelayedExecutable = DelayedExecutable;
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
exports.spells = {
    _default: exports.Do,
};
exports._lore = {
    namespace: 'sitapati',
    loreToLoad: [
        {
            name: 'Do',
            code: function () { return exports.Do; },
            cost: 0
        }
    ]
};
