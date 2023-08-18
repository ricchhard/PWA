// Seleccionar elementos del DOM
const cartButton = document.querySelector('.cart-button');
const cartContainer = document.querySelector('.cart-container');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsContainer = document.querySelector('.cart-items');
const checkoutButton = document.querySelector('.checkout-btn');

// Evento para mostrar/ocultar el carrito
cartButton.addEventListener('click', () => {
    cartContainer.classList.toggle('visible');
});

// Evento para agregar producto al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Simular proceso de agregar al carrito
        showLoadingMessage();

        setTimeout(() => {
            hideLoadingMessage();
            addToCart(button);
        }, 2000); // Simulación de proceso
    });
});

// Función para mostrar mensaje de carga
function showLoadingMessage() {
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'loading-message';
    loadingMessage.textContent = 'Agregando al carrito...';
    document.body.appendChild(loadingMessage);
}

// Función para ocultar mensaje de carga
function hideLoadingMessage() {
    const loadingMessage = document.querySelector('.loading-message');
    if (loadingMessage) {
        document.body.removeChild(loadingMessage);
    }
}

// Función para agregar producto al carrito
function addToCart(button) {
    const product = button.closest('.product');
    const productName = product.querySelector('h2').textContent;
    const productPrice = parseFloat(product.querySelector('p').textContent.replace('Precio: $', ''));

    // Crear elemento de carrito
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <img src="product1.jpg" alt="${productName}">
        <div class="cart-item-info">
            <h3>${productName}</h3>
            <p>Precio: $${productPrice.toFixed(2)}</p>
        </div>
        <span class="remove-btn">Quitar</span>
    `;

    // Agregar al carrito
    cartItemsContainer.appendChild(cartItem);

    // Actualizar el total
    updateTotal();
}

// Función para actualizar el total del carrito
function updateTotal() {
    const totalAmount = document.querySelector('.total-amount');
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('p').textContent.replace('Precio: $', ''));
        total += price;
    });

    totalAmount.textContent = total.toFixed(2);
}

// ... (contenido posterior)

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        document.body.removeChild(alertBox);
    }, 2000);
}

// Evento para agregar producto al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Simular proceso de agregar al carrito
        showLoadingMessage();

        setTimeout(() => {
            hideLoadingMessage();
            const productName = button.closest('.product').querySelector('h2').textContent;
            addToCart(button);
            showAlert(`${productName} se agregó al carrito.`);
        }, 2000); // Simulación de proceso
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos del DOM
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    // Función para mostrar una alerta en el centro de la página
    function showAlert(message) {
        const alertBox = document.createElement('div');
        alertBox.className = 'alert-box';
        alertBox.textContent = message;

        const alertContainer = document.getElementById('alert-container');
        alertContainer.innerHTML = ''; // Limpiar contenido anterior
        alertContainer.appendChild(alertBox);

        setTimeout(() => {
            alertContainer.innerHTML = ''; // Limpiar la alerta después de mostrarla
        }, 2000);
    }

    // Evento para agregar producto al carrito
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Simular proceso de agregar al carrito
            const productName = button.closest('.product').querySelector('h2').textContent;
            addToCart(button);
            showAlert(`${productName} se agregó al carrito.`);
        });
    });

    // ... (contenido posterior del app.js)
});

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Se ha comprado el producto');
    });
});