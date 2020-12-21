const d = document;


export function slider(){
  const $nextBtn = d.querySelector(".slider-btns .next"),
  $prevBtn= d.querySelector(".slider-btns .previus"),
  $slides = d.querySelectorAll(".slider-slade");

  let i = 0;

  d.addEventListener("click", (e) => {
    if(e.target === $prevBtn){
      // console.log($prevBtn);
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;

      if(i < 0){
        i = $slides.length -1;
      }

      $slides[i].classList.add("active");
    }
  });
  
  d.addEventListener("click", (e) => {
    if(e.target === $nextBtn){
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;

      if(i > $slides.length-1){
        i = 0;
      }

      $slides[i].classList.add("active");
    }
  });

  
 }


