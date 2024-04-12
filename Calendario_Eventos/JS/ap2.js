
/*
var mescal = document.getElementById("idcalen")
var fecha = document.getElementById("fecha")

new d = Date(year, mescal, day)
console.log(d)

function calendario(d){
    let tabla = document.getElementById("tabla").getElementsByTagName('tbody')
    let Fila = table.insertRow(table.length)
    .innerHTML = d.getDate();
    document.getElementById("tabla")
}
*/
//const Enviar = document.getElementById('Enviar');
const form = document.forms['calen'];

document.getElementById('mes').addEventListener('change', (event) => {
    console.log(event.target.value);
    generarDias(event.target.value);
});

function generarDias(mes) {
    let cantidadDedias = (new Date(2024, mes, 0)).getDate();
    let dias = [];
    for (let i = 1; i <= cantidadDedias; i++) {
        dias.push(i);
    }

    console.log(dias);
    document.getElementById('resultados').innerHTML = dias.map((value) => {
      return '<div class="ejemplo">' + value + '</div>';
    }).join('');
}

document.getElementById('idcalen').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = document.forms['calen'];
    const dia = parseInt(form['dia'].value);
    const evento = form['evento'].value;
    const divs = document.getElementsByClassName('ejemplo');
    console.log(divs, dia)
    divs[dia-1].innerHTML += '<div>'+evento+'</div>';
});