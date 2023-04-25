let carlos = document.querySelector('#carlos')

const input = document.querySelector('#valor');
const barra = document.querySelector('#barra');

const img = document.querySelector('#imagemInput');
const imagem = document.querySelector('#imagemExibida');

let nome = document.querySelector('#nome');
let newNome = document.querySelector('#newNome');

let idade = document.querySelector('#idade');
let newIdade = document.querySelector('#newIdade');

let stat = document.querySelector('#status');
let newStatus = document.querySelector('#newStatus');

let afiliacao = document.querySelector('#afiliacao');
let newAfiliacao = document.querySelector('#newAfiliacao');

let profissao = document.querySelector('#profissao');
let newProfissao = document.querySelector('#newProfissao');

let hp = document.querySelector('#hp');
let newHp = document.querySelector('#newHP');

let force = document.querySelector('#for');
let newForce = document.querySelector('#newFor');

let destreza = document.querySelector('#des');
let newDestreza = document.querySelector('#newDes');

let constituition = document.querySelector('#con');
let newConstituition = document.querySelector('#newCon');

let inteligence = document.querySelector('#int');
let newInteligence = document.querySelector('#newInt');

let sab = document.querySelector('#sab');
let newSab = document.querySelector('#newSab');

let car = document.querySelector('#car');
let newCar = document.querySelector('#newCar');

let expAbate = document.querySelector('#exp-de-abate');
let newExpAbate = document.querySelector('#newExpAbate');

let expProf = document.querySelector('#exp-de-prof');
let newExpProf = document.querySelector('#newExpProf');

let ptsHab = document.querySelector('#pts-de-habilidade');
let newPtsHab = document.querySelector('#newPtsHab');

let ptsAtributos = document.querySelector('#pts-de-atributos');
let newPtsAtributos = document.querySelector('#newPtsAtributos');

let habDeProf = document.querySelector('#hab-de-profissao');
let newHabDeProf = document.querySelector('#newHabDeProf');

let habLendaria = document.querySelector('#hab-lendaria');
let newHabLendaria = document.querySelector('#newHabLendaria');

let habDeCombate = document.querySelector('#hab-de-combate');
let newHabDeCombate = document.querySelector('#newHabDeCombate');

let aptPessoais = document.querySelector('#apt-pessoais');
let newAptPessoais = document.querySelector('#newAptPessoais');

let aptDeProf = document.querySelector('#apt-de-profissao');
let newAptDeProf = document.querySelector('#newAptDeProf');

function criar(){
      
  const file = img.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = () => {
    imagem.src = reader.result;
  }

  const valor = parseInt(input.value);
  if (isNaN(valor) || valor < 0 || valor > 100) {
    alert('Por favor insira um número entre 0 e 100!');
    return;
  }
    
  barra.style.width = `${valor}%`;

  nome.innerText = newNome.value;

  idade.innerText = newIdade.value;

  stat.innerText = newStatus.value;

  afiliacao.innerText = newAfiliacao.value;

  profissao.innerText = newProfissao.value;

  hp.innerText = newHp.value;
  
  force.innerText = newForce.value;

  destreza.innerText = newDestreza.value;
  
  constituition.innerText = newConstituition.value;

  inteligence.innerText = newInteligence.value;
  
  sab.innerText = newSab.value;  

  car.innerText = newCar.value;

  expAbate.innerText = newExpAbate.value;

  expProf.innerText = newExpProf.value;

  ptsHab.innerText = newPtsHab.value;

  ptsAtributos.innerText = newPtsAtributos.value;

  habDeProf.innerText = newHabDeProf.value;

  habLendaria.innerText = newHabLendaria.value;

  habDeCombate.innerText = newHabDeCombate.value;
  
  aptPessoais.innerText = newAptPessoais.value;
  
  aptDeProf.innerText = newAptDeProf.value;

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



