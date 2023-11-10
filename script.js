document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("total-price");
    const productItems = document.querySelectorAll(".products .add-to-cart");

    let cart = [];
    let totalPrice = 0;

    // Lägg till produkt i varukorgen
    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        updateCart();
    }

    // Ta bort produkt från varukorgen
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Uppdatera varukorgens visning och totalpris
    function updateCart() {
        cartItems.innerHTML = "";
        totalPrice = 0;

        cart.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${item.name} - ${item.price} kr
                <button class="remove-from-cart" data-index="${index}">Ta bort</button>
            `;
            cartItems.appendChild(listItem);
            totalPrice += item.price;
        });

        total.textContent = `Totalt: ${totalPrice} kr`;

        // Lägg till lyssnare för att ta bort produkter
        const removeButtons = document.querySelectorAll(".remove-from-cart");
        removeButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                removeFromCart(index);
            });
        });
    }

    // Lägg till lyssnare för att lägga till produkter i varukorgen
    productItems.forEach((button, index) => {
        button.addEventListener("click", () => {
            const productName = document.querySelectorAll(".product-name")[index].textContent;
            const productPrice = parseInt(document.querySelectorAll(".product-price")[index].textContent);
            addToCart(productName, productPrice);
        });
    });
});
// Produkter
const products = [
    { id: 1, name: "Långärmad tröja", price: 499 },
    { id: 2, name: "Mönstrad blus", price: 299 },
    { id: 3, name: "Top", price: 299 },
    { id: 4, name: "Dunjacka", price: 1699 },
    { id: 5, name: "Kavaj", price: 499 },
    { id: 6, name: "Raka jeans", price: 799 },
    { id: 7, name: "T-shirt", price: 149 },
    { id: 8, name: "Polotröja", price: 399 },
    { id: 9, name: "Blus", price: 399 },
];

// Varukorg
const cart = [];

// Hitta element i HTML
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

// Lägg till produkt i varukorgen
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Ta bort produkt från varukorgen
function removeFromCart(productId) {
    const index = cart.findIndex((p) => p.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

// Uppdatera varukorgen i HTML
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((product) => {
        total += product.price;
        const li = document.createElement("li");
        li.innerHTML = `${product.name} - ${product.price}kr <button onclick="removeFromCart(${product.id})">Ta bort</button>`;
        cartItems.appendChild(li);
    });

    totalPrice.textContent = `Totalt: ${total}kr`;
}

// Ladda produkter och uppdatera varukorgen vid sidans laddning
window.onload = () => {
    updateCart();
};
// En lista för varukorgen
const shoppingCart = [];

// Funktion för att lägga till en produkt i varukorgen
function addToCart(productID) {
    // Hitta produkten med produktID i din produktlista (anpassa detta till din produktlista)
    const productToAdd = findProduct(productID);

    if (productToAdd) {
        shoppingCart.push(productToAdd);
        updateCartUI();
    }
}

// Funktion för att uppdatera varukorgen i användargränssnittet
function updateCartUI() {
    // Här kan du uppdatera varukorgen i din HTML-fil, t.ex. en lista av produkter i varukorgen
    // Använd DOM-manipulation för att uppdatera varukorgselementen
}
