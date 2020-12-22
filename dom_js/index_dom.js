import hamburguerMenu from "./menu_hamburguesa.js";
import { inicioButton } from "./inicio.js";
import { nocheDia } from "./nocturno.js";
import { deteccionConexcion } from "./deteccion_conexion.js";
import { slider } from "./caruusel.js";
import { scrollSpy } from "./scrollSpy.js";
import { contactFormulary } from "./validaciones.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  inicioButton(".button-1");
  deteccionConexcion();
  slider();
  scrollSpy();
  contactFormulary();
});
nocheDia(".dark");
