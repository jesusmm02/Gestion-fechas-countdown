const body = document.getElementsByTagName('body')[0];
const contador = document.getElementById('contador');
const monthsElement = document.getElementById('meses');
const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');


let currentDate = new Date();
const goalDate = new Date("2024-05-31");
const secondsPerDay = 60 * 60 * 24;

let months, days, daysResobreMiing, hours, totalSeconds;

let countdownInterval = setInterval(countdown, 1000);
countdown();

// Función para actualizar el contador y el fondo de la página
function countdown() {

    totalSeconds = Math.floor((goalDate.getTime() - currentDate.getTime()) / 1000);

    days = Math.floor(totalSeconds / secondsPerDay);
    // Calcula los días restantes dentro del mes actual
    daysResobreMiing = days % 30;

    months = Math.floor(days / 30);
    // Calcula el número de horas restantes en el día actual
    hours = Math.floor(totalSeconds / 3600) % 24;

    if (Math.ceil(totalSeconds) <= 0) {
        clearInterval(countdownInterval);

        monthsElement.innerHTML = 0;
        daysElement.innerHTML = 0;
        hoursElement.innerHTML = 0;
    } else {
        monthsElement.innerHTML = months;
        daysElement.innerHTML = daysResobreMiing;
        hoursElement.innerHTML = hours;
    }

    
    body.className = "mostrarVerde";
    if (months <= 1) {
        body.className = "mostrarAmarillo";
    }
    if (days <= 7) {
        body.className = "mostrarRojo";
    }
};