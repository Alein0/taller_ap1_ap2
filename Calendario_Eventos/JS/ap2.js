const mescal = document.getElementById("idcalen")

new d = Date(year,mescal,day)

function guardar(d){
    document.getElementById("fecha").innerHTML = d;
}