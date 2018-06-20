let quiz = [
    {
    pergunta: 'Zomba ou constrange você na frente dos amigos e da família?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Minimiza suas conquistas ou não incentiva você a conquistar seus sonhos?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Faz com que você se sinta incapaz de tomar decisões?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Usa da intimidação, culpa e ameaças para obter sua complacência?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Diz o que você deve ou não vestir?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Fala como deve deixar ou pentear o cabelo?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Diz que você não é nada sem ele ou que ele não é nada sem você?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Te trata de maneira grosseira sem o seu consentimento, beliscando, agarrando, empurrando ou até agredindo?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Faz várias ligações por noite ou aparece para garantir que você está onde disse que estaria?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Usa as drogas e álcool como desculpa para dizer coisas indelicadas ou para abusar de você?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Te culpa pela maneira com que age ou se sente?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Dá a sensação de que “não há como sair” do relacionamento?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    },
    {
    pergunta: 'Evita que você faça outras coisas que gosta, como ficar perto da família e de amigos?',
    imagem: 'img/images_012.png',
    alt: 'descrição da imagem',
    respostaSim: 'sim',
    respostaNão: 'não',
    }
]

let respostaSim = []
let respostaNão = []
let i = 0
let acertos = 0
let erros = 0

document.querySelector('.quiz').innerHTML = `
    <img src=${quiz[i].imagem} alt=${quiz[i].alt} />
    <p>${quiz[i].pergunta}</p>
    <div class="btn">
        <button id="btn-sim" onclick="onClick(this.value)" value="não">NÃO</button>
        <button id="btn-nao" onclick="onClick(this.value)" value="sim">SIM</button>
    </div>
`

function onClick(valor){
    respostaSim[i] = valor
    respostaNão[i] = valor
   
    if(respostaSim[i] === quiz[i].respostaNão) {
        erros++
    } else {
        (respostaNão[i] === quiz[i].respostaSim)
        acertos++

    }

    if (i < quiz.length) {
        console.log(quiz[i])
        document.querySelector('.quiz').innerHTML = `
            <img src=${quiz[i].imagem} alt=${quiz[i].alt} />
            <p>${quiz[i].pergunta}</p>
            <div class="btn">
            <button id="btn-sim" onclick="onClick(this.value)" value="não">NÃO</button>
            <button id="btn-nao" onclick="onClick(this.value)" value="sim">SIM</button>
        </div>
        `
        i++
    } else {
        
        let mensagem = ''
    
        if (respostaSim > respostaNão){
         
            mensagem = 'Mana parabéns seu relacionamento é como tem que ser baseado no respeito onde um respeita o espaço do outro'
            
        } else {
            mensagem = 'Mana chuta que é a laço, relacionamente existe pra te fazer feliz se o boy é desse jeito, cai fora que o mundo é grande'
        }
        document.querySelector('.quiz').innerHTML = `
        <p>${mensagem}</p>
        <img src=${quiz[i].imagem} alt=${quiz[i].alt} />
        `
        
    }

}