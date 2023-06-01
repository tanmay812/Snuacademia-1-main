const toggle = document.getElementById('toggleDark')
const body = document.querySelector('body')
const img = document.getElementById('image')
const logo = document.getElementById('logo')
const options = document.getElementById('options')
const he = document.querySelector('.he')
const hea = document.querySelector('.hea')
const head = document.querySelector('.head')
const heade = document.querySelector('.heade')
toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {

        body.style.background = 'white';
        body.style.color = 'black';
        //body.style.transition = '2s';

        img.src = "reasources/light-bat.jpg"
        img.style.width = "50%"
        logo.src = 'reasources/6.png'
        he.addEventListener('mouseenter', () => he.style.borderBottom = '2px solid black');
        he.addEventListener('mouseleave', () => he.style.borderBottom = '2px solid white');
        hea.addEventListener('mouseenter', () => hea.style.borderBottom = '2px solid black');
        hea.addEventListener('mouseleave', () => hea.style.borderBottom = '2px solid white');
        head.addEventListener('mouseenter', () => head.style.borderBottom = '2px solid black');
        head.addEventListener('mouseleave', () => head.style.borderBottom = '2px solid white');
        heade.addEventListener('mouseenter', () => heade.style.borderBottom = '2px solid black');
        heade.addEventListener('mouseleave', () => heade.style.borderBottom = '2px solid white');

    }
    else {
        body.style.background = 'black';
        body.style.color = 'white';
        //body.style.transition = '2s';
        img.src = "reasources/dark.jpg"
        logo.src = 'reasources/5.png'
        

    }
});
