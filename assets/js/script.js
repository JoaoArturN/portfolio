

let showTextShine = true;

let temporizador = setInterval(function(){
    if (showTextShine) {  // mostrar | piscando
        document.querySelector('.welcome-texts h2').innerHTML += '|';
        showTextShine = false;
    } else {
        document.querySelector('.welcome-texts h2').innerHTML = document.querySelector('.welcome-texts h2').innerHTML.slice(0, -1); // remove o caractere piscante
        showTextShine = true;
    }
}, 900);

/// scroll events
document.querySelector('.welcome-texts a').addEventListener('click' ,(event) => {
    event.preventDefault()
    window.scrollTo({
        top: document.querySelector('.about-me-section').offsetTop,
        behavior: 'smooth'
    });
})
document.querySelector('.home-buttons li:nth-child(2)').addEventListener('click' ,(event) => {
    event.preventDefault()
    window.scrollTo({
        top: document.querySelector('.about-me-section').offsetTop,
        behavior: 'smooth'
    });
})
document.querySelector('.home-buttons li:nth-child(3)').addEventListener('click' ,(event) => {
    event.preventDefault()
    window.scrollTo({
        top: document.querySelector('.section-projects').offsetTop,
        behavior: 'smooth'
    });
})
document.querySelector('.home-buttons li:nth-child(4)').addEventListener('click' ,(event) => {
    event.preventDefault()
    window.scrollTo({
        top: document.querySelector('.section-contact').offsetTop,
        behavior: 'smooth'
    });
})

document.querySelector('.mobile-nav .home-buttons li:nth-child(2)').addEventListener('click' ,(event) => {
    event.preventDefault()
    window.scrollTo({
        top: document.querySelector('.about-me-section').offsetTop,
        behavior: 'smooth'
    });
})
document.querySelector('.mobile-nav .home-buttons li:nth-child(3)').addEventListener('click' ,(event) => {
    event.preventDefault()
    window.scrollTo({
        top: document.querySelector('.section-projects').offsetTop,
        behavior: 'smooth'
    });
})
document.querySelector('.mobile-nav .home-buttons li:nth-child(4)').addEventListener('click' ,(event) => {
    event.preventDefault()
    window.scrollTo({
        top: document.querySelector('.section-contact').offsetTop,
        behavior: 'smooth'
    });
})

document.querySelector('.up').addEventListener('click' ,(event) => {
    event.preventDefault()
    window.scrollTo({
        top: document.querySelector('header').offsetTop,
        behavior: 'smooth'
    });
})
/// header scroll event
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
      document.querySelector('header').style = 'box-shadow: 0px 2px 4px 1px #ccc;'
    } else {
        document.querySelector('header').style = 'box-shadow: 0;'
    }
  });

let abriu = 0;

document.querySelector('.mobile-show').addEventListener('click', () =>{

    if(abriu === 1){
        document.querySelector('.mobile-nav .home-buttons').style = "display:none";
        document.querySelector('.mobile-nav').style = "opacity:0;";
        abriu = 0;
        return;
    } else{
        abriu = 1;
        document.querySelector('.mobile-nav .home-buttons').style = "display:flex";
        document.querySelector('.mobile-nav').style = "opacity:100;";
    }


})