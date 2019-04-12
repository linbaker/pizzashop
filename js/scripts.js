// Business Logic

//Create and Hold Pizza Order
function Order() {
  this.pizzas = [],
  this.currentId =0
};

//Create Pizza Order
function Pizza() {
  this.size = size,
  this.cheese = cheese,
  this.toppings = []
}


//User Interface Logic
$(function() {
  $(".pizzaForm").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
    var toppings = $("input:checkbox[name=toppings]:checked").val();
    console.log(size, cheese, toppings);
  });
});
