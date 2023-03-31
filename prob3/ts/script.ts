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
enum sizes {    //We create this enum to save the different sizes
    small = "small",
    medium = "medium",
    large = "large",
    extralarge = "extralarge"    

}
class Pizza{             //Declaration of class pizza with its properties con constructor method, the class do not recieve parameters, it automaticly sets a default pizza, changes are done with de getters and setters
    size: sizes;
    hasextracheese: boolean;
    pepperonitopping: number;
    hamtopping: number;
    pineapletopping:number;
    constructor(){
        this.size = sizes.small;
        this.hasextracheese = false;
        this.pepperonitopping = 0;
        this.hamtopping = 0;
        this.pineapletopping = 0;
    }
    public set setSize(size:sizes){//Declaration of setters and getters for each property
        this.size = size;
    }
    public set setExtraCheese(hasextracheese:boolean){
        this.hasextracheese = hasextracheese;
    }
    public set setPeperonniTopping(pepperonitopping: number){
        this.pepperonitopping = pepperonitopping;
    }
    public set setHamTopping(hamtopping: number){
        this.hamtopping = hamtopping;
    }
    public set setPineapleHamTopping(pineapletopping: number){
        this.pineapletopping = pineapletopping;
    }
    public get getSize():string{
        return this.size;
    }
    public get getExtraCheese():boolean{
        return this.hasextracheese;
    }
    public get getPeperonniTopping():number{
       return this.pepperonitopping;
    }
    public get getHamTopping():number{
        return this.hamtopping;
    }
    public get getpineapleHamTopping():number{
        return this.pineapletopping;
    }
    public get getcostPizza ():string|undefined{ //Declaration of get cost method
        
        if(this.size=="small"){ //Conditionals evaluate the costs depending of the size
            let totalvalue = 10;
            let toppingvalue = 2;
            let totaltopping = 0;
            let cheesevalue = 2;
            let final = this.conditionals(totaltopping,toppingvalue,totalvalue,cheesevalue)
            return `El precio final es $${final}.00`;
        }
        if(this.size=="medium"){
            let totalvalue = 12;
            let toppingvalue = 2;
            let totaltopping = 0;
            let cheesevalue = 4;
            let final = this.conditionals(totaltopping,toppingvalue,totalvalue,cheesevalue)
            return `El precio final es $${final}.00`;
        }
        if(this.size=="large"){
            let totalvalue = 14;
            let toppingvalue = 3;
            let totaltopping = 0;
            let cheesevalue = 6;
            let final = this.conditionals(totaltopping,toppingvalue,totalvalue,cheesevalue)
            return `El precio final es $${final}.00`;
        }
        if(this.size=="extralarge"){
            let totalvalue = 18;
            let toppingvalue = 4;
            let totaltopping = 0;
            let cheesevalue = 6;
            let final = this.conditionals(totaltopping,toppingvalue,totalvalue,cheesevalue)
            return `El precio final es $${final}.00`;
        }
    }
    private conditionals(totaltopping:number,toppingvalue:number,totalvalue:number, cheesevalue:number) { //Conditionals for the toppings and the extracheese
        if(this.pepperonitopping>0){
            totaltopping += this.pepperonitopping*toppingvalue;
        }
        if(this.hamtopping>0){
            totaltopping += this.hamtopping*toppingvalue;
        }
        if(this.pineapletopping>0){
            totaltopping += this.pineapletopping*toppingvalue;
        }
        totalvalue += totaltopping;
        if(this.hasextracheese){
            totalvalue += cheesevalue;
        }
        return totalvalue;
        
    }



}