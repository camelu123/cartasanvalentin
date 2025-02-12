// Obtener elementos del DOM
const acceptBtn = document.getElementById('accept-btn');
const rejectBtn = document.getElementById('reject-btn');
const popup = document.getElementById('popup');
const confirmBtn = document.getElementById('confirm-btn');

// Texto para los mensajes aterradores
const rejectMessages = [
    "¡Te dije que no hay vuelta atrás! ¡Has presionado 'No acepto'!",
    "¡Cuidado! ¡Te quedan 30 minutos de vida!",
    "¡Has desafiado el destino! ¡1 hora y se acabó!",
    "¡Estás a punto de morir si no cambias de decisión!"
];

// Función para hacer que el botón 'No acepto' se mueva
let rejectClicks = 0;
rejectBtn.addEventListener('mouseenter', () => {
    let randomX = Math.random() * 300; // Movimiento aleatorio horizontal
    let randomY = Math.random() * 300; // Movimiento aleatorio vertical
    rejectBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

rejectBtn.addEventListener('click', () => {
    rejectClicks++;
    if (rejectClicks < rejectMessages.length) {
        alert(rejectMessages[rejectClicks]);
    } else {
        alert("¡Te queda poco tiempo! ¡Haz clic en 'Sí, acepto' para sobrevivir!");
    }
});

// Evento cuando se presiona "Sí, acepto"
acceptBtn.addEventListener('click', () => {
    // Mostrar ventana emergente
    popup.style.display = "flex";
});

// Evento cuando se presiona "No acepto" (para verificar que se debe presionar 'Sí acepto' para salvarse)
rejectBtn.addEventListener('click', () => {
    rejectBtn.innerText = "Sigue presionando... ¡Hazlo rápido!";
    rejectBtn.style.animation = "shake 0.5s infinite";
});

// Confirmar la acción en el popup
confirmBtn.addEventListener('click', () => {
    alert("Gracias por aceptar, ¡serás feliz por siempre! 💖");
    popup.style.display = "none"; // Cierra el popup
});
