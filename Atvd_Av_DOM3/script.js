
const quotes = [
    {
        quote: "Ter inimigos é bom. Muitas vezes eles são os únicos que percebem o que a gente faz.",
        author: "Sergio Vaz"
    },
    {
        quote: "Muita fantasia perde a realidade, muita esperança pode parecer de alguma forma vazia.",
        author: "Akira Toriyama"
    },
    {
        quote: "Yare Yare Daze.",
        author: "Hirohiko Araki"
    },
    {
        quote: "A justiça é baseada em valores que mudam a cada geração.",
        author: "Eiichiro Oda"
    },
    {
        quote: "O vício é talvez uma doença do Espírito.",
        author: "Osamu Dazai"
    },
    {
        quote: "O mundo só será bom no dia que todo o dinheiro acabar, mas que não me falte nenhum enquanto isso não acontece.",
        author: "Tim Maia"
    },
    {
        quote: "Quem poderá fazer, aquele amor morrer, se o amor é como um grão. Morre, nasce trigo, Vive, morre pão.",
        author: "Gilberto Gil"
    },

    {
        quote: "Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.",
        author: "Machado de Assis"
    },

    {
        quote: "Queria ter dois corações. Um para amar, o outro também.",
        author: "Sergio Vaz"
    },
    // Adicione mais citações à lista
];

const quoteDisplay = document.getElementById('quoteDisplay');
const authorDisplay = document.getElementById('authorDisplay');
const newQuoteButton = document.getElementById('newQuoteButton');

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
}

newQuoteButton.addEventListener('click', generateRandomQuote);