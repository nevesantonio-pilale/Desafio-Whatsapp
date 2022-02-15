const caixaSecundos = document.getElementById('secundos');
const caixaMinutos = document.querySelector('#minut');
const caixaHora = document.getElementById('hora');
const caixaDia = document.querySelector('#dia')

/* obtem e armazena a data de lançamento */
const dataDeLancamento = new Date('15 march 2022 00:00:00 GMT-0200');

/* Função que implementa os calculos da diferença entre a data de lançamento e a data corrente */
const atualizadorDeContador = () => {
    const datacorrent = new Date();
    const diferecaEntreAnos = dataDeLancamento - datacorrent;

    /* obtem e armazena os dados de dia, horas, minutos e segundos */
    const dias = Math.floor(diferecaEntreAnos / 1000 / 60 / 60 / 24);
    const horas = Math.floor(diferecaEntreAnos / 1000 / 60 / 60) % 24;
    const minutos = Math.floor(diferecaEntreAnos / 1000 / 60) % 60;
    const segundos = Math.floor(diferecaEntreAnos / 1000) % 60;

    /* armazena os dados obtidos a cima nas nas respectivas variaveis */
    caixaSecundos.textContent = segundos < 10 ? "0" + segundos: segundos;
    caixaMinutos.textContent = minutos < 10 ? "0" + minutos: minutos;
    caixaHora.textContent = horas < 10 ? "0" + horas: horas;
    caixaDia.textContent = dias < 10 ? "0" + dias: dias;
}

/* permite que a função atualizadorDeContador seja actualizada a cada secundo  */
setInterval(atualizadorDeContador, 1000);