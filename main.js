let products = [];

fetch("./productos.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    uploadProducts(products);
    generateButtonSelectors();
  });


const containerItems = document.querySelector("#container-items");
let buttonAdd = document.querySelectorAll(".add-product");
const number = document.querySelector(".number");

function uploadProducts(products) {
  products.forEach(({ imagen, nombre, id, precio }) => {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
    <figure>
      <img src="${imagen}" alt="${nombre}" />
    </figure>
    <div class="info-product">
      <h2>${nombre}</h2>
      <p class="price">$ ${precio}</p>
      <button class="add-product" id="${id}">Añadir al carrito</button>
    </div>
    `;

    containerItems.append(div);
  });
  
}

function generateButtonSelectors() {
  buttonAdd = document.querySelectorAll(".add-product");
  buttonAdd.forEach((button) => button.addEventListener("click", addToShopp));
}


function addToShopp(e) {
  
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1200,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: "success",
    title: "Producto agregado",
  });
  const existe = shop.some((product) => product.id === e.currentTarget.id);

  if (existe) {
    shop = shop.map((product) => {
      if (product.id === e.currentTarget.id) {
        product.cantidad++;
      }
      return product;
    });
  } else {
    const productAdd = products.find(
      (product) => product.id === e.currentTarget.id
    );
    productAdd.cantidad = 1;
    shop.push(productAdd);
  }

  refreshNumber();
  localStorage.setItem("shop", JSON.stringify(shop));
}

let shop;
let shopLS = localStorage.getItem("shop");

if (shopLS) {
  shop = JSON.parse(shopLS);
  refreshNumber();
} else {
  shop = [];
}

function refreshNumber() {
  number.innerText = shop.length;
}
