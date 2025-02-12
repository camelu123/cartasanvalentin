// Obtener elementos del DOM
const acceptBtn = document.getElementById('accept-btn');
const rejectBtn = document.getElementById('reject-btn');
const popup = document.getElementById('popup');
const confirmBtn = document.getElementById('confirm-btn');

// Evento cuando se presiona "Sí, acepto"
acceptBtn.addEventListener('click', () => {
    // Aquí podemos poner la poesía que aparecerá cuando el usuario acepte
    alert("La belleza no se ve solo con los ojos, sino con el corazón. 💖");
    popup.style.display = "flex"; // Muestra el popup después de aceptar
});

// Evento cuando se presiona "No acepto"
rejectBtn.addEventListener('click', () => {
    let clickCount = 0;
    rejectBtn.innerText = `¡Sigue presionando!`;
    setInterval(() => {
        clickCount++;
        if (clickCount >= 10) {
            popup.style.display = "flex"; // Muestra el popup después de muchos clics
        }
    }, 1000);
});

// Confirmar la acción en el popup
confirmBtn.addEventListener('click', () => {
    alert("¡Gracias por aceptar! 💕");
    popup.style.display = "none"; // Cierra el popup
});
