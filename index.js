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

function viewCart() {
  for (var i = 0; i < cart.length; i++) { // Gets item and price in cart array.
    var itemObj = cart[i];
    var itemKey = Object.keys(item)[0];
    console.log(`In your cart, you have ${itemObj[i]} at ${itemKey[i]}.`); // Prints out the item and price of the itme
    }
  }
  /*if (cart = 0){
    console.log("Your shopping cart is empty.")
  }*/

/*
for (var i = 0; i < getCart.length; i++) { // Gets item and price in getCart array.
${item.keys} at ${item.vaules}
${item[i]} at ${item[i]}
${getCart[item[i]]} at ${getCart[item.vaules]}
${getCart[i]}: ${cost[i]}
*/
