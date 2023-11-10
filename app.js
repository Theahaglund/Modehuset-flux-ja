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

function addReview(productName) {
    const reviewInput = document.querySelector(`li:contains("${productName}") input`);
    const reviewList = document.getElementById(`reviews${productName}`);
    
    const reviewText = reviewInput.value;
    if (reviewText) {
        const reviewItem = document.createElement('li');
        reviewItem.textContent = reviewText;
        reviewList.appendChild(reviewItem);
        reviewInput.value = ''; // Rensa inputfältet
    }
}
function addReview(productName, ratingName) {
    const reviewInput = document.querySelector(`li:contains("${productName}") input[name=${ratingName}]:checked`);
    const reviewList = document.getElementById(`reviews${productName}`);
    
    if (reviewInput) {
        const ratingValue = reviewInput.value;
        const reviewItem = document.createElement('li');
        const ratingStars = document.createElement('span');
        ratingStars.className = 'star-rating';
        for (let i = 1; i <= ratingValue; i++) {
            const star = document.createElement('span');
            star.innerHTML = '★';
            ratingStars.appendChild(star);
        }
        reviewItem.appendChild(ratingStars);
        reviewList.appendChild(reviewItem);
        reviewInput.checked = false; // Rensa valda stjärnor
    }
}





