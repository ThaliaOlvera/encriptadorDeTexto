const textArea = document.querySelector("#textAreaEntry");
const mensaje = document.querySelector("#textareaOutput");
const checkCopy = document.querySelector(".confirm_container");
document.querySelector("#copy").addEventListener("click", showConfirm);
document.querySelector("#clearText").addEventListener("click", clear);

function btnEncriptar() {
  const textoOriginal = textArea.value;
  const caracteresValidos = /^[a-z\s]*$/;

  if (!caracteresValidos.test(textoOriginal)) {
    errorAlerta.style.display = "flex";
    return false;
  }

  const textoEncriptado = encriptar(textoOriginal);
  mensaje.value = textoEncriptado;
  textArea.value = "";

  return true;
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  contenedor.appendChild(boton);
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function showConfirm() {
  let copyText = document.querySelector("#textareaOutput");
  copyText.select();
  document.execCommand("copy");
  copyText.value = "";
  copyText.classList.add("hidden-content");

  checkCopy.style.display = "flex";

  setTimeout(function () {
    checkCopy.style.display = "none";
    copyText.classList.remove("hidden-content");
  }, 2000);
}

function clear() {
  mensaje.value = "";
  return true;
}
