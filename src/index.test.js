const Do = require('./index').Do;
global.magikcraft = {
    io: {
        setTimeout
    }
}

describe('Do method', function () {
    test('Do function works', done => {
        let i = 0;
        const task = Do(10).times(console.log).withDelay(300);
        function callback(n) {
            console.log('I got called!');
            done();

            expect(n).toEqual(9);
        }
        task.start(callback);
    });

    test('Do function works with global mutation and inline task', done => {
        let i = 0;
        const task = Do(10).times(n => i++).withDelay(300);
        function callback() {
            done();
            expect(i).toEqual(9);
        }
        task.start(callback);
    });

    test('Do function works with global mutation', done => {
        let i = 0;
        const fn = () => i++;

        const task = Do(10).times(fn).withDelay(300);

        function callback() {
            done();
            expect(i).toEqual(9);
        }
        task.start(callback);
    });
});
// Do (10).times(function () {//something}).withDelay(1000).start();