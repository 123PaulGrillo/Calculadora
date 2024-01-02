window.addEventListener('load', ()=> {
    // Sirve para leer el documento y comunicarse con HTML

    const display = document.querySelector('.header-container'); 
    // contenedor del display o donde mostrara el resultado

    const buttons = document.getElementsByClassName('cta-general');
    // el metodo .getElementsByClassName sirve para indicar que busque cierta clase en especifico
    // y dicha clase en la de cada boton o numero en la calculadora

    const buttonsArray = Array.from(buttons);

    buttonsArray.forEach( (button) => {

    // Por botones para que identifique que numero se esta presionando con el click
        button.addEventListener('click', ()=> {
            // console.log(button.innerHTML);
            calculadora(button, display); 
            // calculadora es una funcion que se hace
        })
    })
});
// Funcion que recibe 2 parametros y para cada caso realiza una accion
function calculadora(button, display) {
    switch(button.innerHTML) {
        case 'C':
        borrar(display);
        break;

        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button) {
    if(display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar (display) {
    display.innerHTML = 0;
}