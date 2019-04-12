// Business Logic

//Create and Hold Pizza Order
function Order() {
  this.pizzas = [],
  this.currentId =0
};

//Create Pizza Order
function Pizza(size, cheese, toppings) {
  this.size = size,
  this.cheese = cheese,
  this.toppings = toppings
}

//Push pizza object to order array
Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
};

//User Interface Logic
$(function() {
  var pizza;
  $(".pizzaForm").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
    var toppings = [];
      $.each($("input[name='toppings']:checked"), function(){
        toppings.push($(this).val());
      });
    var pizza = new Pizza(size, cheese, toppings);
    var order = new Order(pizza);
    order.addPizza(pizza);
    console.log(order);
  });
});
