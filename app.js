let cart = [];
let total = 0;
const cartItems = document.getElementById('cart-items');
function addToCart(productName, price) {
    cart.push({ product: productName, price: price });
    total += price;
    updateCart(); // Uppdatera varukorgen på kassa-sidan
}

// Uppdaterad JavaScript-kod för att hantera borttagningen
function removeFromCart(button) {
    // Hitta den överordnade <li>-taggen för det aktuella varukorgsobjektet
    const listItem = button.closest('li');
    // Hämta produktens namn och pris från data-attribut
    const productName = listItem.dataset.productName;
    const price = parseInt(listItem.dataset.price);
    // Ta bort produkten från varukorgen
    const index = cart.findIndex(item => item.product === productName);
    if (index !== -1) {
        const removedItem = cart.splice(index, 1)[0];
        total -= removedItem.price;
        updateCart();
    }
}


function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = ''; // Rensa varukorgen
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.product} - KR${item.price}`;
        cartItems.appendChild(cartItem);
    });
    cartTotal.textContent = total;
}
function addReviewText(productName) {
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
function addReviewRating(productName, ratingName) {
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

// ... din befintliga JS-kod ...
// Lägg till dessa funktioner för att hantera popupen
function openContactPopup() {
    const popup = document.getElementById('contact-popup');
    popup.style.display = 'block';
}
function closeContactPopup() {
    const popup = document.getElementById('contact-popup');
    popup.style.display = 'none';
}
// ... fortsättning av din JS-kod ...



