function cargarNum(){
    var numeros, band=false;
    var arrayCifra=[];
    var cantCifras;
    var numPar, numImpar, sumPar=0, sumImpar=0,cantPar=0, canImpar=0, sumTodo=0, cifraMay=0, cifraMen=0;
    do{
        numeros= prompt("Ingrese número entero");
        if(numeros<=0 | isNaN(numeros))
        {
            band=false;
        }else{
            band=true;
        }
    }while(band==false) ;
    cantCifras= numeros.length;//Tomamos el numero de caracteres

    //Recorre todos los elemntos del arreglos desde el 0 hasta el total de cifras determinado
    //Por el .lenght en la linea anterior
    for(var i= 0; i<cantCifras; i++){
        if(i==0){
            var j = 1;
        }
        arrayCifra[i]= numeros.slice(i , j);
        j++; 

    }
    //Evaluamos mayor
    for(var k= 0; k<cantCifras; k++){
        if(arrayCifra[k]>cifraMay){
            cifraMay= arrayCifra[k];
        }
        //Calcular el menor
        if(cifraMen==0){
            cifraMen=arrayCifra[k];
        }else if(arrayCifra[k]<cifraMen){
            cifraMen= arrayCifra[k];
        }
        //Evaluar número par
        if(arrayCifra[k]%2== 0){
            numPar= arrayCifra[k];
            cantPar= cantPar+1;
            sumPar+= parseInt(arrayCifra[k]);  
        }
        //Evaluar numero impar
        if(arrayCifra[k]%2==1){
            numImpar= arrayCifra[k];
            canImpar= canImpar+1;
            sumImpar+= parseInt(arrayCifra[k]);  
        }
        sumTodo+= parseInt(arrayCifra[k]);

    }
    
    document.write("<h3>El numero ingresado es: </h3>" + numeros +"<br>");
    document.write("<h3>El numero de cifras es de: </h3>" + cantCifras +"<br>");
    document.write("<h3>El numero mayor es: </h3>" + cifraMay +"<br>");
    document.write("<h3>El numero mayor es: </h3>" + cifraMen +"<br>");
    document.write("<h3>Cantidad de cifras pares: </h3>" + cantPar +"<br>");
    document.write("<h3>Cantidad de cifras  impares: </h3>" + canImpar +"<br>");
    document.write("<h3>Suma de cifras pares: </h3>" + sumPar +"<br>");
    document.write("<h3>Suma de cifras impares: </h3>" + sumImpar +"<br>");
    document.write("<h3>Suma de todo: </h3>" + sumTodo +"<br>");



}
window.onload=cargarNum;