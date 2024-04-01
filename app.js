
let sticky_Footer = document.getElementById("stick_Footer");
window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    if (scrolled > 300) {
        sticky_Footer.style.cssText='height:100px;opacity:1;transition:all 0.3s ease-in-out;';
       // console.log('helo')
    } else {
       sticky_Footer.style.cssText='height:0;opacity:0;transition:all 0.3s ease-in-out;';
       //console.log('hi')
    }
});

