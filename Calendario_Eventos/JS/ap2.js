const eventos = [];
let contadorEventos = 0; // Contador para generar identificadores únicos para los eventos

document.getElementById('mes').addEventListener('change', (event) => {
    const selectmes = event.target.value;
    generarDias(selectmes);
    cargarEventos(selectmes);
});

function generarDias(mes) {
    let cantidadDedias = (new Date(2024, mes, 0)).getDate();
    let dias = [];
    for (let i = 1; i <= cantidadDedias; i++) {
        dias.push(i);
    }

    console.log(dias);
    document.getElementById('resultados').innerHTML = dias.map((value) => {
        return '<div class="celdas">' + value + '</div>';
    }).join(" ");
}

function cargarEventos(meSelect) {
    const mostrar = document.getElementsByClassName('celdas');
    for (let i = 0; i < mostrar.length; i++) {
        mostrar[i].innerHTML = ''; // Limpiar el contenido de cada celda
    }
    generarDias(meSelect)
    eventos.filter(evento => evento.mes == meSelect).forEach(evento => {
        const eventoHTML = '<div>' + evento.evento + '<br>' + evento.btnEditBor 
        mostrar[evento.dia - 1].innerHTML += eventoHTML;
    });
    console.log(eventos);
}
function eliminarEvento(eventoId) {
    if (confirm('¿Esta seguro que desea borrar el evento?')) {
    eventos.splice(eventos.findIndex(evento => evento.id === eventoId), 1);
    cargarEventos(parseInt(document.getElementById('mes').value));
    }
}

function editarEvento(eventoId) {
    const nuevoEvento = prompt("Editar evento:");
    if (nuevoEvento !== null) {
        const eventoIndex = eventos.findIndex(evento => evento.id === eventoId);
        eventos[eventoIndex].evento = nuevoEvento;
        cargarEventos(parseInt(document.getElementById('mes').value));
    }
}

document.getElementById('idcalen').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = document.forms['calen'];
    const mesSeleccionado = parseInt(document.getElementById('mes').value);
    
    contadorEventos++; // incrementar el contador de eventos único

    eventos.push({
        id: contadorEventos, // Identificador único para el evento
        mes: mesSeleccionado,
        dia: parseInt(form['dia'].value),
        evento: form['evento'].value, 
        btnEditBor: '<input type="button" onClick="editarEvento(' + contadorEventos + ')" value="Editar"> <input type="button" onClick="eliminarEvento(' + contadorEventos + ')" value="Borrar">'
    });

    cargarEventos(mesSeleccionado);
});

document.getElementById('mes').addEventListener('change', (event) => {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const selectmes = parseInt(event.target.value);
    const nombreMes = document.getElementById('nomMes');
    if(selectmes){
        nombreMes.innerHTML = meses[selectmes - 1];
    }else{
        nombreMes.innerHTML = 'Seleccione un mes';
    }
});