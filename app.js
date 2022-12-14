let start = document.querySelector('.start'),
    stop = document.querySelector('.stop'),
    reset = document.querySelector('.reset'),
    hours = document.querySelector('.hours'),
    mins = document.querySelector('.min'),
    secs = document.querySelector('.sec'),
    hour = 0,
    min = 0,
    sec = 0;
let interval ;


start.addEventListener('click', ()=>{
    interval = setInterval( () =>{
        if(sec < 59){
            sec += 1;
            secs.innerHTML = sec < 10 ? '0' + sec :sec;
        }else{
            sec = 0;
            secs.innerHTML = sec < 10 ? '0' + sec:sec;
            if(min < 59){
                min += 1;
                mins.innerHTML = min < 10? '0' + min + ':' : min + ':' ;
            }
            else {
                hours += 1;
                hours.innerHTML = hours < 10? '0' + hours + ":" : hours + ':';
            }
        }
    } , 1000)
    start.style.pointerEvents = 'none';
})

stop.addEventListener('click', ()=>{
        clearInterval(interval);
        start.style.pointerEvents = 'visible';
})

reset.addEventListener('click', ()=>{
    location.reload();
})