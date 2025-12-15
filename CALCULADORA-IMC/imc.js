// Captura o elemento onde o resultado será exibido. 
const resultado = document.getElementById('resultado');
// Captura o botão calcular.
function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const calcular = document.getElementById('calcular');
// Verifica se os campos não estão vazios.
    if (nome !== '' && altura !== '' && peso !== '') {
       // Calcula o IMC. 
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        // Classificação do IMC.
        let classificacao = "";
        // Estrutura condicional para definir a classificação do IMC.
        if (valorIMC < 18.5){
            classificacao = 'Abaixo do peso.'
        }else if (valorIMC < 25){
            classificacao = 'Com peso ideal. Parabéns!!!'
        }else if (valorIMC <30){
            classificacao = 'Levemente acima do peso.'
        }else if (valorIMC < 35){
            classificacao = ' Com obesidade grau I.'
        }else if (valorIMC < 40){
            classificacao = 'Com obesidade grau II'
        }else {
            classificacao = 'Obesidade grau III. Cuidado!!!'
        }
        // Exibe o resultado na tela.
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        //Tratamento para campos vazios.
    }else{
        resultado.textContent = 'Preencha todos os campos!!!'

    }

}
// Adiciona o evento de clique ao botão calcular.
calcular.addEventListener('click', imc)