const d= document,
w=window;

export function speechReader(){

  const $speechselect= d.getElementById("speech-select"),
   $speechText = d.getElementById("speech-text"),
   $speechbtn = d.getElementById("speech-btn"),
   speechMessage = new SpeechSynthesisUtterance();

   console.log(speechMessage);

   let voices = [];

   d.addEventListener("DOMContentLoaded", (e) => {});


   speechSynthesis.addEventListener("voiceschanged", e => {
     voices = w.speechSynthesis.getVoices();

     voices.forEach(voice => {
       const $opction = d.createElement("option");
       $opction.value = voice.name;
       $opction.textContent= `${voice.name}-- ${voice.lang}`;

       $speechselect.appendChild($opction);
     });
   });


   d.addEventListener("change", (e) => {
     if(e.target===$speechselect){
       speechMessage.voice = voices.find(
         (voice) => voice.name === e.target.value
         );     
     }
   });


   d.addEventListener("click", (e) => {
     if(e.target===$speechbtn){
       speechMessage.text = $speechText.value;
       w.speechSynthesis.speak(speechMessage);
     }
   });
}