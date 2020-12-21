const d=document,
  n=navigator;

export function getGeolocation(id){
  const $id = d.getElementById(id),
  options={
    enableHighAccuracy: true, //acelera la localizacion
    timeout:5000,  //velocidad
    maximumAge:0  //no guarda datos
  };

  const success = (position) => {
    let coords = position.coords;

    $id.innerHTML =`
    <p> tu posición es: </p>
    <ul>
      <li>Latitud: <b> ${coords.latitude}</b></li>
      <li>Longitud: <b> ${coords.longitude}</b></li>
      <li>Precisión: <b> ${coords.accuracy}</b></li>
      </ul>
      <a href= "https://www.google.com/maps/@${coords.latitude}, ${coords.longitude},20z "target="_blank" rel="noopener"> Ver en Google Maps "
       `;
  };

  const  error=(err)=>{
    $id.innerHTML= `<p> <mark> Error ${err.code}: ${err.message}</mark></p>`;
  }

  n.geolocation.getCurrentPosition(success,error,options)
}