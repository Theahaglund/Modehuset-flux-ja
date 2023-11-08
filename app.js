// Skapa en tom varukorg
const cart = [];
let total = 0;

// Funktion för att lägga till produkter i varukorgen
function addToCart(productName, price) {
    cart.push({ product: productName, price: price });
    total += price;
    updateCart(); // Uppdatera varukorgen på kassa-sidan
}

// Funktion för att ta bort produkter från varukorgen
function removeFromCart(productName, price) {
    const index = cart.findIndex(item => item.product === productName);

    if (index !== -1) {
        const removedItem = cart.splice(index, 1)[0];
        total -= removedItem.price;
        updateCart();
    }
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

// Funktion för att lägga till recensioner
function addReview(productName, ratingName) {
    const reviewInput = document.querySelector(`input[name="${ratingName}"]:checked`);
    const reviewList = document.getElementById(`reviews-${productName}`);

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

// Hämta alla stjärnelement
const stars = document.querySelectorAll(".star");

// Lägg till en klickhändelse för varje stjärna
stars.forEach((star) => {
    star.addEventListener("click", (e) => {
        const clickedStar = e.target;
        const rating = clickedStar.getAttribute("data-rating");

        // Gör de klickade stjärnorna aktiva (gula)
        stars.forEach((star) => {
            if (star.getAttribute("data-rating") <= rating) {
                star.classList.add("active");
            }
        });
    });
});

// Funktion för att uppdatera varukorgen på kassa-sidan
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = ''; // Rensa varukorgen
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.product} - SEK${item.price}`;
        
        // Lägg till en "Ta bort" knapp
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Ta bort';
        removeButton.onclick = () => removeFromCart(item.product, item.price);
        
        cartItem.appendChild(removeButton);
        cartItems.appendChild(cartItem);
    });
    cartTotal.textContent = total;
}





