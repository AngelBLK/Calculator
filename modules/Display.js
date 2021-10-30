
// import Calculator from "./Calculator.js";

// class Display {
//   constructor(previousValueDisplay, actualValueDisplay) {
//     this.previousValueDisplay = previousValueDisplay;
//     this.actualValueDisplay = actualValueDisplay;
//     this.calculator = new Calculator;
//     this.operationType = undefined;
//     this.actualValue = '';
//     this.previousValue = '';
//     this.signs = {
//       add: '+',
//       sub: '-',
//       mult: 'x',
//       divide: '÷'
//     }
//   }

//   delete() {
//     this.actualValue = this.actualValue.toString().slice(0, -1);
//     this.printValues();
//   }

//   deleteAll() {
//     this.actualValue = '';
//     this.previousValue = '';
//     this.operationType = undefined;
//     this.printValues();
//   }

//   compute(type) {
//     this.operationType !== 'equal' && this.calcate();
//     this.operationType = type;
//     this.previousValue = this.actualValue || this.previousValue;
//     this.actualValue = '';
//     this.printValues();
//   }

//   addNumber(number) {
//     if (number === '.' && this.actualValue.includes('.')) return this.actualValue = this.actualValue.toString() + number.toString();
//     this.printValues();
//   }

//   printValues() {
//     this.actualValueDisplay.textContent = this.actualValue;
//     this.previousValueDisplay.textContent = `${this.previousValue} ${this.signs[this.operationType] || ''}`;
//   }

//   calculate() {
//     const pValue = parseFloat(this.previousValue);
//     const aValue = parseFloat(this.actualValue);

//     if (isNaN(aValue) || isNaN(pValue)) return this.aValue = this.calculator[this.operationType](pValue, aValue);
//   }
// }

// export default Display;

class Display {
  constructor(displayValorAnterior, displayValorActual) {
      this.displayValorActual = displayValorActual;
      this.displayValorAnterior = displayValorAnterior;
      this.calculador = new Calculadora();
      this.tipoOperacion = undefined;
      this.valorActual = '';
      this.valorAnterior = '';
      this.signos = {
          sumar: '+',
          dividir: '%',
          multiplicar: 'x',
          restar: '-', 
      }
  }

  borrar() {
      this.valorActual = this.valorActual.toString().slice(0,-1);
      this.imprimirValores();
  }

  borrarTodo() {
      this.valorActual = '';
      this.valorAnterior = '';
      this.tipoOperacion = undefined;
      this.imprimirValores();
  }

  computar(tipo) {
      this.tipoOperacion !== 'igual' && this.calcular();
      this.tipoOperacion = tipo;
      this.valorAnterior = this.valorActual || this.valorAnterior;
      this.valorActual = '';
      this.imprimirValores();
  }

  agregarNumero(numero) {
      if(numero === '.' && this.valorActual.includes('.')) return
      this.valorActual = this.valorActual.toString() + numero.toString();
      this.imprimirValores();
  }

  imprimirValores() {
      this.displayValorActual.textContent = this.valorActual;
      this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
  }

  calcular() {
      const valorAnterior = parseFloat(this.valorAnterior);
      const valorActual = parseFloat(this.valorActual);

      if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
      this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
  }
}