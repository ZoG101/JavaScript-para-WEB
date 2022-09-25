function tocaSom(idElementoAudio){

    const elementoAudio = document.querySelector(idElementoAudio);
    
    if (elementoAudio === null || elementoAudio.localName !== 'audio' || elementoAudio === undefined) {

        console.error(`Elemento ${idElementoAudio} não existe para esta função!`);

        return;

    }else {

        elementoAudio.play();
        
    }

}

// function tocaClap(){
//     document.querySelector('#som_tecla_clap').play();
// }

// document.querySelector('.tecla_pom').onclick = tocaPom;
// document.querySelector('.tecla_clap').onclick = tocaClap;

const teclas = document.querySelectorAll('.tecla');
const sons = document.querySelectorAll('audio');

for (let i = 0; i < teclas.length; i++) {

    const instrumento = teclas[i].classList[1];

    teclas[i].onclick = function() {

        tocaSom(`#som_${instrumento}`);

    }

    teclas[i].onkeydown = function(evento) {

        if (evento.code === 'Enter' || evento.code === 'Space') {

            teclas[i].classList.add('ativa');

        }else {

            return;

        }

    }

    teclas[i].onkeyup = function() {

        teclas[i].classList.remove('ativa');

    }

}
