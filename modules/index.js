const d = document;
const user = d.querySelector('.user');
const paragraph = d.getElementById('name-user');

user.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'IMG') {
        let name = prompt('Give me your name!');
        let lastName = prompt('Give me your last name!');
        paragraph.innerHTML = ` ${name} ${lastName}!`
    }
})

const displayValorAnterior = document.getElementById('before-value');
const displayValorActual = document.getElementById('actual-value');
const botonesNumeros = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operator');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});