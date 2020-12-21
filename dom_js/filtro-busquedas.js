
const d=document;


export function searchFilters(input,selector){
   d.addEventListener("keyup", (e)=>{   
    if(e.target.matches(input)){
    
      d.querySelectorAll(selector).forEach((el) =>
       el.textContent.toLowerCase().includes(e.target.value)
      ?el.classList.remove("filter")
      :el.classList.add("filter")
      );
    }
  } );
}
