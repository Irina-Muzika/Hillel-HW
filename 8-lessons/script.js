function createCalculator(base) {
    let defoltNum = base

    return {
        add: function (addNum) {
            if (typeof addNum === 'number' && isFinite(addNum)) {
               base = base + addNum
            } else {
                base
            }
        },
        sub: function (subNum) {
            if (typeof subNum === 'number' && isFinite(subNum)) {
                base = base - subNum
            } else {
                base
            }
        },
        set: function (setNum) {
            if (typeof setNum === 'number' && isFinite(setNum)) {
                base = setNum
            } else {
                base
            }
        },
        reset: function () {
            base = defoltNum
        },
        get: function () {
            return base
        }
    }
}


const calculator = createCalculator(100);

console.log(calculator.add(30));
console.log(calculator.add(NaN));
console.log(calculator.add('sdsdd'));
console.log( calculator.add(10));
console.log(calculator.sub(20));
console.log(calculator.sub('sdsd'));
console.log( calculator.set(20));
console.log(calculator.add(10));
console.log(calculator.add('qwe'));
console.log(calculator.reset());
console.log(calculator.get()) // 40c
