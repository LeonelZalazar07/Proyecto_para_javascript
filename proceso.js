// Capturar entrada de cantidad de zapatillas mediante prompt()
const cantidadDeZapatillas = prompt("Ingrese la cantidad de zapatillas a comprar:");

// Declarar variables y objetos necesarios para simular el proceso seleccionado
const precios = [5000, 7000, 9000];
const descuentoMayorista = 0.2;

// Calcular subtotal
const calcularSubtotal = (cantidad, precio) => {
  const subtotal = cantidad * precio;
  return subtotal;
};

// Calcular descuento por compra mayorista
const calcularDescuentoMayorista = (subtotal) => {
  let descuento = 0;
  if (subtotal > 10000) {
    descuento = subtotal * descuentoMayorista;
  }
  return descuento;
};

// Calcular total a pagar
const calcularTotal = (subtotal, descuento) => {
  const total = subtotal - descuento;
  return total;
};

// Obtener el modelo seleccionado por el usuario
const obtenerModelo = () => {
  const modelo = document.getElementById("model").value;
  return modelo;
};

// Obtener la cantidad de zapatillas ingresada por el usuario
const obtenerCantidad = () => {
  const cantidad = parseInt(document.getElementById("quantity").value);
  return cantidad;
};

// Obtener el precio del modelo seleccionado
const obtenerPrecio = (modelo) => {
  const precio = precios[modelo];
  return precio;
};

// Actualizar el resultado en el DOM
const actualizarResultado = (subtotal, descuento, total) => {
  const resultado = document.getElementById("result");
  resultado.innerHTML = `
    <p>Subtotal: $${subtotal}</p>
    <p>Descuento: $${descuento}</p>
    <p>Total: $${total}</p>
  `;
};

// Función principal que realiza todo el proceso
const realizarProceso = () => {
  const modelo = obtenerModelo();
  const cantidad = obtenerCantidad();
  const precio = obtenerPrecio(modelo);
  const subtotal = calcularSubtotal(cantidad, precio);
  const descuento = calcularDescuentoMayorista(subtotal);
  const total = calcularTotal(subtotal, descuento);
  actualizarResultado(subtotal, descuento, total);
};

// Asociar la función realizarProceso al evento de clic del botón "Calcular"
document.getElementById("calculate").addEventListener("click", realizarProceso);