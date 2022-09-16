let SeuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelectot('.d-1-2 span');
let descricao = document.querySelecto('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numerosHTML = '';

    for(let i= 0; i < etapa.numeros; i++){
        if (i== 0) {
            numerosHTML += '<div class="numero pisca"></div>';

        }else {
            numerosHTML += '<div class="numero"></div>';
        }
    }


    SEuVotoPara.style.display = 'none';
    Cargo.innerHTML = etapa.titulo;
    Descricao.innerHTML = '';
    Aviso.style.display = 'none';
    Lateral.innerHTML = '';
    Numeros.innerHTML = numerosHTML;
}
function atualizaInterface() {
    console.log('atualizando Interface');
    let etapa = etapas[etapaAtual];

}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca')
    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = '${numero}${n}';
        elNumero.classList.remove('pisca');
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }
}
function branco('clicou em BRANCO'); {
}
function corrige('clicou em CORRIGE'); {
}
function confirma('clicou em CONFIRMA'); {
}

comecarEtapa;
