//object
var x = {
    "name": "vamsi",
    "age": '20',
};

//creating an object
var z = new Object();
var y={};

y.name = "vamsi";
y.age = 20;

console.log(y);
console.log(z);


var pizza = function(){
    this.crust = 'thin';
    this.toppings = 5;
    this.hasBacon = false;
};
var pizzaA = new pizza();
var pizzaB = new pizza();

pizzaA.crust = "thick";

console.log(pizzaA.crust);
console.log(pizzaB.crust);

console.log(pizzaA instanceof pizza);
console.log(pizzaA.constructor);