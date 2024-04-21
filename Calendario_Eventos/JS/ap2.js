const eventos = [];

document.getElementById('mes').addEventListener('change', (event) => {
    console.log(event.target.value);
    generarDias(event.target.value);
    const meSelect = eventos.filter(item=>item.mes==event.target.value)
    if(meSelect==event.target.value){
    cargarEventos();
    }
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

/*
function Leer() {
    let newData = {}
    newData["evento"] = document.getElementById("eventoid").value
    newData["dia"] = document.getElementById("diaid").value
    document.getElementById('mes').addEventListener('change', (event) => {
        newData["mes"] = event.target.value
    });
    return newData
}
*/
/*
function agregar(data, mes){
    document.getElementById('mes').addEventListener('change', (event) => {
    if(data.mes == event.target.value){
        let cantidadDedias = (new Date(2024, mes, 0)).getDate();
        let dias = [];
        for (let i = 1; i <= cantidadDedias; i++) {
            if(data.dia == i){
                data.evento
                const mostrar = document.getElementById('ejemplo');
                mostrar.innerHTML = data.evento;
                console.log(data.evento);
            }
        }
    }
    });
}
*/

function cargarEventos(diaForm, eventoForm, btnEditBor){
    const mostrar = document.getElementsByClassName('celdas');
    const dia = eventos.filter(item=>item.dia==diaForm)
    const evento = eventos.filter(item=>item.evento==eventoForm)
    
    mostrar[dia-1] += '<div>' + evento + '<br>' + btnEditBor + '</div>';
    console.log(mostrar);
}

document.getElementById('idcalen').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = document.forms['calen'];
    const diaForm = parseInt(form['dia'].value);
    const eventoForm = form['evento'].value;
    const btnEditBorForm = '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>';

    eventos.push({
    mes: parseInt(form['mess'].value),
    dia: parseInt(form['dia'].value),
    btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>',
    evento: form['evento'].value
    });
    cargarEventos(diaForm, eventoForm, btnEditBorForm);
});
console.log(eventos);

    // localStorage.setItem('enento',{});
    // localStorage.getItem('enento')


function Edit(btn) {
    Fila = btn.parentElement.parentElement
    document.getElementById("evento").value = dia.innerHTML
}

function Borr(btn) {
    if (confirm('¿Esta seguro que desea borrar el evento?')) {
        esp = btn.parentElement.parentElement
        document.getElementById("calen").delete(form['evento'].value)
    }
}
/*
document.getElementById('idcalen').addEventListener('submit', (event) => {
    event.preventDefault();
    let newData = {}
    const form = document.forms['calen'];
    newData["evento"] = form['evento'].value
    newData["dia"] = form['diaid'].value
    newData["mes"] = form['mes'].value
    console.log(newData.evento, newData.dia, newData.mes);
});
*/

document.getElementById('mes').addEventListener('change', (event) => {
    if (event.target.value == 1) {
        nom = 'Enero'
    } if (event.target.value == 2) {
        nom = 'Febrero'
    } if (event.target.value == 3) {
        nom = 'Marzo'
    } if (event.target.value == 4) {
        nom = 'Abril'
    } if (event.target.value == 5) {
        nom = 'Mayo'
    } if (event.target.value == 6) {
        nom = 'Junio'
    } if (event.target.value == 7) {
        nom = 'Julio'
    } if (event.target.value == 8) {
        nom = 'Agosto'
    } if (event.target.value == 9) {
        nom = 'Septiembre'
    } if (event.target.value == 10) {
        nom = 'Octubre'
    } if (event.target.value == 11) {
        nom = 'Noviembre'
    } if (event.target.value == 12) {
        nom = 'Diciembre'
    }
    const nombreMes = document.getElementById('nomMes');
    nombreMes.innerHTML = nom;
});