let edad = 0;

function solicitarEdad() {
  edad = prompt(
    "Debes ser mayor de edad para ingresar al sitio. Ingrese su edad"
  );
  if (edad >= 18) {
    alert("Bienvenido al sitio");
    elegirMenu();
  } else {
    alert("Eres menor de edad. No puedes ingresar");
  }
}
solicitarEdad();

function elegirMenu() {
  let pasosDelMenu = 3;
  let platoPrincipal = 0;
  let bebida = 0;
  let postre = 0;
  let valorTotal = 0;

  while(platoPrincipal !== 1 && platoPrincipal !== 2){
    platoPrincipal = Number(prompt("Elige su plato principal: 1 = Milanesa $ 500 - 2 = Hamburguesa $ 300"));
  }
  while(bebida !== 1 && bebida !== 2){
    bebida = Number(prompt("Elige su bebida: 1 = Coca Cola $ 200 - 2 = Sprite $ 150"));
  }
  while(postre !== 1 && postre !== 2){
    postre = Number(prompt("Elige su postre: 1 = Helado $ 100 - 2 = Flan $ 100"));
  }

  for (let index = 0; index < pasosDelMenu; index++) {
    console.log(index)
    switch (index) {
      case 0:
        if(platoPrincipal === 1){
          alert("Su plato principal es: Milanesa");
          valorTotal = valorTotal + 500;
          }else{
            alert("Su plato principal es: Hamburguesa");
            valorTotal = valorTotal + 300;
          }
        break;
      case 1:
        if(bebida === 1){
          alert("Su bebida es: Coca Cola");
          valorTotal = valorTotal + 200;
          }else{
            alert("Su bebida es: Sprite");
            valorTotal = valorTotal + 150;
          }
        break;
      case 2:
        if(postre === 1){
          alert("Su postre es: Helado");
          valorTotal = valorTotal + 100;
          }else{
            alert("Su postre es: Flan");
            valorTotal = valorTotal + 100;
          }
        break;
    }
  }
  alert("El costo total de su menú es: $" + valorTotal)
}

