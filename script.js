document.getElementById('noBtn').addEventListener('click', function() {
    // Mueve el botón dentro de los límites del recuadro
    moveButton();
    alert('¡Has presionado No! ¡Tienes una hora para vivir! Necesitas presionar "Sí" para sobrevivir.');
    
    // Mostrar un mensaje aterrador después de 5 segundos
    setTimeout(() => {
        alert('¡Tu tiempo se está agotando! No hay vuelta atrás...');
    }, 5000);
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('confirmationPopup').style.display = 'block';
});

document.getElementById('finalYesBtn').addEventListener('click', function() {
    alert('¡Gracias, Estrellita de Mar! Aquí tienes una poesía:');
    alert('La belleza de tu ser, más allá del mar, / Refleja el amor en el cielo estelar. / En tus ojos, un mundo lleno de luz, / Tú, mi sol, mi guía, mi paz, mi cruz.');
    document.getElementById('confirmationPopup').style.display = 'none';
});

// Función que mueve el botón a una posición aleatoria dentro del recuadro
function moveButton() {
    const button = document.getElementById('noBtn');
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();
    
    // Limitar el movimiento dentro del recuadro
    const maxWidth = cardRect.width - button.offsetWidth;
    const maxHeight = cardRect.height - button.offsetHeight;

    // Generar nuevas posiciones dentro de los límites
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;
    
    // Establecer nuevas posiciones del botón
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    
    // Mensajes aterradores o graciosos cada vez que se acerque
    const randomMessage = getRandomMessage();
    alert(randomMessage);
}

// Función para generar un mensaje aleatorio
function getRandomMessage() {
    const messages = [
        '¡Cuidado, tu tiempo se está agotando! ¡Presiona "Sí" para sobrevivir!',
        '¡Has presionado "No"! ¡Ahora, ¡a correr!',
        '¡Corre! La cuenta atrás ha comenzado... ¿Te atreves?',
        '¡Has jugado con fuego! ¿No tienes miedo?'
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Detecta cuando el puntero se acerca al botón "No acepto"
document.getElementById('noBtn').addEventListener('mousemove', function() {
    moveButton();
});