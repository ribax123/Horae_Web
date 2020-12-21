
const d = document;

export function draw(btn,selector){

  const getGanador = (selector)=>{
  const $players =d.querySelectorAll(selector),
    random= Math.floor(Math.random() * $players.length),
    winner = $players[random];
    console.log(winner);

    return `El Ganador  es ${winner.textContent}`;
    
  };

  d.addEventListener("click", (e)=>{
    if(e.target.matches(btn)){
      let result =getGanador(selector)
      alert(result)
      console.log(result);
      
    }
  })
}
