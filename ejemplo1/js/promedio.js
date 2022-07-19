var i, num, notar, notaactual, promedio;
//Captura la cantidad de notas a ingresar
num= parseInt(prompt("¿Cuàntas notas  va a ingresar?"));
//Definir el valor de la inicializaciòn para almacenar el promedio
nota=0;

header= "<header class\"=masked\">";
header += "<h1>Selectable Text</h1>";
header += "</header>";

document.write(header);

//Ciclo que permite ingresar cada nota

document.write("<section>");
document.write("<article>");

for (i = 1; i<=num; i++) {
    notaactual= parseFloat(prompt("Ingrese la nota" + i + ": ", "")) ;
    document.write("<h3> La nota: " + i + ": " + Math.round(notaactual * Math.pow(10, 2)) / Math.pow(10, 2) + "</h3>");
    nota += notaactual;
}
//Obteniendo el cálculo del promedio
promedio = nota / (i-1);
//Imprimir el valor redondeado a dos decimales del promedio
document.write("<h3>El promedio de las notas es: " + Math.round(promedio * Math.pow(10,2))
/ Math.pow(10,2) + "</h3>");
document.write("</article>");
document.write("</section>");