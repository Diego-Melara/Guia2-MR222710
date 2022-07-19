function ordenar(){
    var numeros = new Array();
    var i, max, temp, contenido="";
    do {
    max = prompt("Cuántos números va a ingresar (valor entero):", "");

    if(isNaN(max)){
    alert("El valor digitado no es numérico.");
    continue;
    }

    if(max < 2){
    alert("El arreglo debe ser de dimensión 2 o superior");
    }
    }while(isNaN(max) || max < 2);

    for(i=0; i<max; i++){
    numeros[i] = parseInt(prompt("Número " + (parseInt(i) + 1), ""));
    }

    var datos = document.getElementById('datos');
    with(document){
    contenido += "<h1>Números ingresados</h1>\n";

    contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";

    for(i=0; i<max; i++){
    contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";
    }
    contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
    var opcion= prompt("¿Desea un orden ascendente o descendente?");
    switch(opcion){
        case "ascendente":
        case "Ascendente":
        case "ASCENDENTE":
            for(i=0; i<max-1; i++){
                for(j=i+1; j<max; j++){
                if(numeros[i]>numeros[j]){
                temp = numeros[j];
                numeros[j] = numeros[i];
                numeros[i] = temp;
                }
                }
                }
                break;
        case "Descendente":
        case "descendente":
        case "DESCENDENTE":
            for(i=0; i<max+1; i++){
                for(j=i+1; j<max; j++){
                if(numeros[i]<numeros[j]){
                temp = numeros[j];
                numeros[j] = numeros[i];
                numeros[i] = temp;
                }
                }
                }  
                break;
                default: 
                alert("Ingrese una opción correcta");
                break;

    }
    }
    contenido += "<h1>Números ordenados de forma " + opcion + "</h1>\n";
    contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
    for(i=0; i<max; i++) {
        contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
    datos.innerHTML = contenido;
    }
        
        window.onload = ordenar;