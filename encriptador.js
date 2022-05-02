"use strict";

var botonEncriptar = document.querySelector("#boton-encriptar");
var botonDesencriptar = document.querySelector("#boton-desencriptar");
var botonCopiar = document.querySelector("#boton-copiar");
var inputIngreso = document.querySelector("#ingreso-texto");
var inputRetorno = document.querySelector("#retorno-texto");
var caracteresEncriptados = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};
var caracteresDesencriptados = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};
const re = /[A-Z]|[0-9]|[Á-Ź]|[á-ź]/g;
const reg2 = /[.,´¡¿"#=_;:/%'*+\-?^${}()|[\]\\&°¬!~`]/g;

function encriptar(texto) {
  const RegExp = /[aeiou]/g;
  return texto.replaceAll(RegExp, (i) => caracteresEncriptados[i]);
}

function desencriptar(texto) {
  const RegExp = /ai|enter|imes|ober|ufat/g;
  return texto.replaceAll(RegExp, (i) => caracteresDesencriptados[i]);
}

botonEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  if (re.test(inputIngreso.value) || reg2.test(inputIngreso.value)) {
    alert("no se pueden utilizar mayusculas, acentos ni caracteres especiales");
    inputIngreso.value = "error,caracteres no soportados";
    inputRetorno.value = inputIngreso.value;
  } else {
    inputRetorno.value = encriptar(inputIngreso.value);
  }
});

botonDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  if (re.test(inputIngreso.value) || reg2.test(inputIngreso.value)) {
    alert("no se pueden utilizar mayusculas,acentos ni caracteres especiales");
    inputIngreso.value = "error,caracteres no soportados";
    inputRetorno.value = inputIngreso.value;
  } else {
    inputRetorno.value = desencriptar(inputIngreso.value);
  }
});

botonCopiar.addEventListener("click", function (event) {
  event.preventDefault();
  navigator.clipboard.writeText(inputRetorno.value);
  inputRetorno.value = "texto copiado";
});
