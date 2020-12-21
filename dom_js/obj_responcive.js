const d=document,
w=window;

export function responciveMedia(id,mediaQuery,mobile,desktop){
    let variableMediaQuery=w.matchMedia(mediaQuery);
   
    const responsive = (e) =>{
      if(e.matches){
      d.getElementById(id).innerHTML = desktop;
    }else{
      d.getElementById(id).innerHTML = mobile;
    }

      // console.log(variableMediaQuery, e.matches);

    }
    variableMediaQuery.addListener(responsive)
    responsive(variableMediaQuery);

}