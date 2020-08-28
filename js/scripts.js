// //Business Logic

function PizzaOrder () {
  this.toppingsChoice = [],
  this.sizeChoice = []
}

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

    $("input:checkbox[name=topping-option]:checked").each(function(){
      newOrder.toppingsChoice.push(parseInt($(this).val()));
    });

      newOrder.sizeChoice.push(parseInt($("#size-option").val()));

  });   
});

