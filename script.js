const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Ao sair da escola, Davi vê um parque cheio de lixo e pensa no impacto disso para a natureza. Oque ele decide?",
    alternativas: [
        {
            texto: "Cuida do meio anbiente é responsabilidade de todos.",
         afirmacao:""
        },
        {
            texto:"Pequenas atitudes não fazem, diferença para o meio anbiente."
            afirmacao:""
        }
        
    ]
},
{
    enunciado: "Depois de aprender sobre a preservação de natureza a professora pode que Davi proponha uma ação para reduzir o lixo na escola. Qual atituide Davi toma?",
    alternativas: [
        {
            texto:"Pequenas atitudes não fazem, diferença para o meio anbiente."
            afirmacao:
        },
        {
            texto:"Pequenas atitudes não fazem, diferença para o meio anbiente."
            afirmacao:
        },
    ]
},
{
    enunciado: "Depois de Davi participar de um projeto sobre preservação da natureza a turma iniciou uma discussão sobre como o proteger o meio anbiente. Oque Davi fez?",
    alternativas: [
        {
           texto:"Defede a reciclagem, a economia de água e o plantio de árvore.",
           afirmacao:
        }
        {
           texto:"Afirma que pequenas açoẽs não fazem a diferença e que a responsabilidade é apenas do governo."
           afirmacao:
        }
        
        
    ]
},
{
    enunciado: "Ao final da discussão, Davi precisou criar um cartaz no computador para concientizar as pessoas sobre a preservação do meio anbiente. E agora?",
    alternativas: [
        {
            texto:"Criar um cartaz com imagens sobre reciclagem e preservação da natureza.",
            afirmacao:
        }
        {
            texto:"Criar um cartaz dizendo que as açoẽs das pessoas influenciam na preserevação da natureza."
            afirmacao:
        }
        
        
    ]
},
{
    enunciado: "Depois de apresentar o cartaz, a professora propõs uma ação para reduzir o desperdicio na escola. Oque Davi fez?",
    alternativas: [
        "Organiza uma campanha para economizar água e separar o lixo reciclável.",
        "Comtinua despediçando água e jogando lixo em qualquer lugar."
    ]
}
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta() 