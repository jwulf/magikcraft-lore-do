const Do = require('./index').Do;
const Module = require('./index');

global.magikcraft = {
    io: {
        setTimeout
    }
}

describe('Module', function () {
    test('Exports a spells object', () => {
        expect(Module.spells).toBeTruthy();
    });
    test('Exports spells._default', () => {
        expect(Module.spells._default).toBeTruthy();
    });
});

describe('Do shape', function (){
    test('Do() has a times', function () {
        const shouldHavetimes = Do(5);
        expect(shouldHavetimes.times).toBeTruthy();
    });
    test('Do().times() has a withDelay', function () {
        const shouldHavewithDelay = Do(5).times();
        expect(shouldHavewithDelay.withDelay).toBeTruthy();
    });
    test('Do().times() has a now', function () {
        const shouldHavenow = Do(5).times(() => {});
        expect(shouldHavenow.now).toBeTruthy();
    });
    test('Do().times().withDelay() has a now', function () {
        const shouldHavenow = Do(5).times(() => {}).withDelay(100);
        expect(shouldHavenow.now).toBeTruthy();
    });
});

describe('Do without delay', function () {
    test('Do function works', done => {
        const task = Do(10).times(()=>{});
        function callback(n) {
            done();
            expect(n).toEqual(9);
        }
        task.now(callback);
    });
});

describe('Do with delay', function () {
    test('Do function works', done => {
        let i = 0;
        const task = Do(10).times(console.log).withDelay(300);

        function callback(n) {
            done();
            expect(n).toEqual(9);
        }
        task.now(callback);
    });

    test('Do function works with global mutation and inline task', done => {
        let i = 0;
        const task = Do(10).times(n => i++).withDelay(300);
        function callback() {
            done();
            expect(i).toEqual(9);
        }
        task.now(callback);
    });

    test('Do function works with global mutation', done => {
        let i = 0;
        const fn = () => i++;

        const task = Do(10).times(fn).withDelay(300);

        function callback() {
            done();
            expect(i).toEqual(9);
        }
        task.now(callback);
    });
});
// Do (10).times(function () {//something}).withDelay(1000).start();