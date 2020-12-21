
const d=document,
  w=window;

export function deteccionConexcion(){
const $cox=d.querySelector (".conexion"),
  
 
  f=function activar () {setTimeout(() => {
  $cox.classList.toggle("is-active")
}, 4000)};
  

// console.log($cox);
  w.addEventListener("online", () => {
  if(true){
  $cox.classList.toggle("is-active"),
  $cox.innerHTML=`<h1 style="background-color: greenyellow">Conexiòn Reestablecida ☻‼</h1>`, f() }
  });
 w.addEventListener('offline',() =>{
  if(true){
    $cox.classList.toggle("is-active"),
    $cox.innerHTML=`<h1 style="background-color:blue" > Conexión Perdida :(</h1>`, f()}
  });
  }
