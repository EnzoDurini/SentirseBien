/* Script del Carrete de Imágenes */
    
        let currentIndex = 0;

        function moveCarousel(direction) {
            const carousel = document.getElementById('carousel');
            const totalImages = carousel.children.length;

            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = totalImages - 1;
            } else if (currentIndex >= totalImages) {
                currentIndex = 0;
            }

            const offset = -currentIndex * 100;
            carousel.style.transform = `translateX(${offset}%)`;
        }
    