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

// Pizza.prototype.toppingPrice = function() {
//   for (let i=0; i<=this.topping.length; i++) {
//     this.price += 2;
//   }
// }

function toppingPrice(topping) {
  let price = 0;
  for (let i=0; i < topping.length; i++) {
    price += 2;
  }
  return price;
}