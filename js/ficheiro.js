window.addEventListener('load', iniciar);

// variaveis globais
let tempo = 5;
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
        tempo = 6;
        showWords(palavras);
        wordinput.value = ''; 
        pontos++;
              }
              scoreDisplay.innerHTML = pontos;
           }

function compararPalavras(){
    if (wordinput.value == curentword.innerHTML) {
        messagem.innerHTML = 'certo';
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
        
    }
}