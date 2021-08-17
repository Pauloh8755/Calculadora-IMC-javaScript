const nome = document.getElementById("txtNome")
const altura = document.getElementById("numAltura")
const peso = document.getElementById("numPeso")
const resultado = document.getElementById("resultado")




function calcularImc(){
    if(nome != "" || altura != "" || peso!=""){
        resultado.textContent = "Preencha todos os campos!!!"
    }
    else{
        var imc = (peso.value / altura.value**2).toFixed(1)
        
        if(imc < 18.4){
            resultado.textContent = nome.value + " seu IMC é " + imc + " e você esta ebaixo do peso"  
        }
        else if(imc >= 18.5 && imc <= 24.9){
            resultado.textContent = nome.value + " seu IMC é " + imc + " e você esta com peso normal, parabéns!!"
        }
        else if(imc >= 25 && imc <= 29.9){
            resultado.textContent = nome.value + " seu IMC é " + imc + " e você esta Acima do peso"
        }
        else if(imc >= 30 && imc <= 34.9){
            resultado.textContent = nome.value + " seu IMC é " + imc + " e você esta com Obesidade I"
        }
        else if(imc >= 35 && imc <= 39.9){
            resultado.textContent = nome.value + " seu IMC é " + imc + " e você esta com Obesidade II"
        }
        else if(imc >= 40){
            resultado.textContent = nome.value + " seu IMC é " + imc + " e você esta com Obesidade III"
        }
    }
}

calcular.addEventListener("click", calcularImc)



