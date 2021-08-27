function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "Small") {
    this.price += 10;
  } else if (this.size === "Medium") {
    this.price += 12;
  } else if (this.size === "Large") {
    this.price += 14;
  }
}

Pizza.prototype.toppingPrice = function() {
  for (let i=0; i <= this.topping.length; i++) {
    this.price += 2;
  }
};

$(document).ready(function() {
  $("form#pizza-form").submit(function(event) {
    event.preventDefault();
    let selectSize = $("input:radio[name=size]:checked").val();
    let selectTopping = $("input:checkbox[name=toppings]:checked");
    let toppingsOnPizza = [];

    selectTopping.each(function() {
      toppingsOnPizza.push($(this).val());
    })

    let pizzaOrder = new Pizza(selectSize, toppingsOnPizza);
    pizzaOrder.sizePrice();
    pizzaOrder.toppingPrice();

    $("#orderPizza").show();
    $("#selectSize").text(pizzaOrder.size);
    $("#pizzaTopping").text(pizzaOrder.topping);
    $("#pizzaCost").text(pizzaOrder.price);
  });
});

// function toppingPrice(topping) {
  //   let price = 0;
  //   for (let i=0; i < topping[i].length; i++) {
    //     price += 2;
    //   }
    //   return price;
    // }

  // function sizePrice(size) {
  //   let price = 0;
  //   if (size === "Small") {
  //     price += 10;
  //   } else if (size === "Medium") {
  //     price += 12;
  //   } else if (size === "Large") {
  //     price += 14;
  //   }
  //   return price;
  // }