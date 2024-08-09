// Obtener elementos del DOM
const inputLink = document.getElementById('inputLink');
const btnGenerarQR = document.getElementById('btnGenerarQR');
const contenedorQR = document.getElementById('contenedorQR');
const btnDescargarQR = document.getElementById('btnDescargarQR');
const btnCompartirQR = document.getElementById('btnCompartirQR');

// Función para generar el código QR
function generarQR() {
  // Obtener el valor del input
  const link = inputLink.value;
  
  // Crear un objeto QRCode
  const qrcode = new QRCode(contenedorQR, {
    text: link,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
  
  // Mostrar los botones de descarga y compartir
  btnDescargarQR.style.display = 'inline-block';
  btnCompartirQR.style.display = 'inline-block';
}

// Asignar evento click al botón "Generar QR"
btnGenerarQR.addEventListener('click', generarQR);
