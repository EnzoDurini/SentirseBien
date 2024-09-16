document.addEventListener('DOMContentLoaded', () => {
    // Función para obtener los datos del router
    async function fetchData() {
        try {
            const response = await fetch('/turnosCargados1'); // Llamada al router
            const data = await response.json();

            const listElement = document.getElementById('data-list');
            listElement.innerHTML = ''; // Limpiar la lista

            // Añadir los datos a la lista
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                listElement.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }

    // Llamar a la función para obtener y mostrar los datos
    fetchData();
});