const d=document;
let  y=0,
  x=0;

export function moveBall(e,ball,stage){
  const $ball = d.querySelector(ball),
  $stage = d.querySelector(stage),
  limitsBall = $ball.getBoundingClientRect(),
  limitsStage= $stage.getBoundingClientRect();



  // console.log(e.keyCode);
  // console.log(e.key);
  // console.log(limitsBall, limitsStage);

  switch (e.keyCode) {
    case 37:
      if(limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
       }
      break;
    case 38:
      if(limitsBall.top > limitsStage.top) {
      e.preventDefault();
      y--;
      }
       break;
      case 39:
      if(limitsBall.right < limitsStage.right) {
      e.preventDefault();
      x++;
      }
      break;
    case 40:
      if(limitsBall.bottom < limitsStage.bottom){ 
      e.preventDefault();
      y++;
      }
      break;
    default:
      break;
  }

  $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;

}

export function shortcuts(e){}