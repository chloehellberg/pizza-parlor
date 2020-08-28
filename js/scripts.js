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
  }
    if (totalCost === 13) {
      return ("This costs $30");
    } 
    if (totalCost >= 10) {
      return ("This costs $20");
    } 
    else {
      return ("This costs $10");
    }  
}


// UI Logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    
    let newOrder = new PizzaOrder();

    $("input:checkbox[name=topping-option]:checked").each(function(){
      newOrder.toppingsChoice.push(parseInt($(this).val()));
    });
    
    newOrder.sizeChoice.push(parseInt($("#size-option").val()));
      
    let result = newOrder.calculateCost();

    $("#output").text(result);
    $("#answer").show(result);
  });   
});
