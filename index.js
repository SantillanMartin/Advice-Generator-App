let mensaje=document.getElementById("mensaje");
let boton=document.getElementById("boton-aviso");
let avisoId=document.getElementById("id-aviso");

boton.onclick=()=>{
    MostrarAviso();
}



function MostrarAviso(){
    fetch("https://api.adviceslip.com/advice")
.then(res => res.json() )
.then(data => {
    //const AVISO= data.slip;
    mensaje.innerHTML=`"${data.slip.advice}"`;
    avisoId.innerHTML=`ADVICE #${data.slip.id}`;
    
 } );


}





