const cartItems = document.getElementById('cart-items');

function addToCart(productName, price) {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - $${price}`;
    cartItems.appendChild(cartItem);
}
function removeFromCart(item) {
    cartItems.removeChild(item);
}
// Skapa en global varukorg
const cart = [];
let total = 0;

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

