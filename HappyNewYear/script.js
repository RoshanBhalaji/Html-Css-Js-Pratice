

document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    function refresh() {
        const currentYear = new Date().getFullYear();
        const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);
        const currentTime = new Date();
        const timeLeft = newYear - currentTime;

        const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const h = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const m = Math.floor((timeLeft / 1000 / 60) % 60);
        const s = Math.floor((timeLeft / 1000) % 60);

        days.innerHTML = d<10 ?"0"+d:d;
        hours.innerHTML = h<10 ?"0"+h:h;
        minutes.innerHTML = m<10 ?"0"+m:m;
        seconds.innerHTML = s<10 ?"0"+s:s;
    }

    setInterval(refresh, 1000);
});
