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
let min=document.querySelectorAll('#minutes')
let sec=document.querySelectorAll('#seconds')
console.log(min,sec)
let StartingMinuts=15;
let time=StartingMinuts*60;
setInterval(updateCount,1000)
function updateCount(){
 let minuts=Math.floor(time/60);
 let seconds=time%60
 for(let i=0;i<=1;i++){
    min[i].textContent=`${minuts}`
    sec[i].textContent=`${seconds}`
 }
 time--
}
/* timer end */


