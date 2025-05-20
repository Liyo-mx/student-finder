const products = [
    { name: "Headphones", price: 59.99, image: "headphone.jfif" },
    { name: "Smart Watch", price: 129.99, image: "smart-watch.png" },
    { name: "Bluetooth Speaker", price: 45.99, image: "speaker.jpg" },
    { name: "Wireless Mouse", price: 29.99, image: "mouse.jfif" },
    { name: "Gaming Keyboard", price: 89.99, image: "keyboard.png" },
    { name: "USB-C Hub", price: 39.99, image: "hub.jfif" }
    ];
    function displayProducts(productsToShow) {
    const container = document.getElementById('productsContainer');
    const productsHTML = productsToShow.map(product => `
    <div class="product-card">
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p class="price">$${product.price}</p>
    </div>
    `).join('');
    container.innerHTML = productsHTML;
    }
    function filterProducts() {
    const maxPrice = document.getElementById('priceRange').value;
    const filteredProducts = products.filter(product => {
    return product.price <= maxPrice;
    });
    displayProducts(filteredProducts);
    }
    displayProducts(products);