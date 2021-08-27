function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

// Pizza.prototype.sizePrice = function() {
//   if (this.size === "Small") {
//    this.price += 10;
//   }
//   return this.price;
// }

function sizePrice(size) {
  let price = 0;
  if (size === "Small") {
    price += 10;
  }
  return price;
}