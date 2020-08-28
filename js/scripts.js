// Create a website for a pizza company where a user can choose one or more individual toppings 
//(cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

// * Spec 2: Create a prototype method for the cost of the pizza based on selections. Use your own formula for this. 


//Pizza Object Constructor 

function PizzaOrder () {
  this.toppingsChoice = [],
  this.sizeChoice = []
}

let pizzaOptions = {
  toppings: ["Potato", "Carmelized Onions", "Fresh Chives", "Sausage", "Sauteed Mushrooms", "Black Olives", "Basil", "Pepperoni"],
  size = ["Mini", "Medium", "Large"],
}

PizzaOrder.prototype.calculateCost = function (toppings, size) {
  let orderArray = [];

  for (let i = 0; i <= toppings.length; i++ )
  
}


let order = new PizzaOrder()
console.log(order.calculateCost());



























let sizeOptions = {
  size1: "Small",
  size2: "Medium",
  size3: "Large"
}

let sizeOptions = {
  size = ["Small", "Medium", "Large"],
}

let toppingOptions = {
  topping1: "Potato",
  topping2: "Carmelized Onions",
  topping3: "Fresh Chives",
  topping4: "Sausage",
  topping5: "Sauteed Mushrooms",
}

let toppingOptions = {
  toppings: ["Potato", "Carmelized Onions", "Fresh Chives", "Sausage", "Sauteed Mushrooms"]
}

