 var numero1 =0 ;
 var numero2 =0 ;
 var operacion ='';

function setearValor(valor) {

  let valorActual = document.getElementById("id-display").innerText;
  //Para cambiar el valor de un contenido TEXTO: con INNERTEXT.
  console.log("El valor de entrada: " + valorActual);

  document.getElementById("id-display").innerText = valor;
}

function setearValorConcatenado(valor) {
  let valorActual = document.getElementById("id-display").innerText;

  console.log("El valor de entrada: " + valor);

  document.getElementById("id-display").innerText = valorActual + valor;
}


function recibirValor1(valor){
    this.numero1=valor;
    if(numero1===null){
        numero1=valor;
       
    }else{
        this.numero2=valor;
    }

}

function recibirValor2(valor){
    this.numero2=valor;

}

function  evaluarOperacion(op){
    this.operacion=op
}

function igual(){
    let valorFinal;
    if(operacion ==='+'){
        valorFinal =numero1 + numero2;
        setearValor(valorFinal);
    }else if (operacion ==='-') {
        valorFinal =numero1 - numero2;
        setearValor(valorFinal);

    }else if (operacion ==='x') {
        valorFinal =numero1 * numero2;
        setearValor(valorFinal);

    }else if (operacion ==='/') {
        valorFinal =numero1 / numero2;
        setearValor(valorFinal);

    }
}




    
    

