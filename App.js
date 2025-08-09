

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
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");

        element.innerHTML = `
            <div class="card shadow-sm border-0 mb-4">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-2">${product.name}</h5>
                            <p class="card-text mb-1">
                                <strong>💲 Precio:</strong> ${product.price}
                            </p>
                            <p class="card-text">
                                <strong>📅 Año:</strong> ${product.year}
                            </p>
                    <a class="btn btn-outline-danger btn-sm" id="delete" >Eliminar</a>
                    </div>
            </div>
`;

        productList.appendChild(element);
    }

    resetForm = () => document.getElementById("product-form").reset();
    

    deletProduct(element) {
        if(element.id === "delete") {
            element.parentElement.parentElement.parentElement.remove(); //Comprueba el elemento padre y elimina
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className(); //Asigna comentario a nuestro div creado con createElement
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
        const ui = new UI()

        ui.addProduct(product);
        ui.deletProduct(product);
        ui.resetForm()
    });

document.getElementById("product-list").addEventListener("click", (e) => {
  
    const ui = new UI();

    ui.deletProduct(e.target)

})