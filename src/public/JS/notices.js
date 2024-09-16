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
    

// public/js/comments.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('commentForm');
    const commentText = document.getElementById('commentText');
    const commentsSection = document.getElementById('commentsSection');

    // Función para mostrar comentarios
    const displayComments = async () => {
        const response = await fetch('/notices');
        const comments = await response.json();
        commentsSection.innerHTML = comments.map(comment => `<p>${comment.text}</p>`).join('');
    };

    // Mostrar comentarios al cargar la página
    displayComments();

    // Manejo del formulario
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const comment = commentText.value;

        await fetch('/notices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment })
        });

        commentText.value = '';
        displayComments();
    });
});