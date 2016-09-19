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
  var purchase;
  var price = Math.floor(Math.random() * 101); // returns a random number between 0 and 100
  cart.push(purchase = {item: price}); // Add the item and the price as an object.
  console.log(`${item} had been added to your cart.`); // Print out to console.
  return cart;
}

// Math.floor(Math.random(item) * 101)
