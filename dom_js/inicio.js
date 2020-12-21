
const d=document,
w=window;

export function inicioButton(botonInicio){
  const $scrollBtn=d.querySelector(botonInicio);

  w.addEventListener("scroll", (e)=>{
    let arribaTop= d.documentElement.scrollTop;
    
    if(arribaTop >600){
      $scrollBtn.classList.remove("hidden");

    } else{
      $scrollBtn.classList.add("hidden")
    } 
  })
d.addEventListener("click" , (e)=>{
    if(e.target.matches(`${botonInicio} *` )){
      w.scrollTo({
        behavior:"smooth",
        top:0
      });
    }
})

}



 
 

