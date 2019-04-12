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
  this.toppings = toppings,
  this.price = 6,
  this.sumPrice();
}

//Price function
Pizza.prototype.sumPrice = function() {
  if (this.size === "Medium"){
  this.price += 2;
  } else if (this.size === "Large"){
  this.price += 4;
  } else if (this.size === "Extra Large"){
    this.price += 6;
  } else {}

  if (this.cheese === "No Cheese"){
    this.price -= 1;
  } else if (this.size === "Extra Cheese"){
    this.price += 2;
  } else {}

  if (this.toppings.length >= 1) {
    this.price += parseInt(this.toppings.length);
  } else {}
};


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
    console.log(pizza);
    $(".pizzaSize").html(pizza.size);
    $(".pizzaPrice").html(pizza.price);
  });
});
