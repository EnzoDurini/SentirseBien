const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

let currentDate = new Date();
const today = new Date();

const maxMonthsBack = -3; // 3 meses atrás
const maxMonthsForward = 3; // 3 meses adelante

// Turnos cargados (ejemplo de datos)
const turnos = {
    '2024-09-12': ['Turno 1: 10:00 AM', 'Turno 2: 12:00 PM', 'Dr Enzo, Pac Pulpo'],
    '2024-09-15': ['Turno 1: 11:00 AM', 'Turno 2: 02:00 PM'],
    '2024-10-05': ['Turno 1: 09:00 AM', 'Turno 2: 01:00 PM'],
    // Añadir más turnos según se necesiten
};

function renderCalendar(date) {
    const month = date.getMonth();
    const year = date.getFullYear();

    // Mostrar mes y año
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    monthYear.textContent = `${monthNames[month]} ${year}`;

    // Obtener el primer y último día del mes
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Vaciar el cuerpo del calendario
    calendarBody.innerHTML = '';

    
    let row = document.createElement('tr');
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement('td'))
    }

    for (let day = 1; day <= lastDate; day++) {
        const cell = document.createElement('td');
        cell.textContent = day;

        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        if (turnos[dateKey]) {
            const turnosList = document.createElement('div');
            turnosList.classList.add('turnos');
            turnos[dateKey].forEach(turno => {
                const turnoElement = document.createElement('div');
                turnoElement.textContent = turno;
                turnosList.appendChild(turnoElement);
            });
            cell.appendChild(turnosList);
        }

        row.appendChild(cell);
        if ((firstDay + day) % 7 === 0) {
            calendarBody.appendChild(row);
            row = document.createElement('tr');
        }
    }

    if (row.children.length > 0) {
        calendarBody.appendChild(row); 
    }

    const monthDiff = (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth() - today.getMonth());
    prevMonthButton.disabled = monthDiff <= maxMonthsBack;
    nextMonthButton.disabled = monthDiff >= maxMonthsForward;
}

function changeMonth(delta) {
    currentDate.setMonth(currentDate.getMonth() + delta);
    renderCalendar(currentDate);
}

renderCalendar(currentDate);

prevMonthButton.addEventListener('click', () => changeMonth(-1));
nextMonthButton.addEventListener('click', () => changeMonth(1));
