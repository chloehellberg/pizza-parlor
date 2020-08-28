// //Business Logic

// function PizzaOrder () {
//   this.toppingsChoice = [],
//   this.sizeChoice = []
// }

// let pizzaOptions = {
//   toppings: ["Potato", "Carmelized Onions", "Fresh Chives", "Sausage", "Sauteed Mushrooms", "Black Olives", "Basil", "Pepperoni"],
//   size = ["Mini", "Medium", "Large"],
// }

// PizzaOrder.prototype.calculateCost = function (toppings, size) {
//   let orderArray = [];

//   for (let i = 0; i <= toppings.length; i++ )
  
// };






// User Interface Logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    
    let newOrder = new PizzaOrder();
    console.log(order.calculateCost());

    let toppingsChoice = [];
     $("input:checkbox[name=topping-option]:checked").each(function(){
      toppingsChoice.push(parseInt($(this).val()));
      console.log(toppingsChoice);
    })

    let sizeChoice = [];
    sizeChoice.push(parseInt($("#size-option").val()));
    console.log(sizeChoice);

  })
})

