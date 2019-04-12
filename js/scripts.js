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

//Add ID to pizza
Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//Push pizza object to order array
Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
};

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



//User Interface Logic
var order = new Order();
var pizza;

function displayPizzaDetails(pizzasDisplay) {
  var pizzaOrderList = $("ul#pizzaInfo");
  var htmlPizzas = "";
  pizzasDisplay.pizzas.forEach(function(pizza) {
    htmlPizzas += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.toppings.length + " Topping Pizza: $ " + pizza.price + "</li>";
  });
  pizzaOrderList.html(htmlPizzas);
};


$(function() {
  $(".pizzaForm").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
    var toppings = [];
      $.each($("input[name='toppings']:checked"), function(){
        toppings.push($(this).val());
      });
    var newPizza = new Pizza(size, cheese, toppings);
    order.addPizza(newPizza);
    // $(".pizzaSize").html(pizza.size);
    // $(".pizzaPrice").html(pizza.price);
    displayPizzaDetails(order);
  });
});
