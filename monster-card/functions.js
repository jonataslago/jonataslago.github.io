function editar(){

    nome.innerText = newNome.value;

    grau.innerText = newGrau.value;

    nvlMonstro.innerText = newNvlMonstro.value;

    observation.innerText = newObservation.value;

    desafio.innerText = newDesafio.value;

    forca.innerText = newForca.value;

    destreza.innerText = newDestreza.value;

    constituicao.innerText = newConstituicao.value;

    inteligencia.innerText = newInteligencia.value;

    sabedoria.innerText = newSabedoria.value;

    carisma.innerText = newCarisma.value;

    especialidade.innerText = newEspecialidade.value;

}

btnCriar.addEventListener("click", function() {

  if (img.value === "") {
    alert("Coloque uma imagem antes de prosseguir!");
  }

});




function criar(){

    const file = img.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
        imagem.src = reader.result;
    }

    editar();
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