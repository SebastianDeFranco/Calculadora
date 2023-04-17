const botones = document.querySelectorAll('button')
const pantalla = document.querySelector('.pantalla')

let calculo = []
let acumulacion
let borrar = false

function Calcular(button){
    const value = button.textContent

    if (value === 'AC'){
        calculo = []
        pantalla.textContent = 0
    }
    else if (value === '=') {
        acumulacion = calculo.join('')
        pantalla.textContent = eval(acumulacion)
        calculo = [eval(acumulacion)]
        borrar = true
    } else {
        if (borrar) {
            calculo = []
            borrar = false
        }
        if (calculo.length > 0 && isNaN(value) && isNaN(calculo[calculo.length-1])) {
            calculo.pop()
        }
        calculo.push(value)
        acumulacion = calculo.join('')
        pantalla.textContent = acumulacion;
        if(acumulacion.length >= 12){
            pantalla.style.overflow = "hidden"
        }
        else{
            pantalla.style.overflow = 'visible'
        }
    }
}

botones.forEach(button => 
    button.addEventListener('click', () => Calcular(button))
);
