

let end = new Date('8/5/2021 10:01 AM');

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;

    export  function showRemaining() {
        let now = new Date();
        let distance = end - now;
        if (distance <= 0) {

            clearInterval(timer);
              document.getElementById('acabo').innerHTML =`<div class="conta is-active" >Feliz cumpleaños Fabian!!</div>`
              return
       }
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('DIAS').innerHTML = ` DIAS ${days}` 
        document.getElementById('HORAS').innerHTML =`HORAS ${hours}` 
        document.getElementById('MINUTOS').innerHTML = `MINUTOS ${minutes} `
        document.getElementById('SEGUNDOS').innerHTML = `SEGUNDOS ${seconds}`
    }

    timer = setInterval(showRemaining, 1000);



