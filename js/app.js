let separator = "-".repeat(50);
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
}

