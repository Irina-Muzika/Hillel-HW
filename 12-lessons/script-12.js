
function Calculator(base) {
    this.base = base
    return {
        add: function (add) {
            if (typeof add === 'number' && isFinite(add) ) {
                base = base + add
            }
            else {
               base
            }
        },
        sub: function (sub) {
            if (typeof sub === 'number' && isFinite(sub) ) {
                base = base - sub
            }
            else {
                base
            }
           
        },
        set: function (set) {
            if (typeof set === 'number' && isFinite(set) ) {
                base = set
            }
            else {
              base
            }
           
        },
        get: function () {
            return (base);
        }
    }
}

const calc = new Calculator(100);

calc.add(32); 
calc.add(10); // 120 записывает в this.base (в консоль ничего выводить не нужно)
calc.sub(20); // 100 записывает в this.base (в консоль ничего выводить не нужно)
calc.set(20); // 20 записывает в this.base (в консоль ничего выводить не нужно)
  calc.add(10); // 30 записывает в this.base (в консоль ничего выводить не нужно)
  calc.add('qwe'); // игнорируем все что не число и значение 30 не меняется
calc.get(); // 30 возвращаем значение



