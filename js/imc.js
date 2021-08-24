
const resultado = document.getElementById("resultado")


function calcularImc(){
    const nome = document.getElementById("txtNome").value
    const altura = document.getElementById("numAltura").value
    const peso = document.getElementById("numPeso").value
    
    var imc = (peso / altura**).toFixed(1)
        
    
    if( nome == "" || peso == "" || altura == ""){
        resultado.textContent = "Preencha todos os campos"
    }
    else{
        if(isNaN(altura) || isNaN(peso)){
            resultado.textContent = "Preencha seu peso e altura com valores numéricos"
        }
        else{
            if(imc < 18.4){
                resultado.textContent = nome + " seu IMC é " + imc + " e você esta ebaixo do peso"  
            }
            else if(imc >= 18.5 && imc <= 24.9){
                resultado.textContent = nome + " seu IMC é " + imc + " e você esta com peso normal, parabéns!!"
            }
            else if(imc >= 25 && imc <= 29.9){
                resultado.textContent = nome+ " seu IMC é " + imc + " e você esta Acima do peso"
            }
            else if(imc >= 30 && imc <= 34.9){
                resultado.textContent = nome+ " seu IMC é " + imc + " e você esta com Obesidade I"
            }
            else if(imc >= 35 && imc <= 39.9){
                resultado.textContent = nome + " seu IMC é " + imc + " e você esta com Obesidade II"
            }
            else if(imc >= 40){
                resultado.textContent = nome+ " seu IMC é " + imc + " e você esta com Obesidade III"
            }
        }
    }
}

calcular.addEventListener("click", calcularImc)



