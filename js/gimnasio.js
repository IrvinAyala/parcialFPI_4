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
