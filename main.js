const productos = [
  {
    id: 1,
    nombre: "NOTEBOOK GAMER - ACER AN515-57-52NY INTEL CORE I5",
    precio: 500000,
  },
  {
    id: 2,
    nombre: "NOTEBOOK OFICINA - ACER A315-58-56J6 INTEL CORE I5",
    precio: 300000,
  },
  {
    id: 3,
    nombre: "NOTEBOOK HOGAR - ACER A315-34-C52Q DUAL-CORE",
    precio: 150000,
  },
];

function ingresarNombre() {
  let nombreIngresado = prompt("Ingrese su nombre");
  alert("Bienvenido " + nombreIngresado + " a De Todo Notebook");
}
ingresarNombre();

function elegirNotebook() {
  let notebookIngresada = "";

  while (
    notebookIngresada.toUpperCase() !== "GAMER" &&
    notebookIngresada.toUpperCase() !== "OFICINA" &&
    notebookIngresada.toUpperCase() !== "HOGAR"
  ) {
    notebookIngresada = prompt(
      "Ingrese el nombre de la notebook que desea adquirir (GAMER, OFICINA o HOGAR):"
    );
  }
  return productos.filter((producto) =>
    producto.nombre.includes(notebookIngresada.toUpperCase())
  );
}

let notebookElegida = elegirNotebook();

function elegirMetodoPago() {
  let metodoPago;

  while (Number(metodoPago) !== 1 && Number(metodoPago) !== 2) {
    metodoPago = prompt(
      "Como desea abonar: 1 - Efectivo (20% de descuento) 2 - Tarjeta (10% de recargo"
    );
  }
  if (Number(metodoPago) === 1) {
    alert(
      "El precio total en efectivo es: $ " +
        (Number(notebookElegida[0].precio) -
          Number(notebookElegida[0].precio) * 0.2)
    );
  } else if (Number(metodoPago) === 2) {
    alert(
      "El precio total financiado es: $ " +
        Number(notebookElegida[0].precio) * 1.1
    );
  }
}
elegirMetodoPago();