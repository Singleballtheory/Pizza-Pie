function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

// Pizza.prototype.sizePrice = function() {
//   if (this.size === "Small") {
//     this.price += 10;
//   }
//   return this.price;
// }

function sizePrice(size) {
  let price = 0;
  if (size === "Small") {
    price += 10;
  } else if (size === "Medium") {
    price += 12;
  } else if (size === "Large") {
    price += 14;
  }
  return price;
}