class Calculadora {
  sumar(num1, num2) {
    return num1 + num2;
  }

  restar(num1, num2) {
    return num1 - num2;
  }

  dividir(num1, num2) {
    if(num2 === 0){
        alert('No puedes dividir entre 0, cambia el número!');
    }else{
        return num1 / num2;
    }
  }

  multiplicar(num1, num2) {
    return num1 * num2;
  }
} 