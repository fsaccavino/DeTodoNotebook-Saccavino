let shop = localStorage.getItem("shop");
shop = JSON.parse(shop);

const shopEmptyP = document.querySelector(".shop-empty-p");
const itemsShop = document.querySelector(".items-shop");
const shopActions = document.querySelector(".shop-actions");
const shopBuyP = document.querySelector(".shop-buy-p");
let buttonRemove = document.querySelectorAll(".remove-item-shop");
const buttonShopEmpty = document.querySelector(".shop-empty");
const buttonTotal = document.querySelector("#total");
const buttonBuy = document.querySelector(".shop-buy");

function updateShop() {
  if (shop && shop.length > 0) {
    shopEmptyP.classList.add("none");
    itemsShop.classList.remove("none");
    shopActions.classList.remove("none");
    shopBuyP.classList.add("none");

    itemsShop.innerHTML = "";

    shop.forEach(({ imagen, nombre, id, precio, cantidad }) => {
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="item-shop">
      <img class="img-shop" src="${imagen}" alt="${nombre}" />
      <div class="product-shop-name">
        <p class="price-shop">Producto</p>
        <h2>${nombre}</h2>
      </div>
      <div class="amount-shop">
        <p>Cantidad</p>
        <p>${cantidad}</p>
      </div>
      <div class="price-shop">
        <p>Precio unitario</p>
        <p>$ ${precio}</p>
      </div>
      <div class="subtotal-shop">
        <p>Total</p>
        <p>$ ${precio * cantidad}</p>
      </div>
      <button class="remove-item-shop" id="${id}"><i class="bi bi-file-x-fill"></i></button>
    </div>
    `;
      itemsShop.append(div);
    });
  } else {
    shopEmptyP.classList.remove("none");
    itemsShop.classList.add("none");
    shopActions.classList.add("none");
    shopBuyP.classList.add("none");
  }
  updateButtonRemove();
  updateTotal();
}
updateShop();

function updateButtonRemove() {
  buttonRemove = document.querySelectorAll(".remove-item-shop");
  buttonRemove.forEach((button) => {
    button.addEventListener("click", removeShop);
  });
}

function removeShop(e) {
  const index = shop.findIndex((product) => product.id === e.currentTarget.id);

  shop.splice(index, 1);
  updateShop();

  localStorage.setItem("shop", JSON.stringify(shop));
}

buttonShopEmpty.addEventListener("click", () => {
  shop.length = 0;
  localStorage.setItem("shop", JSON.stringify(shop));
  updateShop();
});

function updateTotal() {
  let totalCalculado = 0;
  shop.forEach(({ precio, cantidad }) => {
    totalCalculado = precio * cantidad + totalCalculado;
  });
  total.innerText = `$ ${totalCalculado}`;
}

buttonBuy.addEventListener("click", () => {
  shop.length = 0;
  localStorage.setItem("shop", JSON.stringify(shop));
  shopEmptyP.classList.add("none");
  itemsShop.classList.add("none");
  shopActions.classList.add("none");
  shopBuyP.classList.remove("none");
});