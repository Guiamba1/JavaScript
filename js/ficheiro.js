window.addEventListener('load', iniciar);

const nivel = {
    simples:  6,
    medio : 4,
    dificel : 2

};

// mudanca de nivel
 const nivelAtual = nivel.medio;

// variaveis globais
let tempo = nivelAtual;
let pontos = 0;
let jogando; 

//Constantes
const wordinput = document.querySelector('#wordinput');
const curentword = document.querySelector('#curentword');
const scoreDisplay = document.querySelector('#pontos');
const timeDisplay = document.querySelector('#tempo');
const segundos = document.querySelector('#segundos');
const messagem = document.querySelector('#messagem');

//Palavras
const palavras = [
    'oscar','matola','viver','telescopio','papai','mamae',
    'huble','python','cdn','trabalhar','namorar','filhos'

];

function iniciar(){
    showWords(palavras);//Mostra aleatoriamente as palavras

    setInterval(regressiva,1000);//Contagem regressiva

    setInterval(estado,50); //Estado do Jogo

    wordinput.addEventListener('input', comparar);
}
//=================================================
function comparar(){
    if (compararPalavras()){
       
        console.log('fuciona');
        jogando = true;
        tempo = nivelAtual + 1;
        showWords(palavras);
        wordinput.value = ''; 
        pontos++;
              }
              // se a pontuacao for negativa mistre Zerro
              if (pontos == -1) {
                  scoreDisplay.innerHTML = 0;
                  
              }
              else{
                scoreDisplay.innerHTML = pontos;
              }
              
           }

function compararPalavras(){
    if (wordinput.value == curentword.innerHTML) {
        messagem.innerHTML = 'certo';
        if (messagem.innerHTML) {
            document.getElementById('messagem').style.color = 'blue';
        }
        return true;   
    }
    else{
        messagem.innerHTML = '';
        return false;
    }
}

//Mostra aleatoriamente as palavras
function showWords(){
    const randIndex = Math.floor(Math.random() * palavras.length);
    curentword.innerHTML = palavras[randIndex];
}

//Contagem regressiva
function regressiva(){
    if (tempo > 0) {
        tempo --;
        }

    else if (tempo == 0) {
        jogando = false;
        }
        timeDisplay.innerHTML = tempo;
    }
    


////Estado do Jogo
function estado(){
    if (!jogando && tempo == 0) {
        messagem.innerHTML = 'game Over'; 
        document.getElementById('messagem').style.color = 'red';
        pontos = -1;
        
    }
}