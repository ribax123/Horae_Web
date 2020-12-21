import hamburguerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import {moveBall,shortcuts} from "./teclado.js";
import {showRemaining} from "./Contador.js";
import{inicioButton} from "./inicio.js"
import { nocheDia } from "./nocturno.js";
import { responciveMedia } from "./obj_responcive.js";
import { responsiveTester } from "./prueba_responcive.js";
import { userDiviceInfo } from "./deteccion_dispositivos.js";
import { deteccionConexcion } from "./deteccion_conexion.js";
import { webCam } from "./deteccion_camaraweb.js";
import { getGeolocation } from "./geolocalizacion.js";
import { searchFilters } from "./filtro-busquedas.js";
import { draw } from "./sorte.js";
import { slider } from "./caruusel.js";
import { scrollSpy } from "./scrollSpy.js";
import { smartVideo } from "./video_inteligente.js";
import { contactFormulary } from "./validaciones.js";
import { speechReader } from "./narrador.js";

const d= document;

d.addEventListener("DOMContentLoaded",(e)=>{
  hamburguerMenu(".panel-btn",".panel",".menu a");
  digitalClock("#reloj","#ini-reloj","#fin-reloj");
  alarm("./assets/recarga.mp3","#ini-alarma","#fin-alarma");
  showRemaining();
  inicioButton(".button-1" );
 
  responciveMedia("youtube",
  "(min-width: 1024px)",
  `<a href="https://youtu.be/iCEUTYKYaks">Ver video</a>`,
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/iCEUTYKYaks" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responciveMedia("geomap",
  "(min-width: 1024px)",
  `<a href="https://goo.gl/maps/Vw27rLP69me6HmNa8">Ver mapa</a>`,
  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5528525391396!2d-74.048271!3d4.6735055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a8dce07315b%3A0x16676fbc97fcebc6!2sMicrosoft%20Colombia!5e0!3m2!1ses-419!2sco!4v1599856359713!5m2!1ses-419!2sco" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDiviceInfo("user-divice");
  deteccionConexcion() ;
  webCam("wedacam");
  getGeolocation("geolocalizacion");
  searchFilters(".card-filter",".card");
  draw("#winer-button",".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormulary();

  
});


d.addEventListener("keydown",(e)=>{
  shortcuts(e);
  moveBall(e,".ball",".stage");
});
nocheDia(".dark");
speechReader();