function calculaIMC() {
  var peso = document.getElementById('inputPeso').value;
  var altura = document.getElementById('inputAltura').value;
  var alturaM = altura / 100;
  var imc = peso / alturaM ** 2;
  document.getElementById('indiceIMC').innerHTML =
    'Su índice es:  ' + imc.toFixed(2);
  document.getElementById('classificacaoIMC').innerHTML =
    'Este índice ésta clasificado como: ' + '<strong>' + classificacao(imc);
}

function classificacao(imc) {
  if (imc <= 18.5) {
    return 'PESO INSUFICIENTE';
  }
  if (imc > 18.5 && imc <= 24.9) {
    return 'PESO NORMAL';
  }
  if (imc > 25 && imc <= 29.9) {
    return 'SOBREPESO';
  }
  if (imc > 30 && imc <= 34.9) {
    return 'OBESIDAD GRADO 1';
  }
  if (imc > 35 && imc <= 39.9) {
    return 'OBESIDAD GRADO 2';
  }
  if (imc > 40) {
    return 'OBESIDAD GRADO 3';
  }
}
