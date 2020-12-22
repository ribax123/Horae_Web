const d =document;
const lsg = localStorage;
const $sections = d.querySelectorAll("section");

export function nocheDia(eventoNoche){
  const $camBio=  d.querySelector(eventoNoche)


  
  let sol= "☀️",
  luna= "🌙";
  
  const lightMode =()=>{
  d.body.classList.add("is-active")
  $camBio.textContent=sol;
  lsg.setItem("theme","dark")
  d.c
  
  }
  const darkMode = ()=>{ 
     d.body.classList.remove("is-active")
  $camBio.textContent=luna;
  lsg.setItem("theme","light")
  
  
  
  }
  
  d.addEventListener("click", (e)=>{
    if(e.target.matches(eventoNoche)){
      // console.log(d.querySelector(eventoNoche));
      if ( $camBio.textContent === sol){
        darkMode();
        
      }
      else{ 
        lightMode (); 
      }
     }
    });

    d.addEventListener("DOMContentLoaded",(e)=>{
      if(lsg.getItem("theme")=== null){
        lsg.setItem("theme","light");
      }
      if(lsg.getItem("theme")==="dark"){
        lightMode();
      }
      if(lsg.getItem("theme")==="light"){
        darkMode();
      }
     });

}