import {validation} from "./components/validaciones.js";
import putPattern from "./components/pattern.js";
import autoResize from "./components/resize.js";
import animateBars from "./components/animateBars.js";
import maxlength from "./components/maxlength.js";

const inputs = document.querySelectorAll(".form__input");

/*Validaciones*/
inputs.forEach((input) =>{
    input.addEventListener("blur", (input) =>{
        validation(input.target);
    });

    /*Validacion submit*/
    const form = document.querySelector('.contacto__form');
    const submitBtn = form.querySelector('[type="submit"]');

    submitBtn.disabled = true;

    form.addEventListener('input', function () {
    submitBtn.disabled = !form.checkValidity();

    console.log(submitBtn.disabled);
})
});


/*Agregar atributos de forma dinamica*/
inputs.forEach((input) =>{
    input.addEventListener("focus", (input) =>{
        putPattern(input.target);
    });
});

inputs.forEach((input) =>{
    input.addEventListener("focus", (input) =>{
        maxlength(input.target);
    });
});

/*textarea resize*/
const textarea = document.querySelector(".form__input--mensaje");
textarea.addEventListener("input", autoResize, false);

/*Animaciones*/
document.querySelector(".bars-menu").addEventListener("click", animateBars);

inputs.forEach(input => {
    input.addEventListener('blur', (event) => {
    if (event.target.value.length) {
        event.target.classList.add("full");
    } else {
        event.target.classList.remove("full");
    }
});
})