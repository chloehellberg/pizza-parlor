// //Business Logic

function PizzaOrder () {
  this.toppingsChoice = [],
  this.sizeChoice = []
}

PizzaOrder.prototype.calculateCost = function (toppingsChoice, sizeChoice) {
  
  let toppingsChoiceTotal = [this.toppingsChoice.reduce((a,b) => a + b, 0)];
  let sizeChoiceTotal = this.sizeChoice;
  let totalCost = 0;

  for (let i = 0; i < toppingsChoiceTotal.)



  var arr1 = [2,3,4,5];
  var arr2 = [4,3,3,1];
  var sum = 0;
  for(var i = 0; i < arr1.length; i++){
    sum.push(array1[i] + array2[i]);
 }
s



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
