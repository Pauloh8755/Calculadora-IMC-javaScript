const nome = document.getElementById("txtNome")
const altura = document.getElementById("numAltura")
const peso = document.getElementById("numPeso")
const resultado = document.getElementById("resultado")




function calcularImc(){
    var imc = parseFloat(peso.value) / parseFloat(altura.value) ** 2
    
    if(imc < 18.4){
        resultado.textContent = nome.value + " IMC: " + imc + " Abaixo do peso"  
    }
    else if(imc >= 18.5 && imc <= 24.9){
        resultado.textContent = nome.value + " IMC: " + imc + " Peso normal, parabéns!!"
    }
    else if(imc >= 25 && imc <= 29.9){
        resultado.textContent = nome.value + " IMC: " + imc + " Acima do peso"
    }
    else if(imc >= 30 && imc <= 34.9){
        resultado.textContent = nome.value + " IMC: " + imc + " Obesidade I"
    }
    else if(imc >= 35 && imc <= 39.9){
        resultado.textContent = nome.value + " IMC: " + imc + " Obesidade II"
    }
    else if(imc >= 40){
        resultado.textContent = nome.value + " IMC: " + imc + " Obesidade III"
    }
    
}

calcular.addEventListener("click", calcularImc)



