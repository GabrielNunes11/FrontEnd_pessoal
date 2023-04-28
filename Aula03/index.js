console.log("Hello world!");

let nome = "João Felipe";
const PI = 3.14;
let isRunning = false;
const PESSOA = {
  nome: "João Felipe",
  idade: 32,
  profissao: "Professor",
};
let cores = ["amarelo", "azul", "verde", 1, false, [1, 2, true, {}]];

// console.log(typeof nome);
// console.log(typeof PI);
// console.log(typeof isRunning);
// console.log(typeof PESSOA);
// console.log(typeof cores);
// console.log("Nome:", PESSOA.nome);

// let frase = `Meu nome é ${PESSOA.nome}. Eu tenho ${PESSOA.idade}. e sou ${PESSOA.profissao}`;

// console.log(frase);

// const pessoa = {
//   nome: "João",
//   idade: 32,
// };

// if (pessoa.idade <= 0) {
//   console.log("Você ainda não nasceu!");
// } else if (pessoa.idade >= 18) {
//   console.log(`A pessoa de nome ${pessoa.nome} é maior de idade`);
// } else {
//   console.log(`A pessoa ${pessoa.nome} é menor de idade`);
// }

// switch (pessoa.idade) {
//   case 20:
//     console.log("20 anos.");
//     break;
//   case 21:
//     console.log("30 anos");
//     break;
//   default:
//     console.log("Idade desconhecida");
//     break;
// }

// // Operador Ternário
// pessoa.idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

// //Estruturas de Repetição - FOR - WHILE - DO WHILE

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

// let count = 0;
// while (count < 5){
//     console.log(count);
//     count++
// }

// let count1 = 0;
// do{
//     console.log(count1);
//     count1++;
// }while(count1 <=3);

// Funções

function imprimeOi(){
    console.log("OIIII");
}
function imprimeParametro(frase){
    console.log(frase);
}
function imprimeParametroVariavel(frase){
    let mensagem = frase;
    console.log(mensagem);
}

imprimeOi();
imprimeParametro("Olá, Função com parâmetro");
imprimeParametroVariavel("Fala aí");

function soma(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

console.log("Soma: " + soma(2, 5));
console.log("Soma: " + soma(2, 5));

// Arrow Function
const multiplica = (num1, num2) => {
    console.log("Multiplicação: " + num1 * num2);
}

multiplica(2, 5);

const multiplicaDireto = (num1, num2) => console.log("Multiplicação: " + num1 * num2);

const objeto = {
    chave: "valor",
    numero: 53,
    booleano: true,
    obj: {
        chaves: "valores",
        numero: 54,
        booleano: false
    }
}

const impares = [1, 3, 5, 7];
const coisas = [1, false, {chave: "valor"}, [0,1, true]];

const top3 = ["produto1", "produto2", "produto3"];
//ou melhor
const top3Alt = [
    {
        nome: "produto1",
        valor: "35.00"
    },
    {
        nome: "produto2",
        valor: "50.00"
    },
    {
        nome: "produto3",
        valor: "65.00"
    },
]

// Formato para Varrer Array
top3Alt.forEach(item =>{
    console.log(item.nome);
})