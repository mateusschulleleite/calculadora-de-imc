var botaoCalcular = document.querySelector(".imc__calcular");
var peso;
var altura;
var IMC;
var resultadoIMC = document.querySelector(".resultado__imc");
var abaixo = document.querySelector(".abaixo");
var normal = document.querySelector(".normal");
var sobrepeso = document.querySelector(".sobrepeso");
var obesidadeI = document.querySelector(".obesidade-I");
var obesidadeII = document.querySelector(".obesidade-II");
var obesidadeIII = document.querySelector(".obesidade-III");


function calculaIMC() {
    peso = document.querySelector(".imc__peso").value;
    altura = document.querySelector(".imc__altura").value;
    IMC = peso / (altura * 2);
    resultadoIMC.innerHTML = "Seu IMC é de: " + IMC;
    abaixo.style.cssText = 'background-color: #f5f5f5;'
    normal.style.cssText = 'background-color: #f5f5f5;'
    sobrepeso.style.cssText = 'background-color: #f5f5f5;'
    obesidadeI.style.cssText = 'background-color: #f5f5f5;'
    obesidadeII.style.cssText = 'background-color: #f5f5f5;'
    obesidadeIII.style.cssText = 'background-color: #f5f5f5;'

    if (IMC < 18.5) {
        abaixo.style.cssText = 'background-color: yellow;'
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        normal.style.cssText = 'background-color: yellow;'
    } else if (IMC >= 25.0 && IMC <= 29.9) {
        sobrepeso.style.cssText = 'background-color: yellow;'
    } else if (IMC >= 30.0 && IMC <= 34.9) {
        obesidadeI.style.cssText = 'background-color: yellow;'
    } else if (IMC >= 35.0 && IMC <= 39.9) {
        obesidadeII.style.cssText = 'background-color: yellow;'
    } else if (IMC >= 40) {
        obesidadeIII.style.cssText = 'background-color: yellow;'
    };
}

botaoCalcular.onclick = calculaIMC;