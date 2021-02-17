let css = document.querySelector('h3');
let color_alpha = document.querySelector('.color_alpha');
let color_beta = document.querySelector('.color_beta');
let body = document.querySelector('body');


function background_changer() {
    body.style.background = `linear-gradient(to right, ${color_alpha.value}, ${color_beta.value})`;

    css.textContent = `${body.style.background} ;`
}



color_alpha.addEventListener('input', background_changer);

color_beta.addEventListener('input', background_changer);
