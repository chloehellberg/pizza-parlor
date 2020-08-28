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


// let order = new PizzaOrder()
// console.log(order.calculateCost());




// User Interface Logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

      $("#toppings-choice").show();
      $("input:checkbox[name=topping-option]:checked").each(function(){
        const toppingsChoice = $(this).val();
      $("#toppings-choice").append(toppingsChoice + "<br>");
      });

      

  })
})

$("#work-responses").show();
$("input:checkbox[name=work-transportation]:checked").each(function(){
  const workTransportationMode = $(this).val();
  $('#work-responses').append(workTransportationMode + "<br>");
});


























// let sizeOptions = {
//   size1: "Small",
//   size2: "Medium",
//   size3: "Large"
// }

// let sizeOptions = {
//   size = ["Small", "Medium", "Large"],
// }

// let toppingOptions = {
//   topping1: "Potato",
//   topping2: "Carmelized Onions",
//   topping3: "Fresh Chives",
//   topping4: "Sausage",
//   topping5: "Sauteed Mushrooms",
// }

// let toppingOptions = {
//   toppings: ["Potato", "Carmelized Onions", "Fresh Chives", "Sausage", "Sauteed Mushrooms"]
// }

