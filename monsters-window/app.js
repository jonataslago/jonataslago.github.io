let carlos = document.querySelector('#carlos');

const img = document.querySelector('#imagemInput');
const imagem = document.querySelector('#imagemExibida');

let title = document.querySelector('#mainTitle');
let newTitle = document.querySelector('#newTitle');

let grau = document.querySelector('#grau');
let newGrau = document.querySelector('#newGrau');

let desafio = document.querySelector('#desafio');
let newDesafio = document.querySelector('#newDesafio');

let nvlMonstro = document.querySelector('#nvl-monstro');
let newNvlMonstro = document.querySelector('#newNvl-monstro');

let maiorMenorAtributo = document.querySelector('#maior-e-menor-atributo');
let newMaiorMenorAtributo = document.querySelector('#newMaior-e-menor-atributo');

let totalAtributo = document.querySelector('#total-atributo');
let newTotalAtributo = document.querySelector('#newTotal-atributo');

let especialidade = document.querySelector('#especialidade');
let newEspecialidade = document.querySelector('#newEspecialidade');

function criar(){

    const file = img.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
        imagem.src = reader.result;
    }
    title.innerText = newTitle.value;

    grau.innerText = newGrau.value;

    desafio.innerText = newDesafio.value;

    nvlMonstro.innerText = newNvlMonstro.value;

    maiorMenorAtributo.innerText = newMaiorMenorAtributo.value;

    totalAtributo.innerText = newTotalAtributo.value;

    especialidade.innerText = newEspecialidade.value;
}

function exportar() {

    const canva = carlos.querySelector('canvas');
  
    if (canva){
  
      canva.remove();
  
    }else{
  
      html2canvas(document.querySelector("#capture")).then(canvas => {
        carlos.appendChild(canvas)
      });
  
    }
  
    
  }