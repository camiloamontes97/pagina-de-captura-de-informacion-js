
var clientes = [];

 var agregar = function(){
   
    var cedula= document.getElementById("cedula").value 
    var nombre= document.getElementById("nombre").value
    var apellido= document.getElementById("apellido").value
    var direccion= document.getElementById("direccion").value
    clientes.push({id: cedula , name: nombre , lastname: apellido , adrees: direccion})
    console.log(clientes)
    alert("se almacenaron los datos")
 }
 console.log(clientes)


var ceduladigitada = ""


var buscarcliente = function(){
   
    var ceduladigitada = document.getElementById("ceduladigitada").value
   var datos = clientes.find((item) => item.id == ceduladigitada)
   alert(datos.name)
   
   
}

