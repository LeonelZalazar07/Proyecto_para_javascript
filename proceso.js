let cantidadDeZapatillas;
let precios = [5000, 7000, 9000];
const descuentoMayorista = 0.2;
let modelo, cantidad, cuotas;

const calcularSubtotal = (cantidad, precio) => {
  const subtotal = cantidad * precio;
  return subtotal;
}

const calcularDescuentoMayorista = (subtotal) => {
  let descuento = 0;
  if (cantidadDeZapatillas >= 3 && cantidadDeZapatillas <= 5) {
    descuento = subtotal * 0.1;
  } else if (cantidadDeZapatillas > 5 && cantidadDeZapatillas <= 10) {
    descuento = subtotal * 0.15;
  } else if (cantidadDeZapatillas > 10) {
    descuento = subtotal * descuentoMayorista;
  }
  return descuento;
}

const calcularTotal = (subtotal, descuento) => {
  const total = subtotal - descuento;
  return total;
}

const calcularCuotas = (total, cantidadDeCuotas) => {
  const montoCuota = total / cantidadDeCuotas;
  return montoCuota;
}

while (!cantidadDeZapatillas) {
  cantidadDeZapatillas = prompt("Ingrese la cantidad de zapatillas a comprar:");
  if (!cantidadDeZapatillas) {
    alert("Debe ingresar la cantidad de zapatillas.");
  }
}

while (!modelo) {
  modelo = prompt("Ingrese el número de modelo (1, 2 o 3):");
  if (!modelo || isNaN(modelo) || modelo < 1 || modelo > 3) {
    alert("Debe ingresar un número de modelo válido.");
    modelo = null;
  }
}

while (!cantidad) {
  cantidad = prompt("Ingrese la cantidad de zapatillas del modelo seleccionado:");
  if (!cantidad || isNaN(cantidad) || cantidad < 1) {
    alert("Debe ingresar una cantidad válida.");
    cantidad = null;
  }
}

while (!cuotas) {
  cuotas = prompt("Ingrese la cantidad de cuotas (1, 3, 6, 9 o 12):");
  if (!cuotas || isNaN(cuotas) || ![1, 3, 6, 9, 12].includes(parseInt(cuotas))) {
    alert("Debe ingresar una cantidad de cuotas válida.");
    cuotas = null;
  }
}

const precio = precios[modelo - 1];
const subtotal = calcularSubtotal(cantidad, precio);
const descuento = calcularDescuentoMayorista(subtotal);
const total = calcularTotal(subtotal, descuento);
const montoCuota = calcularCuotas(total, cuotas);

let mensaje = `Usted ha seleccionado ${cantidadDeZapatillas} zapatilla(s) del modelo ${modelo}, por un total de $${total}.`;

if (descuento > 0) {
  mensaje += ` Se le ha aplicado un descuento de $${descuento.toFixed(2)}.`;
}

if (cuotas > 1) {
  mensaje += ` Puede abonar en ${cuotas} cuotas de $${montoCuota.toFixed(2)} cada una.`;
}

document.getElementById("result").textContent = mensaje;
