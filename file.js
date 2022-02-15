const caixaSecundos = document.getElementById('secundos');
const caixaMinutos = document.querySelector('#minut');
const caixaHora = document.getElementById('hora');
const caixaDia = document.querySelector('#dia')

const dataDeLancamento = new Date('15 march 2022 00:00:00 GMT-0200');

const atualizadorDeContador = () => {
    const datacorrent = new Date();
    const diferecaEntreAnos = dataDeLancamento - datacorrent;

    const dias = Math.floor(diferecaEntreAnos / 1000 / 60 / 60 / 24);
    const horas = Math.floor(diferecaEntreAnos / 1000 / 60 / 60) % 24;
    const minutos = Math.floor(diferecaEntreAnos / 1000 / 60) % 60;
    const segundos = Math.floor(diferecaEntreAnos / 1000) % 60;


    caixaSecundos.textContent = segundos < 10 ? "0" + segundos: segundos;
    caixaMinutos.textContent = minutos < 10 ? "0" + minutos: minutos;
    caixaHora.textContent = horas < 10 ? "0" + horas: horas;
    caixaDia.textContent = dias < 10 ? "0" + dias: dias;
}

setInterval(atualizadorDeContador, 1000);