const Enero = [];
const Febrero = [];
const Marzo = [];
const Abril = [];
const Mayo = [];
const Junio = [];
const Julio = [];
const Agosto = [];
const Septiembre = [];
const Octubre = [];
const Noviembre = [];
const Diciembre = [];

document.getElementById('mes').addEventListener('change', (event) => {
    console.log(event.target.value);
    generarDias(event.target.value);
    //const meSelect = eventos.filter(item=>item.mes==event.target.value)
    //console.log(meSelect)
    guardarEventos(event.target.value);
    //if(meSelect==event.target.value){
    cargarEventos(event.target.value);
    //}
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

function cargarEventos(meSelect){
    const mostrar = document.getElementsByClassName('celdas');    
    if(meSelect==1){
        Enero.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }if(meSelect==2){
        Febrero.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }if(meSelect==3){
        Marzo.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }if(meSelect==4){
        Abril.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }if(meSelect==5){
        Mayo.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }if(meSelect==6){
        Junio.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }if(meSelect==7){
        Julio.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }if(meSelect==8){
        Agosto.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }if(meSelect==9){
        Septiembre.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }if(meSelect==10){
        Octubre.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }if(meSelect==11){
        Noviembre.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }if(meSelect==12){
        Diciembre.forEach(evento => {
            mostrar[evento.dia - 1].innerHTML += '<div>' + evento.evento + '<br>' + evento.btnEditBor + '</div>';
        });
    }
//    mostrar[dia-1].innerHTML += '<div>' + evento + '<br>' + btnEditBor + '</div>';
    console.log(mostrar);
}

function guardarEventos(selectmes){
document.getElementById('idcalen').addEventListener('submit', (event) => {
    const eventos = [];

    event.preventDefault();
    const form = document.forms['calen'];

    if(selectmes==1){
        Enero.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }if(selectmes==2){
        Febrero.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }if(selectmes==3){
        Marzo.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }if(selectmes==4){
        Abril.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }if(selectmes==5){
        Mayo.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }if(selectmes==6){
        Junio.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }if(selectmes==7){
        Julio.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }if(selectmes==8){
        Agosto.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }if(selectmes==9){
        Septiembre.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }if(selectmes==10){
        Octubre.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }if(selectmes==11){
        Noviembre.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }if(selectmes==12){
        Diciembre.push({
            dia: parseInt(form['dia'].value),
            evento: form['evento'].value,
            btnEditBor: '<input type=button onClick="Edit(this)" value="Editar"><button onClick="Borr(this)">Borrar</button>'
        });
    }
});
console.log(Enero);
}
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