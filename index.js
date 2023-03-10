const btnCalcular = document.querySelector("#btn");

function calcularIMC() {
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value/100;
    const result = document.querySelector("#result");

    if(altura !== "" && peso !== ""){
        let imc = (peso / (altura * altura)).toFixed(2);
        let mensagem = "";

        if(imc < 18.5){
            mensagem = "Abaixo do peso!"
        }else if(imc < 25){
            mensagem = "Você está com o peso ideal!";
        } else if(imc < 30) {
            mensagem = "Você está levemente acima do peso!";
        } else if (imc < 35) {
            mensagem = "CUIDADO, obesidade grau I";
        } else if (imc < 40) {
            mensagem = "CUIDADO, obesidade grau II";
        } else {
            mensagem = "CUIDADO!!!, obesidade grau III, procure imediatamente um médico"
        }
        result.textContent = `Seu IMC é ${imc}! ${mensagem}`;
    } else {
        result.textContent = "Por favor preencha todos os campos";
    }
    
}
btnCalcular.addEventListener('click', calcularIMC);