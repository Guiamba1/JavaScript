window.addEventListener('load', iniciar);

// variaveis globais
let tempo = 5;
let pontos = 0;
let jogando; 

//Constantes
const wordinput = document.querySelector('#wordinput');
const curentword = document.querySelector('#curentword');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const segundos = document.querySelector('#segundos');
const messagem = document.querySelector('#messagem');

//Palavras
const palavras = [
    'oscar','matola','viver','telescopio','papai','mamae',
    'huble','python','cdn','trabalhar','namorar','filhos'

];

function iniciar(){
    showWords(palavras);
}

function showWords(){
    const randIndex = Math.floor(Math.random() * palavras.length);
    curentword.innerHTML = palavras[randIndex];
}