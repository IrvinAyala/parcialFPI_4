//Cargar Sucursales
function cargarSucursal() {
    $.ajax({
        url: 'http://localhost/parcialFPI_4_Servidor/index.php/welcome/getSucursal',
        dataType: 'json',
        type: 'GET',
    }).done(function (response) {
      for (var i = 0; i < response.length; i++) {
       document.getElementById('demo').innerHTML+=response[i].nombreSucursal+"<br>";
        }
        console.log(response);
      });
}
//para autocomplementar los usuarios para eliminar y editar
var usercomply = new Array();
window.onload = function() {
  $.ajax({
      url: 'http://localhost/parcialFPI_4_Servidor/index.php/welcome/getCliente',
      dataType: 'json',
      type: 'GET',
  }).done(function (response) {
      for (i = 1; i < response.length; i++) {
      usercomply[i] = String(response[i].nombre_cliente);
    }
    console.log(usercomply);
    creadorDeListasClientes(usercomply);
  });
}

function creadorDeListasClientes(usercomply) {
  for (i = 0; i <usercomply.length ; i++) {
    var node = document.createElement("OPTION");
    var textnode = document.createTextNode(usercomply[i]);
    node.appendChild(textnode);
    node.setAttribute("id", i);
    node.setAttribute("name", usercomply[i]);
    document.getElementById("lista").appendChild(node);
    document.getElementById("list").appendChild(node);
  }
}
//funciones para div de clientes
function ocultarDivs(){
  document.getElementById('contenedorAgregar').style.display = 'none';
  document.getElementById('contenedorEliminar').style.display = 'none';
  document.getElementById('contenedorEditar').style.display = 'none';
}
function mostrarAgregar(){
  document.getElementById('contenedorAgregar').style.display = 'block';
  document.getElementById('contenedorEliminar').style.display = 'none';
  document.getElementById('contenedorEditar').style.display = 'none';
}
function mostrarEliminar(){
  document.getElementById('contenedorAgregar').style.display = 'none';
  document.getElementById('contenedorEliminar').style.display = 'block';
  document.getElementById('contenedorEditar').style.display = 'none';
}
function mostrarEditar(){
  document.getElementById('contenedorAgregar').style.display = 'none';
  document.getElementById('contenedorEliminar').style.display = 'none';
  document.getElementById('contenedorEditar').style.display = 'block';
}
