var Fila = null
function enviar() {
        let newData = Leer()
        if (Fila == null){
            InsertarDatos(newData)
        } else{
            Actualizar(newData)
            Vaciar()
    }
}
function Leer() {
    let newData = {}
    newData["titulo"] = document.getElementById("titulo").value
    newData["info"] = document.getElementById("info").value
    return newData
}
function InsertarDatos(data) {
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.titulo
    columna2 = Fila.insertCell(1).innerHTML = data.info
    columna3 = Fila.insertCell(2).innerHTML = '<input type=button class="formabtn" onClick="Edit(this)" value="Editar"><button class="formabtn" onClick="Borr(this)">Borrar</button>'
    columna4 = Fila.insertCell(3).innerHTML = '<button class="formabtn" onClick="Estado()" id=marca>Sin Completar</button>'
    document.getElementById("titulo")
    Vaciar()
}
function Vaciar() {
    document.getElementById("titulo").value = ""
    document.getElementById("info").value = ""
    Fila = null
}
function Edit(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("titulo").value = Fila.cells[0].innerHTML
    document.getElementById("info").value = Fila.cells[1].innerHTML
}
function Actualizar(newData) {
    Fila.cells[0].innerHTML = newData.titulo
    Fila.cells[1].innerHTML = newData.info
    document.getElementById("titulo")
}
function Borr(td) {
    if (confirm('¿Esta seguro que desea borrar la tarea?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        Vaciar()
    }
}
function Estado(){

        const marca = document.getElementById("marca")
        marca.innerHTML = 'Completado';
}