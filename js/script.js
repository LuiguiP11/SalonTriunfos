document.addEventListener('DOMContentLoaded', () => {
    const fireworksContainer = document.getElementById('fireworks-canvas');
    if (fireworksContainer) {
        const fireworks = new Fireworks.default(fireworksContainer, {
            rocketsPoint: {
                min: 50,
                max: 50
            },
            hue: {
                min: 0,
                max: 360
            },
            delay: {
                min: 0.015,
                max: 0.03
            },
            speed: 2,
            acceleration: 1.05,
            friction: 0.97,
            gravity: 1.5,
            particles: 90,
            flickering: 50,
            trail: 3,
            trace: 3,
            explosion: 6,
            autoresize: true,
            brightness: {
                min: 50,
                max: 80,
                decay: {
                    min: 0.015,
                    max: 0.03
                }
            },
            sound: {
                enabled: true,
                files: [
                    'https://fireworks.js.org/sounds/explosion0.mp3',
                    'https://fireworks.js.org/sounds/explosion1.mp3',
                    'https://fireworks.js.org/sounds/explosion2.mp3'
                ],
                volume: {
                    min: 4,
                    max: 8
                }
            },
            mouse: {
                click: true,
                move: false,
                max: 1
            }
        });
        fireworks.start();
    }

    // Efecto de Brillo Interactivo para las Placas
    const plaques = document.querySelectorAll('.plaque');

    plaques.forEach(plaque => {
        plaque.addEventListener('mousemove', (e) => {
            const shine = plaque.querySelector('.plaque-shine');
            if (shine) {
                const rect = plaque.getBoundingClientRect();
                const x = e.clientX - rect.left; // Posición X dentro del elemento.
                const y = e.clientY - rect.top;  // Posición Y dentro del elemento.

                shine.style.setProperty('--mouse-x', `${x}px`);
                shine.style.setProperty('--mouse-y', `${y}px`);
            }
        });
    });
});