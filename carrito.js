let shop = localStorage.getItem("shop");
shop = JSON.parse(shop);

const shopEmptyP = document.querySelector(".shop-empty-p");
const itemsShop = document.querySelector(".items-shop");
const shopActions = document.querySelector(".shop-actions");
let buttonRemove = document.querySelectorAll(".remove-item-shop");
const buttonShopEmpty = document.querySelector(".shop-empty");
const buttonTotal = document.querySelector("#total");
const buttonBuy = document.querySelector(".shop-buy");
const cardPay = document.querySelector(".card-pay");

function updateShop() {
  if (shop && shop.length > 0) {
    shopEmptyP.classList.add("none");
    itemsShop.classList.remove("none");
    shopActions.classList.remove("none");

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
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1200,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: "error",
    title: "Producto eliminado",
  });
  const index = shop.findIndex((product) => product.id === e.currentTarget.id);

  shop.splice(index, 1);
  updateShop();

  localStorage.setItem("shop", JSON.stringify(shop));
}

buttonShopEmpty.addEventListener("click", shopEmpty);

function shopEmpty() {
  Swal.fire({
    title: "¿Estás seguro que deseas vaciar el carrito?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Vaciar",
    cancelButtonText: "Cancelar",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Carrito vacío!", "No hay productos en el carrito.", "success");
      shop.length = 0;
      localStorage.setItem("shop", JSON.stringify(shop));
      updateShop();
    } else {
      Swal.fire("Cancelado", "Los productos siguen en el carrito", "error");
      localStorage.setItem("shop", JSON.stringify(shop));
      updateShop();
    }
  });
}

function updateTotal() {
  let totalCalculado = 0;
  shop.forEach(({ precio, cantidad }) => {
    totalCalculado = precio * cantidad + totalCalculado;
  });
  total.innerText = `$ ${totalCalculado}`;
}

buttonBuy.addEventListener("click", shopBuy);

function shopBuy() {
  Swal.fire({
    icon: "success",
    title: "¡Muchas gracias por su compra!",
    confirmButtonText: "Aceptar",
  });
  itemsShop.classList.add("none");
  shopActions.classList.add("none");
  setTimeout(function () {
    localStorage.clear();
    shopEmptyP.classList.remove("none");
  }, 1300);
}
