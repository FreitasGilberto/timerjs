let inputs, clock, alarm, hours, minutes, seconds, repeater; /* Declaro todas las variables que necesito */

window.addEventListener('load', () => { /* Espero a que cargue el documento */
    inputs = Array.from(document.getElementsByClassName('number')); /* Busco los inputs */
    clock = document.querySelector('.clock'); /* Busco el reloj */
    alarm = new Audio('sound/alarm.mp3'); /* Genero la alarma */
});

/* Funcion principal */
function startTimer() { 
    parseTime(); /* Busco y transformo los valores del input a numeros */
    setTimer();  /* Seteo el timer visualmente */
    countdown()  /* Arranco el contador */
}

/* Funcion para cambiar el timer en la pantalla y en la pestaña */
function setTimer() {
    /* Cambio la hora en pantalla */
    clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)}</p><span>hs</span><p class="number">${minutes > 9 ? minutes : ('0' + minutes)}</p><span>min</span><p class="number">${seconds > 9 ? seconds : ('0' + seconds)}</p><span>sec</span>`;

    /* Cambio la hora en la pestaña */
    document.title = `${hours > 9 ? hours : ('0' + hours)}:${minutes > 9 ? minutes : ('0' + minutes)}:${seconds > 9 ? seconds : ('0' + seconds)}`;
}

/* Funcion para convertir el string del input a numeros */
function parseTime() {

    hours = Number(inputs[0].value);
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);

}

/* Funcion que arranca el contador */
function countdown() {
    repeater = setInterval(runner,1000);
}

/* Funcion que cuenta */
function runner() {
    /* Si tengo más de 0 segundos, restá segundos */
    /* Si tengo 0 segundos pero tengo más de 0 minutos, poné segundos en 59 y restale 1 a minutos */
    /* Si tengo 0 segundos, 0 minutos pero tengo más de 0 horas, poné segundos en 59, minutos en 59 y restale 1 a horas */
    /* Sino arranca la alarma */
    
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            if (hours > 0 ) {
                seconds = 59;
                minutes = 59;
                hours--;
            } else {
                alarm.play();
            }
        }
    }
    
    setTimer();
}

/* Funcion para detener el timer */
function stopTimer(){
    clearInterval(repeater);
    location.reload();
}