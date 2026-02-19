let hr = 0, min = 0, sec = 0, ms = 0;
let timer;
function updateDisplay() {
 document.getElementById("hr").textContent = hr.toString().padStart(2, "0");
 document.getElementById("min").textContent = min.toString().padStart(2, "0");
 document.getElementById("sec").textContent = sec.toString().padStart(2, "0");
 document.getElementById("ms").textContent = ms.toString().padStart(2, "0");
}
function startTimer() {
 if (!timer) {
   timer = setInterval(() => {
     ms++;
     if (ms === 100) { ms = 0; sec++; }
     if (sec === 60) { sec = 0; min++; }
     if (min === 60) { min = 0; hr++; }
     updateDisplay();
   }, 10);
 }
}
function stopTimer() {
 clearInterval(timer);
 timer = null;
}
function resetTimer() {
 stopTimer();
 hr = min = sec = ms = 0;
 updateDisplay();
}
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
updateDisplay();