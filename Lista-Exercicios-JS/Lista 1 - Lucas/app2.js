function exercicio1() {
    let numero = prompt("Digite um número inteiro");
        if ((numero % 2) == 0) {
            alert("O número digitado é par")
        }else {
            alert("O número digitado é ímpar!")
        }
}

function exercicio2() {
    let numero1 = parseFloat(prompt("Digite um número!"));
    let numero2 = parseFloat(prompt("Digite segundo número"));
        if (numero1 > numero2) {
            alert(`O número ${numero1} é maior que ${numero2}`)

        }else if (numero2 > numero1){
            alert(`O número ${numero2} é maior que ${numero1}`)
        }else {
            alert("Os números são iguais!");
        }
        
        }
 function exercicio3() {
    let pergunta1 = parseFloat(prompt("Quantos anos vc tem? "));
    let pergunta2 = prompt("Você é deficiente?")
    pergunta2 = pergunta2.toLowerCase();
    let pergunta3 = prompt("Você é gestante?")
    pergunta3 = pergunta3.toLowerCase();
    
    if ((pergunta1 > 65) | (pergunta2 == "sim") | (pergunta3 == "sim")) {
        alert("Você irá para fila preferencial!");
    }else {
        alert("Você irá para fila normal");
    }
}
function exercicio4() {
    let idade = parseInt(prompt("Digite sua idade!"))

    if (idade < 16) {
        alert("Você é menor não poderá entrar");

    }else if ((idade >= 16) && (idade < 18)) {
        alert("Você só irá poder entrar acompanhado de um responsável maior");
    
    }else {
        alert("Você é maior de idade, pode entrar!");
    }
}
    function exercicio5() {
        let login = "Lucas";
        let senha = "12345";

        let loginDigitado = prompt("Digite seu login");
        loginDigitado = loginDigitado.toLowerCase();

        let senhaDigitada = prompt("Digite sua senha");

        if ((loginDigitado != login) && (senhaDigitada != senha)){
            alert("Login e senha estão errados");

        }else if (loginDigitado != login){
            alert("Login digitado está errado!");

        }else if (senhaDigitada != senha){
            alert("Senha digitada está errada!");
        } else if ((loginDigitado == login) && (senhaDigitada == senha)){
            alert(`Seja bem vindo, ${loginDigitado}`);
}
    }

            function exercicio6() {

                let resp1 = prompt("Quem é melhor Vasco ou Flamengo?");
                resp1 = resp1.toLowerCase();
                let resp3 = prompt("Qual meu nome?");
                resp3 = resp3.toLowerCase();
                let resp2 = parseInt(prompt("Quantos anos eu tenho?"));
                
                if ((resp1 == "vasco") && (resp2 == "26") && (resp3 == "lucas")) {
                    alert("Você ganhou o jogo, Parabéns!")

                }else {
                    alert("Você perdeu o jogo, tente novamente");
                }
            
            }
 exercicio6()

