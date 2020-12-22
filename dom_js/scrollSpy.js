const d=document;
export function scrollSpy(){
  const $sections = d.querySelectorAll("section[data-scroll-spy");
  
  const cb = (entries) => {
    // console.log("entries", entries);

    entries.forEach((entry) => {
      // console.log("entry", entry);
      
      const id = entry.target.getAttribute("id");

      // console.log(id);

     
        
      }
    );
  }
const observer = new IntersectionObserver(cb,{
threshold: [0.5, 0.75]
})
// console.log("observer", observer);

$sections.forEach((el)=> observer.observe(el))
}