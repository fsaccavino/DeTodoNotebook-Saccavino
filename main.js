const products = [
  {
    id: "1",
    nombre: "NOTEBOOK GAMER ACER AN515-57-52NY INTEL CORE I5",
    imagen: "./img/ACER AN515-57-52NY.jpg",
    precio: 500000,
    marca: "Acer",
  },
  {
    id: "2",
    nombre: "NOTEBOOK OFICINA ACER A315-58-56J6 INTEL CORE I5",
    imagen: "./img/ACER A315-58-56J6.jpg",
    precio: 300000,
    marca: "Acer",
  },
  {
    id: "3",
    nombre: "NOTEBOOK HOGAR A315-34-C52Q DUAL-CORE",
    imagen: "./img/ACER A315-34-C52Q.jpg",
    precio: 150000,
    marca: "Acer",
  },
  {
    id: "4",
    nombre: "NOTEBOOK GAMER ASUS ZENBOOK 14X OLED UX5401EA-L7101T INTEL",
    imagen: "./img/UX5401EA.jpg",
    precio: 800000,
    marca: "Asus",
  },
  {
    id: "5",
    nombre: "NOTEBOOK OFICINA ASUS VIVOBOOK PRO 15 OLED M3500QA-L1180W",
    imagen: "./img/VIVOBOOK PRO 15 OLED.jpg",
    precio: 690000,
    marca: "Asus",
  },
  {
    id: "6",
    nombre: "NOTEBOOK HOGAR ASUS X515EA-EJ1626W NTEL CORE I3",
    imagen: "./img/X515EA-EJ1626W.jpg",
    precio: 240000,
    marca: "Asus",
  },
  {
    id: "7",
    nombre: "NOTEBOOK GAMER LENOVO 82H802JKAR INTEL CORE I7",
    imagen: "./img/LENOVO 82H802JKAR.jpg",
    precio: 550000,
    marca: "Lenovo",
  },
  {
    id: "8",
    nombre: "NOTEBOOK OFICINA LENOVO 82KU01VDAR AMD R5",
    imagen: "./img/LENOVO 82KU01VDAR.jpg",
    precio: 290000,
    marca: "Lenovo",
  },
  {
    id: "9",
    nombre: "NOTEBOOK HOGAR LENOVO 81WQ00MLAR INTEL CELERON",
    imagen: "./img/LENOVO 81WQ00MLAR.jpg",
    precio: 180000,
    marca: "Lenovo",
  },
];

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

  buttonAdd = document.querySelectorAll(".add-product");
  buttonAdd.forEach((button) => {
    button.addEventListener("click", (e) => {
      const existe = shop.some((product) => product.id === e.currentTarget.id);
      if (existe) {
        shop = shop.map((product) => {
          if (product.id === e.currentTarget.id) {
            product.cantidad++;
          }
        return product;
        });
      } else {
        const productAdd = products.find((product) => product.id === e.currentTarget.id);
        productAdd.cantidad = 1;
        shop.push(productAdd);
        
      }
      refreshNumber();
      localStorage.setItem("shop", JSON.stringify(shop));
    });
  });
}
uploadProducts(products);

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
