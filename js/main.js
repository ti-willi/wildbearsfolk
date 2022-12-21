function tocaSomGoga() {
    document.querySelector('#som_tecla_goga').play();
}

function tocaSomGustavo() {
    document.querySelector('#som_tecla_gustavo').play();
}

document.querySelector('.som-goga').onclick=tocaSomGoga;

document.querySelector('.som-gustavo').onclick=tocaSomGustavo;