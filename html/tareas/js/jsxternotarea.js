function cambiarFondo(idelemento, valor){
    document.getElementById(idelemento).style.background=valor;
 }
 function cambiarAlineadoTexto(idelemento,alineado){
     document.getElementById(idelemento).style.textAlign=alineado;

 }
 function cambiarFondoLabel(idelemento,fondo){
     document.getElementById(idelemento).style.background=fondo;

 }
 function agregarElemento(idelemento, elementoHTML){
     document.getElementById(idelemento).innerHTML=document.getElementById(idelemento).innerHTML+elementoHTML;

 }