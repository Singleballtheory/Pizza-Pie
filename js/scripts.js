function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "Small") {
    this.price += 10;
  }
}

new Pizza = Pizza("Small", ["Pepperoni", "Ham"]);