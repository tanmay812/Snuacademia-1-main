const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const img =document.getElementById('image')
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        //body.style.transition = '2s';
        img.src = "reasources/light-mac.jpeg"
        img.style.width = "50%"
    }else{
        body.style.background = 'rgba(15,16,18,255)';
        body.style.color = 'white';
        //body.style.transition = '2s';
        img.src = "reasources/dark-mac.jpeg"
    }
});