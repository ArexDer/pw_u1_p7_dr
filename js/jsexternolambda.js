
const cambiarTexto= (idelemento, valor) => {
    document.getElementById(idelemento).innerText = valor;

}


const cambiarColor = (idelemento,color) => {
    document.getElementById(idelemento).style.color=color;

}
const cambiarTamaño =(idelemento,tam) => {
    document.getElementById(idelemento).style.fontSize=tam;

}
const agregarElemento = (idelemento, elementoHTML) =>{
    document.getElementById('idmenu').innerHTML=document.getElementById(idelemento).innerHTML+elementoHTML;

}

const conceptosJS = () => {

    /* Tipos de variables ej JS
    var : Para declaraciones Globales , ya no se usa conmunmente
    let : Tiene un ambito local/funcion dentro del bloque {}/ no permitevolver a declararle en el mismo bloque
    const : Para variables cuyo valor no cambian
    
    */
   let nombre = "";
   let numero1 = 1;
   let numero2 = 22.2;
   const PI = 3.14;

   console.log(nombre);
   console.log(numero1);
   console.log(numero2);
   console.log(PI);
   console.log("Entrada a los calculos");

   /* DECLARACION DE ARREGLOS */
   const diasSemana =["lunes", "martes", "miercoles","jueves", "viernes"];
   console.log(diasSemana);

    console.log(diasSemana[4]);

    console.log(diasSemana[9]);
    //Dentro de JS el concepto de NULO  o No existencia se lo conoce como 
    //UNDEFINED -- undefined

    /*
    COMPARACIONES 
    ===
    !===
    */
   //PUSH : guarda el elemento al fina ldel arreglo
   diasSemana.push("Sabado");
   console.log(diasSemana);


   //UNSHIFT : Guarda elementos al INICIO
   diasSemana.unshift("Dias");
   console.log(diasSemana);

   const numerosImpares =[1,3,5,7,9];
   console.log(numerosImpares);

   const numerosPares =[2,4,6,8];
   console.log(numerosImpares);

   const numeros = numerosImpares.concat(numerosPares);
   console.log(numeros);

   //SENTECNAIS DE CONTROL
   for(const dia of diasSemana){ //SIMILAR AL FOR EACH
        console.log(dia);
        if(dia === "viernes"){
            console.log("Por fin viernes... !!!");
        } else{
            console.log("Aun no llega el DIA VIERNES");
        }
   }

   //DECLARACION DE OBJETOS EN JS
   const miEstudiante ={
    nombre: "Diego",
    apellido: "Rivas",
    edad: 28,
    genero: "M",
    ciudadNacimiento: "Quito"
   }
   console.log(miEstudiante);
   //Para ver cada parte de manera INDIVIDUAL
   console.log(miEstudiante.edad);
   console.log(miEstudiante.nombre);

   if(miEstudiante ===30){
    console.log("Cumple");

   }else{
    console.log("No cumple");
   }

   miEstudiante.apellido = "Haro";
   console.log(miEstudiante);


   //DECLARACIONES DE ATRIBUTOS COMO OBJETOS
   const miProfesor ={
    nombre: "Jaime",
    apellido: "Sandoval",
    edad: null,
    direccion:{
        callePrincipal: "Av ss1",
        calleSecundaria: "Tachina",
        barrio: "Amanzonas"
    }
   }
   console.log(miProfesor);
   console.log(miProfesor.direccion);
   console.log(miProfesor.direccion.calleSecundaria);

   console.log(miProfesor.edad);
   console.log(miProfesor.estatura);

   if(miProfesor.edad===miProfesor.estatura){
    console.log("Son IGUALES");
   }else{
    console.log("Estos no SON lo MISMO");
   }


}