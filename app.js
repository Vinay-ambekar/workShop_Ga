/* scrolling up starts*/
let sticky_Footer = document.getElementById("stick_Footer");
window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    if (scrolled > 300) {
        sticky_Footer.style.cssText='height:100px;opacity:1;transition:all 0.3s ease-in-out;';
    } else {
       sticky_Footer.style.cssText='height:0;opacity:0;transition:all 0.3s ease-in-out;';
    }
});
/* scrolling up end*/

/* timer starts */
let min = document.querySelectorAll('#minutes');
let sec = document.querySelectorAll('#seconds');
console.log(min, sec);
let startingMinutes = 15;
let time = startingMinutes * 60;
let intervalId = setInterval(updateCount, 1000);

function updateCount() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    for (let i = 0; i <= 1; i++) {
        min[i].textContent = `${minutes}`;
        sec[i].textContent = `${seconds}`;
    }
    if (time === 0) {
        clearInterval(intervalId); // Stop the timer when it reaches 0
    } else {
        time--;
    }
}

/* timer end */


