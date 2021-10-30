// import Display from "./Display.js";

// const d = document;
// const previousValueDisplay = d.querySelector('.before-value');
// const actualValueDisplay = d.querySelector('.actual-value');
// const numberButtons = d.querySelectorAll('.number');
// const operatorsButtons = d.querySelectorAll('.operator');
// const user = d.querySelector('.user');
// const paragraph = d.getElementById('name-user');

// const display = new Display(previousValueDisplay, actualValueDisplay)

// // user.addEventListener('click', (e) => {
// //   if (e.target && e.target.tagName === 'IMG') {
// //     let name = prompt('Give me your name bitch');
// //     paragraph.innerHTML = `Hello, ${name}`
// //   }
  
// // })

// numberButtons.forEach(button => {
  
//   button.addEventListener('click', (e) => {
//     console.log(button.innerHTML);
//     display.addNumber(button.innerHTML);
//   });
// })


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