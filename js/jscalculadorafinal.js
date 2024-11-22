// Variables globales
var numero1 = 0;
var numero2 = 0;
var operacion = "";
var acumulador = "";
var expresion = ""; 


document.getElementById("id-display").innerText = "00";


function setearValor(valor) {
  document.getElementById("id-display").innerText = valor;
}


function setearValorConcatenado(valor) {
  let valorActual = document.getElementById("id-display").innerText;

 
  if (valorActual === "00") {
    setearValor(valor);
  } else {
    setearValor(valorActual + valor); 
  }
}


function recibirValor1(valor) {
  acumulador += valor; 
  expresion += valor; 
  setearValorConcatenado(valor); 
}


function evaluarOperacion(op) {
  if (acumulador) {
    if (numero1 === 0 && operacion === "") {
      numero1 = parseFloat(acumulador); 
    } else if (numero1 !== 0 && operacion !== "") {
      numero2 = parseFloat(acumulador); 
      realizarOperacion(); 
    }
    operacion = op; 
    acumulador = ""; 
    expresion += op; 
    setearValorConcatenado(op); 
  }
}


function realizarOperacion() {
  if (operacion === "+") {
    numero1 = numero1 + numero2;
  } else if (operacion === "-") {
    numero1 = numero1 - numero2;
  } else if (operacion === "*") {
    numero1 = numero1 * numero2;
  } else if (operacion === "/") {
    numero1 = numero2 !== 0 ? numero1 / numero2 : "Error"; 
  }
  numero2 = 0;
}


function igual() {
  if (acumulador && operacion) {
    numero2 = parseFloat(acumulador); 
    realizarOperacion(); 
    operacion = ""; 
    acumulador = numero1.toString(); 
    setearValor(numero1); 
    expresion = numero1.toString(); 

  }
}

function borrar() {
  if (expresion.length > 0) {
    expresion = expresion.slice(0, -1); 
    acumulador = acumulador.slice(0, -1); 
    setearValor(expresion || "00"); 
  }
}


function limpiar() {
  numero1 = 0;
  numero2 = 0;
  operacion = "";
  acumulador = "";
  expresion = "";
  setearValor("00"); 
}
