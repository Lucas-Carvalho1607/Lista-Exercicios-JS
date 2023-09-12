function exercicio1 () {

alert ("Soma");

var num1 = prompt ("Digite o primeiro Número");
var num2 = prompt ("Digite o segundo Número");

var resultado = parseInt(num1) + parseInt(num2);

alert ( "O resultado da soma é: " + resultado);
}

function exercicio2 (){

alert ("Identificação");

var nome = prompt("Qual o seu nome");
var sobrenome = prompt("Qual seu sobrenome");

alert (`Seja bem vindo, ${nome} ${sobrenome}!`);
}


function exercicio3 () {

alert ("Conversão para Dólar");


var reais = prompt ("Digite o valor em Reais");
dolar = reais / 4.95;

alert (`Com R$ ${reais}, você terá:  $${dolar}`);


}

function exercicio4 (){

alert ("Antecessor e Sucessor");

num = prompt ("Digite um número inteiro!");
var antecessor = num - 1;
var sucessor = parseInt(num) + 1;

alert (`Seu numero digitado é: ${num} \nSeu antecessor é: ${antecessor}\nSeu sucessor é: ${sucessor}`);


}

function exercicio5 () {
   alert("Terreno")

   var valorM2 = parseFloat(prompt("Digite o valor por metro² do terreno."));
   var area = parseFloat(prompt("Digite o tamanho do terreno em M²."));
   let resultado = parseFloat(valorM2 * area);

   while (valorM2 == 0 | area == 0) {
      alert("O valor tem que ser diferente de zero!");
      
   var valorM2 = parseFloat(prompt("Digite o valor por metro² do terreno."));
   var area = parseFloat(prompt("Digite o tamanho do terreno em M²."));
}
   resultado = parseFloat(valorM2 * area);
   alert(`O valor do seu terreno é: ${resultado}`);
   

}

function exercicio6 () {



alert ("Cálculo de combustivel");
   kms = prompt ("Quantos kms foram percorridos pelo seu carro?");

   litros = prompt ("E quantos litros de combustivel foram gastos?");

   var resultado = litros / kms;

   if (kms || litros == 0) {
      alert("Carro novo zero km/s");
   }else {
   alert (`Seu carro consome em média ${resultado} litros por Km/s`);
   }
}
   



    
   function exercicio7 () {
      alert ("Calculadora");
      
      let numero1 = parseFloat(prompt("Digite um número"));
      let numero2 = parseFloat(prompt("Digite outro número"));
      let opcao = prompt("Escolha a operação: \n1.Soma + \n2.Subtração - \n3.Divisão  / \n4.Multiplicação * ");
      let resultado;
      
        
         switch (opcao) {
            case "1":
               resultado = numero1 + numero2;
               alert(`Resultado da soma é ${resultado}`)
               break;
         
               case "2":
                resultado  = numero1 - numero2;
                  alert(`Resultado da subtração é ${resultado}`)
                  break;
   
                  case "3":
                     resultado = numero1 / numero2;
                     alert(`Resultado da divisão é ${resultado}`)
                     break;
                     
                     case "4":
                        resultado = numero1 * numero2;
                        alert(`Resultado da divisão é ${resultado}`)
                        break;
         
                        default:
                           alert("Essa opção não existe");
         }
      }
   


exercicio7()

