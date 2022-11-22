function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//Criação da lista das Teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//Contador
let contador = 0;


while (contador < listaDeTeclas.length) {
    
    //Constante para liste de tecla com o indice
    const tecla = listaDeTeclas[contador];

    //Constante que recebe o id do Audio
    const instrumento = tecla.classList[1];
    //String Templete... Concatenando id do Audio
    const idAudio = `#som_${instrumento}`;

    //Chamando click dos buttons com a função que identifica os audios
    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    
    //Incremento do contador
    contador = ++contador;
}