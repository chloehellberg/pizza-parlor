// //Business Logic

function PizzaOrder () {
  this.toppingsChoice = [],
  this.sizeChoice = []
}

PizzaOrder.prototype.calculateCost = function (toppingsChoice, sizeChoice) {
  let toppingsChoiceTotal = [this.toppingsChoice.reduce((a,b) => a + b, 0)];
  let sizeChoiceTotal = this.sizeChoice;
  let totalCost = 0;
  
  for(let i=0; i< toppingsChoiceTotal.length; i++) {
    totalCost += toppingsChoiceTotal[i]+sizeChoiceTotal[i];
    if (totalCost === 15) {
      return ("This costs $15");
    } 
     if (totalCost === 13) {
      return ("This costs $13");
    } 
      else if (totalCost === 10) {
      return ("This costs $10");
    } 
      else
  }
}





//   for (let i = 0; i <= toppingsChoice.length; i++ ) {
//     let toppingsTotal = this.toppingsChoice.sum();
//   }
// }






// UI Logic

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






// let pizzaOptions = {
//   toppings: ["Potato", "Carmelized Onions", "Fresh Chives", "Sausage", "Sauteed Mushrooms", "Black Olives", "Basil", "Pepperoni"],
//   size = ["Mini", "Medium", "Large"],
// }
