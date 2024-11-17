const cambiarTexto = (idelemento, valor) => {
  document.getElementById(idelemento).innerText = valor;
};

const cambiarColor = (idelemento, color) => {
  document.getElementById(idelemento).style.color = color;
};
const cambiarTamaño = (idelemento, tam) => {
  document.getElementById(idelemento).style.fontSize = tam;
};
const agregarElemento = (idelemento, elementoHTML) => {
  document.getElementById("idmenu").innerHTML =
    document.getElementById(idelemento).innerHTML + elementoHTML;
};

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
  const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
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

  const numerosImpares = [1, 3, 5, 7, 9];
  console.log(numerosImpares);

  const numerosPares = [2, 4, 6, 8];
  console.log(numerosImpares);

  const numeros = numerosImpares.concat(numerosPares);
  console.log(numeros);

  //SENTECNAIS DE CONTROL
  for (const dia of diasSemana) {
    //SIMILAR AL FOR EACH
    console.log(dia);
    if (dia === "viernes") {
      console.log("Por fin viernes... !!!");
    } else {
      console.log("Aun no llega el DIA VIERNES");
    }
  }

  //DECLARACION DE OBJETOS EN JS
  const miEstudiante = {
    nombre: "Diego",
    apellido: "Rivas",
    edad: 28,
    genero: "M",
    ciudadNacimiento: "Quito",
  };
  console.log(miEstudiante);
  //Para ver cada parte de manera INDIVIDUAL
  console.log(miEstudiante.edad);
  console.log(miEstudiante.nombre);

  if (miEstudiante === 30) {
    console.log("Cumple");
  } else {
    console.log("No cumple");
  }

  miEstudiante.apellido = "Haro";
  console.log(miEstudiante);

  //DECLARACIONES DE ATRIBUTOS COMO OBJETOS
  const miProfesor = {
    nombre: "Jaime",
    apellido: "Sandoval",
    edad: null,
    direccion: {
      callePrincipal: "Av ss1",
      calleSecundaria: "Tachina",
      barrio: "Amanzonas",
    },
  };
  console.log(miProfesor);
  console.log(miProfesor.direccion);
  console.log(miProfesor.direccion.calleSecundaria);

  console.log(miProfesor.edad);
  console.log(miProfesor.estatura);

  if (miProfesor.edad === miProfesor.estatura) {
    console.log("Son IGUALES");
  } else {
    console.log("Estos no SON lo MISMO");
  }

  //ARREGLO DE OBJETOS
  const est1 = {
    nombre: "Paquito",
    apellido: "Palas",
    edad: 15,
  };

  const est2 = {
    nombre: "Juan",
    apellido: "Vergara",
    edad: 16,
  };

  const est3 = {
    nombre: "Eli",
    apellido: "Pozo",
    edad: 15,
  };

  const arregloEstudiantes = [est1, est2, est3];
  console.log(arregloEstudiantes);
  console.log(arregloEstudiantes[1]);
  console.log(arregloEstudiantes[1].nombre);

  //OTRA FORMA DE DECLARAR ARREGLO DE OBJETOS
  const arregloEstudiantes2 = [
    { nombre: "Fatima", apellido: "Haro", edad: 22 },
    { nombre: "Michelle", apellido: "Pillajo", edad: 27 },
    { nombre: "Douglas", apellido: "Torres", edad: 24 },
  ];

  console.log(arregloEstudiantes2);

  console.table(arregloEstudiantes2);

  //POP ME QUITA EL ULTIMO ELEMENTO DE UN ARRELGO
  const estudiante = arregloEstudiantes2.pop();
  console.log(estudiante);
  console.table(arregloEstudiantes2);


  //DESESTRUCTURACIÓN DE ARREGLOS:
  const colores =["Amarillo", "Azul","Verde", "Rojo","Rosado"]

  //Le pones un alias a cada elemento de COLORES
  const [c1, c2, c3,c4,c5] = colores;

  console.log(c3);
  console.log(c5);

  const meses = ["enero","febrero","marzo","abril","mayo"];
  const [m1,m2,m3,m4,m5] =["enero","febrero","marzo","abril","mayo"];
  //const [,m2,,,m5] =["enero","febrero","marzo","abril","mayo"];

  console.log(m1);
  console.log(m2);
  console.log(m3);

  
  //DESESTRUCTURACION DE OBJETOS
  const automovil ={
    marca: "Mazda",
    modelo: "BT-50",
    anio:2014,
    color:"Blanco"
  }

  const automovil2 ={
    marca: "Toyota",
    modelo: "AE 86",
    anio:1986,
    color:"Blanco"
  }

  //const {marca,modelo,anio,color} = automovil;
  //const {modelo,anio,color,marca} = automovil;
  desestructuracion(automovil);
  console.log("Segundo auto")
  desestructuracion(automovil2);

  const {nombreP,razaP,estaturaP} = {nombreP:"Perro", razaP:"Pinchi", estaturaP: "70cm"}
  console.log(nombreP);
  console.log(razaP);
  console.log(estaturaP);

  //declarar un objeto  con un tipo de objeto atributo complejo/tipo objeto y desestructurtar 
  //el atributo tipo objeto.

  const paisLATAM={
    nombrePais: "Ecuador",
    clima: "Templado",
   caracteristicas:{
        provincias: 24,
        capital: "Quito",
        presidente: "Daniel Noboa"

    }
  }

  /*
  //DESESTRUCTURADO EN DOS PASOS....
  const {nombrePais, caracteristicas} =paisLATAM;
  const {presidente} =caracteristicas;
  console.log(presidente);
*/

  //DESESTRUCTURANDO EN UNA SOAL LINEA
  const {clima,caracteristicas:{provincias,capital}}=paisLATAM;
  console.log(provincias);
  console.log(capital);

};

const desestructuracion =({marca,modelo,anio,color}) =>{
    console.log("ENTRANDO AL METODO DESESTRUCTURACION AUTO");
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);

  };

  /* OTRA FORMA DE HACER LA FUNCIO PARA EL CASO AUTO
  const desestructuracion =(automovil) =>{
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);

  }

  */