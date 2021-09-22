// DESAFIO 02 ----------------------------------------------------------------------------------------------
/*let separator = "-".repeat(50);
console.log(separator);
alert("Bienvenido al sistema de consultas");
let user_prename = prompt("Nombres");
let user_name = prompt("Apellidos");
let user_age = prompt("Edad");
let codeGen = 0;
let visitas = 10;
let menorEdad = true;
let strMenorEdad = "SI";
let user_query = "error";
let ingresoDatos = true;
let validate = false;
let xHrs = "24hrs";
if(Number(user_age)){
    if(user_prename != "" && user_name != "" && parseInt(user_age) > 0){
        if(parseInt(user_age) > 0 && parseInt(user_age) <= 10){
            console.log("ACCESO RESTRINGIDO");
        }else if(parseInt(user_age) > 10 && parseInt(user_age) <= 17){
            xHrs = "48hrs";
            alert("Deberas proporcionar mas datos");
            var dateBirth = prompt("¿Cual es tu fecha de nacimiento?");
            if(dateBirth != ""){
                user_query = prompt("Escriba su consulta");
                validate = true;
            }
            else{
                console.log("ERROR");
            }
        }else if(parseInt(user_age) >=18){
            menorEdad = false;
            strMenorEdad="NO";
            user_query = prompt("Escriba su consulta");
            validate = true;
        }
    }
    else{
        console.log("ERROR");
    }
}
else{
    console.log("ERROR");
}
if(validate){
    console.log("Bienvenido al sistema de consultas");
    console.log(`Usuario: ${user_prename}` + " " + `${user_name}`);
    console.log(`Edad: ${user_age} / Es menor de Edad?: ${strMenorEdad}`);
    if(menorEdad){console.log(`Fecha de nacimiento: ${dateBirth}`);}
    console.log(separator);
    console.log(`Consulta:`);
    console.log(`\t${user_query}`);
    console.log(separator);
    codeGen = "VISITA" + (visitas + 1); // suma de datos y concatenación
    visitas = visitas + 1
    console.log(`Codigo de visita: ${codeGen}`);
    console.log(`Tiempo aprox de respuesta: ${xHrs}`);
    console.log(separator);
}*/
// DESAFIO 03 ----------------------------------------------------------------------------------------------
let separator = "-".repeat(50);
let cantItems = 10;
let cantItems_print = 0;
console.log("Sistema de Consultas - Reporte");
console.log(separator);
alert("Bienvenido al sistema de consultas");
let strMessage = "¿Que tipo de reporte desea visualizar? \n\n 1. Reporte simple\n 2. Reporte detallado \n 3. Fin sistema \n";
let strDefault = "Ingrese el numero de reporte ...";
let tipoReporte = parseInt(prompt(strMessage, strDefault)); 
while(!Number(tipoReporte)){ // BLUCLE WHILE
    tipoReporte = parseInt(prompt(strMessage, strDefault));
}
strMessage = "¿Que tipo de filtro se debe aplicar a la lista? \n\n 1. Todos \n 2. Solo EN ESPERA \n 3. Solo ATENDIDOS \n 4. Fin sistema \n";
strDefault = "Ingrese el codigo del filtro ...";
let xfiltro;
if(Number(tipoReporte)){
    if(tipoReporte > 0 && tipoReporte <= 3){
        let strItem = "error";
        let strDetail = "error";
        let strDate = "error";
        let estadoItem = "EN ESPERA";
        switch(tipoReporte){
            case 1: // Reporte simple
                xfiltro = parseInt(prompt(strMessage, strDefault));
                if(xfiltro != 4){
                    for (i = 0;i < cantItems; i++){
                        if(i == 3 || i == 9){estadoItem = "ATENDIDO";}else{estadoItem="EN ESPERA";}
                        strItem = (i + 1) + " | Nombre Usuario | " + "VISITA" + (i + 1) + " | " + estadoItem + "\n";
                        if(xfiltro == 1){console.log(strItem);cantItems_print++}
                        if(xfiltro == 2 && estadoItem == "EN ESPERA"){console.log(strItem);cantItems_print++}
                        if(xfiltro == 3 && estadoItem == "ATENDIDO"){console.log(strItem);cantItems_print++}
                    }
                }else{
                    console.log("Fin sistema.");
                }
                break;
            case 2: // Reporte detallado
                xfiltro = parseInt(prompt(strMessage, strDefault));
                if(xfiltro != 4){
                    for (i = 0;i < cantItems; i++){
                        if(i == 3 || i == 9){estadoItem = "ATENDIDO";}else{estadoItem="EN ESPERA";}
                        strItem = (i + 1) + " | Nombre Usuario | " + "VISITA" + (i + 1) + " | " + estadoItem + "\n";
                        strDetail = "\t consulta de usuario \n"
                        strDate = "\t Fecha de consulta: 01/01/2021 \n";
                        if(xfiltro == 1){console.log(strItem + strDetail + strDate);cantItems_print++}
                        if(xfiltro == 2 && estadoItem == "EN ESPERA"){console.log(strItem + strDetail + strDate);cantItems_print++}
                        if(xfiltro == 3 && estadoItem == "ATENDIDO"){console.log(strItem + strDetail + strDate);cantItems_print++}
                    }
                }else{
                    console.log("Fin sistema.");
                }
                break;
            case 3: // Fin dsistema
                console.log("Fin sistema.");
                break;
        }
        console.log("Cantidad de registros: " + cantItems_print);
    }
}else{
    console.log("ERROR DE INGRESO DE DATOS");
}
