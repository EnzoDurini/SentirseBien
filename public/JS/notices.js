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

document.getElementById('comentarioForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const text = document.getElementById('comentarioTexto').value;

    try{
        const response = await fetch('/notices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text})
    });
    const data = await response.json();
    if(data.success){
        window.location.href = '/notices'
    } else{
        alert(data.message)
    }
}catch(e){
    console.error(e)
    alert('Hubo problemas al intentar cargar su comentario');
}
});
