Hamburger.SIZE_SMALL = {
    price: 50,
    callories: 20,
}
Hamburger.SIZE_MEDIUM = {
    price: 75,
    callories: 30,
}
Hamburger.SIZE_BIG = {
    price: 100,
    callories: 40,
}
Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 5,
}
Hamburger.TOPPING_POTATO = {
    price: 15,
    callories: 10,
}
Hamburger.TOPPING_CHEESE = {
    price: 10,
    callories: 20,
}
Hamburger.TOPPING_SALAT = {
    price: 20,
    callories: 5,
}
Hamburger.TOPPING_SPASY = {
    price: 15,
    callories: 0,
}

let hamburger = new Hamburger(Hamburger.SIZE_BIG);

function Hamburger(hamburger) {

    this.hamburger = hamburger
}

Hamburger.prototype.addTopping = function (topping) {
    this.hamburger.price += topping.price
    this.hamburger.callories += topping.callories
}

Hamburger.prototype.getPrice = function () {
    return this.hamburger.price
}

Hamburger.prototype.getCallories = function () {
    return this.hamburger.callories
}

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SALAT);
hamburger.addTopping(Hamburger.TOPPING_SPASY);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());



