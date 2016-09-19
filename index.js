var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101); // returns a random number between 0 and 100
  var purchase = {item: price}; // Puts the item and the price as an object into the variable purchase.
  cart.push(purchase); // Adds purchase to the cart array.
  console.log(`${item} has been added to your cart.`); // Print out to console.
  return cart;
}
// <-- Math.floor(Math.random(item) * 101);
// <-- cart.push(purchase = {item: price});

function viewCart() {
  
}
