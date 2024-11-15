function cambiarTexto(idelemento, valor){
    document.getElementById(idelemento).innerText=valor;
}
function cambiarColor(idelemento,color){
    document.getElementById(idelemento).style.color=color;

}
function cambiarTamaño(idelemento,tam){
    document.getElementById(idelemento).style.fontSize=tam;

}
function agregarElemento(idelemento, elementoHTML){
    document.getElementById('idmenu').innerHTML=document.getElementById(idelemento).innerHTML+elementoHTML;

}