const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao planejar sua carreira, você prefere:",
        alternativas: [
            {
                texto: "Focar em uma área que oferece grande estabilidade financeira."
                afirmacao: "No inicío de sua jornada você optou pot uma área de trabalho que oferece uma maior estababilidade financeira."
            },
            {
                texto: " Escolher uma profissão que te traga satisfação pessoal e realização. ",
                afirmacao: "Você iniciou sua tragetória trabalhando com a profissão que sempre almejou, sabendo que a felicidade no trabalho é sua maior recompensa."  "
            }
        ]
    },
    {
        enunciado: "Para construir um futuro de sucesso e ser uma referência em sua área,você acredita que é melhor se especializar em uma únicaando-se um especialista de ponta, ou desenvolver múltiplas habiliades para se adaptar a diferentes desafios?",
        alternativas: [
            { área, torn
                texto: "Se especializar em uma única área.",
                afirmacao: "Deste modo, você decide buscar conhecimento apenas em um ramo de sua área, pois acredita que ter um conhecimento aprofundado te tornará um perito no que faz."
            },
            {
                texto: "Desenvolver múltiplas habiliades.",
                afirmacao: " Sendo assim, você acredita que desenvolver habilidades distintas é a chave  da versatibilidade para se adaptar a qualquer desafio."
            }
        ]
    },
    {
        enunciado: "Sua maior fonte de força para o futuro vem de seus próprios resultados, sentindo orgulho do que você construiu e do seu progresso, ou de seus relacionamentos, encontrando apoio e força em quem você ama?
        ",
        alternativas: [
            {
                texto: "Seus próprios resultados.",
                afirmacao: "E acredita que a maior fonte de sua força vem de conquistar seus próprios objetivos, e orgulha-se de cada progresso em sua jornada e de sua autonomia."
            },
            {
                texto: "Seus relacionamentos.",
                afirmacao: "E a sua maior força é encontrada naqueles que ama, pois, acredita que seus desafios são mais leves quando compartilhados."
            }
        ]
    },
    {
        enunciado: "Qual a sua visão sobre o seu futuro profissional? Você se imagina sendo um líder em uma grande empresa, tomando decisões estratégicas e liderando equipes, ou sendo um empreendedor autônomo, criando o seu próprio caminho e construindo algo do zero?",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Sucesso para você inclui uma rede de contatos profissionais forte, que possa te ajudar a crescer e a ter mais oportunidades de trabalho, ou relacionamentos pessoais profundos, que te dão apoio emocional e felicidade?",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
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
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
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