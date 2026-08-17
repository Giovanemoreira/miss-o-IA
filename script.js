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
         afirmacao:"Cuidar do meio ambiente é responsabilidade de todos e pequenas atitudes ajudam a preserva a natureza."
        },
        {
            texto:"Pequenas atitudes não fazem, diferença para o meio anbiente.",
            afirmacao:"a preservação do meio ambiente depende apenas do governo, por isso as ações individuais não fazem defirença."
        }
        
    ]
},
{
    enunciado: "Depois de aprender sobre a preservação de natureza a professora pode que Davi proponha uma ação para reduzir o lixo na escola. Qual atituide Davi toma?",
    alternativas: [
        {
            texto:"Pequenas atitudes não fazem, diferença para o meio anbiente.",
            afirmacao:"Pequenas ações coletivaS ajudam apreserva o meio ambiente."
        },
        {
            texto:"Pequenas atitudes não fazem, diferença para o meio anbiente.",
            afirmacao:"a participação das pessoas não é essencial para reduzir os inpactos ambientais"
        }
    ]
},
{
    enunciado: "Depois de Davi participar de um projeto sobre preservação da natureza a turma iniciou uma discussão sobre como o proteger o meio anbiente. Oque Davi fez?",
    alternativas: [
        {
           texto:"Defede a reciclagem, a economia de água e o plantio de árvore.",
           afirmacao:"As atitudes sustentáveis contribuem para a preservação do anbiente."
        },
        {
           texto:"Afirma que pequenas açoẽs não fazem a diferença e que a responsabilidade é apenas do governo.",
           afirmacao:"A participação da sociedade não é de importância para proteger o meio anbiente"
        }
        
        
    ]
},
{
    enunciado: "Ao final da discussão, Davi precisou criar um cartaz no computador para concientizar as pessoas sobre a preservação do meio anbiente. E agora?",
    alternativas: [
        {
            texto:"Criar um cartaz com imagens sobre reciclagem e preservação da natureza.",
            afirmacao:"A concientização ambiental incentiva atitudes sutentáveis e juda a preserva o meio ambiente."
        },
        {
            texto:"Criar um cartaz dizendo que as açoẽs das pessoas influenciam na preserevação da natureza.",
            afirmacao:"As ações individuais não são importantes para proteger a natureza."
        }
        
        
    ]
},
{
    enunciado: "Depois de apresentar o cartaz, a professora propõs uma ação para reduzir o desperdicio na escola. Oque Davi fez?",
    alternativas: [
        {
            texto:"Organiza uma campanha para economizar água e separar o lixo reciclável.",
            afirmacao:"Economizar recursos naturais e reciclar contribuem para a preservação da natureza."
        },
        {      
            texto: "Comtinua despediçando água e jogando lixo em qualquer lugar.",
            afirmacao:"o desperdício de recursos e o descarte incorreto de resíduos não prejudica o meio ambiente."
        }
       
    ]
}
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();