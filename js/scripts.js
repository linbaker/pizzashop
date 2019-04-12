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

//Find pizza
Order.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
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

function showPizza(pizzaId) {
  var pizza = order.findPizza(pizzaId);
  $("#showPizzaDetails").show();
  $(".pizzaSize").html(pizza.size);
  $(".pizzaCheese").html(pizza.cheese);
  $(".pizzaToppings").html(pizza.toppings);
  var buttons = $("#buttons");
}

function attachListeners(pizza) {
  $("ul#pizzaInfo").on("click", "li", function() {
    showPizza(this.id);
  });
};

$(function() {
  $(".pizzaForm").submit(function(event) {
    $(".pizzaOrder").show();
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var cheese = $("input:radio[name=cheese]:checked").val();
    var toppings = [];
      $.each($("input[name='toppings']:checked"), function(){
        toppings.push($(this).val());
      });
    var newPizza = new Pizza(size, cheese, toppings);
    order.addPizza(newPizza);
    displayPizzaDetails(order);
  });
});
