const cartItems = document.getElementById('cart-items');

function addToCart(productName, price) {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - $${price}`;
    cartItems.appendChild(cartItem);
}
function removeFromCart(productName, price) {
    const index = cart.findIndex(item => item.product === productName);

    if (index !== -1) {
        const removedItem = cart.splice(index, 1)[0];
        total -= removedItem.price;
        updateCart();
    }
}


// Funktion för att lägga till produkter i varukorgen
function addToCart(productName, price) {
    cart.push({ product: productName, price: price });
    total += price;
    updateCart(); // Uppdatera varukorgen på kassa-sidan
}

// Funktion för att uppdatera varukorgen på kassa-sidan
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = ''; // Rensa varukorgen
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(cartItem);
    });
    cartTotal.textContent = total;
}

