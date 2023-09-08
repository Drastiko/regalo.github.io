// Arreglos de emojis para corazones y flores
const heartEmojis = ["❤️", "💖", "💕", "💓", "💗", "💘", "💝", "💞"];
const flowerEmojis = ["🌸", "💐", "🌹", "🌻", "🌼", "🌺", "🌷", "💮", "🏵️", "🌱", "🌺", "🌿", "🌷💖", "🌼🌿", "🌹💘"];

// Función para crear un elemento de corazón
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    const randomEmoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.innerText = randomEmoji;
    document.body.appendChild(heart);

    // Establecer posición y animación aleatorias
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 2 + 3;
    const speed = Math.random() * 2 + 1;

    heart.style.left = `${startX}px`;
    heart.style.animation = `float ${duration}s linear`;

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Función para crear un elemento de flor
function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    const randomEmoji = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    flower.innerText = randomEmoji;
    document.body.appendChild(flower);

    // Establecer posición y animación aleatorias
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 2 + 3;
    const speed = Math.random() * 2 + 1;

    flower.style.left = `${startX}px`;
    flower.style.animation = `float ${duration}s linear`;

    // Eliminar la flor después de la animación
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

// Agregar escuchador de clic al botón
document.querySelector(".press-button").addEventListener("click", () => {
    // Crear corazones y flores
    for (let i = 0; i < 10; i++) {
        createHeart();
        createFlower();
    }
});
