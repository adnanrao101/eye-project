    const eyes = document.querySelectorAll('.eye');

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        eyes.forEach(eye => {
            const pupil = eye.querySelector('.pupil');
            const rect = eye.getBoundingClientRect();

            // Eye center point
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;

            // Angle calculation
            const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

            // Distance limit for pupil
            const maxX = 25;
            const maxY = 15;

            const moveX = Math.cos(angle) * maxX;
            const moveY = Math.sin(angle) * maxY;

            pupil.style.left = `${50 + moveX}px`;
            pupil.style.top = `${20 + moveY}px`;
        });
    });
