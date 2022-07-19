var proc= new Array(100);
var preci= new Array(100);
var cont=0;
var op;
var band= false;
var par= document.getElementById('par');
document.write("<header><h1>Agregar un producto</h1></header>");
document.write(" <div class='contenedor'> <input type='submit' id='Agregar' onclick=' mostraTabla()' value='Agregar un producto nuevo'> </div>'");
document.write("<p id='par'>Total de productos ingresados: 0</p>")
document.write("<table><tr><td class='head'>Producto</td><td class='head'>Precio</td></tr></table>")
document.write("<table id='tblDatos'>");
function mostraTabla(){
  var band=false;
  do{
  do{
    proc= prompt("Ingresa producto");  
  }while(proc>=0 | proc<=0);
  do{
    preci = prompt("Ingresa el precio del producto");
  }while(isNaN(preci) | proc<=0);

  op= prompt("Digite 1 si quiere ingresar más productos y 2 si quiere salir");
  cont= cont+1;
  let tblDatos = document.getElementById('tblDatos').insertRow(0);
  let col1 = tblDatos.insertCell(0);
  let col2 = tblDatos.insertCell(1);

  col1.innerHTML = proc;
  col2.innerHTML = "$" + preci;
  console.log(cont);
}while(op!=2);

  
  document.getElementById("par").innerHTML = "Total de productos ingresados: " + cont;

 
}

document.write("</table>");
