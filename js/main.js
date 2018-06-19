let perguntas = [
    "quiz.html",
    "pergunta2.html",
    "pergunta3.html",
    "pergunta4.html",
    "pergunta5.html",
    "pergunta6.html",
    "pergunta7.html",
    "pergunta8.html",
    "pergunta9.html",
    "pergunta10.html",
    "pergunta11.html",
    "pergunta12.html",
    "pergunta13.html",
];
let gabarito = [
    'sim', 
    'sim', 
    'sim', 
    'sim', 
    'nao', 
    'nao', 
    'sim', 
    'sim', 
    'nao', 
    'sim'
]
let respostas = new Array();
let resultado = new Array()
let i = 0
let acertos = 0

function onClick(valor){
    respostas [i] = valor;

    if(respostas[i] == gabarito[i]){
        resultado[i] = "Mana chuta que é a macumba, relacionamente existe pra te fazer feliz se o boy e desse jeito cai fora que o mundo é grande"
        acertos++;
    }else {
        resultado[i] = "Mana parabéns seu relacionamento é como tem que ser baseado no respeito"
    }
    i++
    if(i < perguntas.length){
        // document.getElementById("#btn").html = perguntas[i]
        window.location.href = perguntas[i];
    }
}
// let perguntas = 0
// let respostas = 0 
// var respostaFinal = new Array ();

// function btn(){
//     window.location.replace(pergunta2.html);
//     if (document.getElementById("btn-sim").value === "sim") {    
//         respostaFinal[0]="certo";
//            perguntas++;
//        }else{
//         document.getElementById("btn-nao").value === "nao";
//         respostaFinal[0]="errado";
//         respostas++;}
// }