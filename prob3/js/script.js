"use strict";
/*Problem 3

Create a class named Pizza that stores information about a single pizza. It should contain the following properties:

Size of the pizza (small, medium, large, or extra-large)

If pizza has extra cheese

Number of pepperoni toppings

Number of ham toppings

Number of pineapple toppings

Set all the values in the construct

Create getters and setters for each property

A public method named genCost() that returns as a number the cost of the pizza

You can determine the cost by the following rules:

Small: 10 + 2 per topping + 2 for extra cheese

Medium: 12 + 2 per topping + 4 for extra cheese

Large: 14 + 3 per topping + 6 for extra cheese

Extra-large: 18 + 4 per topping + 6 for extra cheese

Generate as many as Pizza objects as you need determine that your code works.*/
var sizes;
(function (sizes) {
    sizes["small"] = "small";
    sizes["medium"] = "medium";
    sizes["large"] = "large";
    sizes["extralarge"] = "extralarge";
})(sizes || (sizes = {}));
class Pizza {
    constructor() {
        this.size = sizes.small;
        this.hasextracheese = false;
        this.pepperonitopping = 0;
        this.hamtopping = 0;
        this.pineapletopping = 0;
    }
    set setSize(size) {
        this.size = size;
    }
    set setExtraCheese(hasextracheese) {
        this.hasextracheese = hasextracheese;
    }
    set setPeperonniTopping(pepperonitopping) {
        this.pepperonitopping = pepperonitopping;
    }
    set setHamTopping(hamtopping) {
        this.hamtopping = hamtopping;
    }
    set setPineapleHamTopping(pineapletopping) {
        this.pineapletopping = pineapletopping;
    }
    get getSize() {
        return this.size;
    }
    get getExtraCheese() {
        return this.hasextracheese;
    }
    get getPeperonniTopping() {
        return this.pepperonitopping;
    }
    get getHamTopping() {
        return this.hamtopping;
    }
    get getpineapleHamTopping() {
        return this.pineapletopping;
    }
    get getcostPizza() {
        if (this.size == "small") { //Conditionals evaluate the costs depending of the size
            let totalvalue = 10;
            let toppingvalue = 2;
            let totaltopping = 0;
            let cheesevalue = 2;
            let final = this.conditionals(totaltopping, toppingvalue, totalvalue, cheesevalue);
            return `El precio final es $${final}.00`;
        }
        if (this.size == "medium") {
            let totalvalue = 12;
            let toppingvalue = 2;
            let totaltopping = 0;
            let cheesevalue = 4;
            let final = this.conditionals(totaltopping, toppingvalue, totalvalue, cheesevalue);
            return `El precio final es $${final}.00`;
        }
        if (this.size == "large") {
            let totalvalue = 14;
            let toppingvalue = 3;
            let totaltopping = 0;
            let cheesevalue = 6;
            let final = this.conditionals(totaltopping, toppingvalue, totalvalue, cheesevalue);
            return `El precio final es $${final}.00`;
        }
        if (this.size == "extralarge") {
            let totalvalue = 18;
            let toppingvalue = 4;
            let totaltopping = 0;
            let cheesevalue = 6;
            let final = this.conditionals(totaltopping, toppingvalue, totalvalue, cheesevalue);
            return `El precio final es $${final}.00`;
        }
    }
    conditionals(totaltopping, toppingvalue, totalvalue, cheesevalue) {
        if (this.pepperonitopping > 0) {
            totaltopping += this.pepperonitopping * toppingvalue;
        }
        if (this.hamtopping > 0) {
            totaltopping += this.hamtopping * toppingvalue;
        }
        if (this.pineapletopping > 0) {
            totaltopping += this.pineapletopping * toppingvalue;
        }
        totalvalue += totaltopping;
        if (this.hasextracheese) {
            totalvalue += cheesevalue;
        }
        return totalvalue;
    }
}

let pizza1 = new Pizza;
console.log(pizza1)
pizza1.setExtraCheese = true;
pizza1.setSize = "large";
pizza1.setPeperonniTopping = 1;
console.log(pizza1)
console.log(pizza1.getcostPizza)