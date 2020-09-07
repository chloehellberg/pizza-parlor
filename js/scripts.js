// //Business Logic

function PizzaOrder () {
  this.toppingsChoice = [],
  this.sizeChoice = [],
  this.totalPrice = "";
}                            

PizzaOrder.prototype.calculateCost = function () {
  let toppingsChoiceTotal = [this.toppingsChoice.reduce((a,b) => a + b, 0)];
  let totalCost = 0;
  
  
  for(let i=0; i< toppingsChoiceTotal.length; i++) {
    totalCost += toppingsChoiceTotal[i]+this.sizeChoice[i];  
  }
  if (totalCost >= 12) {
    this.totalPrice = "$30";
  } 
  else if (totalCost <= 11 && totalCost >= 8) {
    this.totalPrice = "$20";
  } 
  else {
    this.totalPrice = "$10";
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

    $("input[type=checkbox]").prop("checked", false);
    $("#size-option").val("");
      
     newOrder.calculateCost();

    $("#output").text(newOrder.totalPrice);    
    $("#answer").show();
  });   
});
