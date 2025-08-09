// Logica de la aplicacion
class Product {
    constructor(name, price, year) {
        this.name = name
        this.price = price
        this.year = year
    }
}

class UI {
    addProduct(product) {
        const productList = getElementById("product-list");
    }

    deletProduct() {

    }

    showMessage() {

    }
}

//DOM Events

document
    .getElementById('product-form')
    .addEventListener("submit", (e) => {
        
        e.preventDefault();

        const name = document.getElementById("name").value,
            price = document.getElementById("price").value,
            year = document.getElementById("year").value;

       
        const product = new Product(name, price, year);
    });