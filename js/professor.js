function exibirResultado(){
    const resultado = document.getElementById("resultado")
    const nome = document.getElementById("txtNome").value
    const peso =  document.getElementById("numPeso").value.replace(",",".")
    const altura =  document.getElementById("numAltura").value.replace(",",".")
     
    if(validar()){
        const imc =  calcularIMC(peso, altura)
        const classificacao = classificar(imc)
        resultado.innerHTML = `${nome} seu IMC é ${imc} e você está ${classificacao}`
    }
    else{
        resultado.textContent = "Preencha os campos!"
    }
}
function validar(){
    //retornando validação html (true ou false)
    return document.querySelector("form").reportValidity()
}
function classificar(imc){
    let categoria
    if (imc < 18.5){
        categoria = "abaixo do peso"
    }
    else if(imc < 25){
        categoria = "com peso ideal. <span class='green'>Parabéns!</span>"
    }
    else if(imc <30){
        categoria = "levemente acima do peso"
    }
    else if(imc < 35){
        categoria = "com obesidade grau I"
    }
    else if(imc < 40){
        categoria = "com obesidade grau II"
    }
    else{
        categoria = "com obsedidade grau III. <span class='red'>Atenção!</span>"
    }
    return categoria
}
function calcularIMC(peso,altura){
    return (peso / altura ** 2).toFixed(1)
    
}
//criando function capturar enter, com o parametro evento para ser analizado
function capturarEnter(evento){
    if(evento.key === "Enter"){
        exibirResultado()
    }
}
//function validarForm(){
//    const nome = document.getElementById("txtNome").value
//    const peso =  document.getElementById("numPeso").value.replace(",",".")
//    const altura =  document.getElementById("numAltura").value.replace(",",".")
//    if( nome == "" || peso == "" || altura == ""){
//        resultado.textContent = "Preencha todos os campos"
//    }
//    else{
//        if(isNaN(altura) || isNaN(peso)){
//            resultado.textContent = "Preencha seu peso e altura com valores numéricos"
//        }
//        else{
//            return true
//        }
//    }
//}
//Eventos
document.getElementById("calcular").addEventListener("click", exibirResultado)
document.querySelector("form").addEventListener("keypress" , capturarEnter)
