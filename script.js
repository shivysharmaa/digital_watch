const hourEl = document.getElementById("hours")
const minEl = document.getElementById("minutes")
const secEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let amp = "AM"
    h = h<10?"0"+h:h
    m = m<10?"0"+m:m
    s = s<10?"0"+s:s
    if( h  >12){
        h = h - 12
        amp = "PM"
    }
    hourEl.innerText = h
    minEl.innerText = m
    secEl.innerText=s
    ampmEl.innerText=amp
    setTimeout(()=>{
        updateClock()
    }, 1000)
}
updateClock();
