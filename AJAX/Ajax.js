
(()=>{
   
  const xhr = new XMLHttpRequest(),
  $xhr = document.getElementById("xhr"),
  $fragment = document.createDocumentFragment();

xhr.addEventListener("readystatechange", (e) => {
  if (xhr.readyState !== 4) return;

  // console.log(xhr);

  if (xhr.status >= 200 && xhr.status < 300) {
    // console.log("éxito");
    // console.log(xhr.responseText);
    //$xhr.innerHTML = xhr.responseText;
    let json = JSON.parse(xhr.responseText);
    // console.log(json);

    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });

    $xhr.appendChild($fragment);
  } else {
    // console.log("error");
    let message = xhr.statusText || "Ocurrió un error";
    $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
  }

  // console.log("Este mensaje cargará de cualquier forma");
});

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//xhr.open("GET", "assets/users.json");

xhr.send();
 })();


//  *****api fethc*******

(()=>{
  
 const $fetch = document.getElementById("fetch"),
  $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")

  .then((res)=>(res.ok ? res.json(): Promise.reject(res)))
  .then((json)=>{
    // console.log(json);
    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
      $fragment.appendChild($li);
    });

  $fetch.appendChild($fragment);
  })
  .catch((err)=>{
    // console.log(err);
    let message= err.statusText || "Ocurrio un error";
    $fetch.innerHTML = `error ${err.status}: ${message}`;
  })
//  .finally(()=>console.log("gracias!!"))
})();

(()=>{
  const $fetchAsinc = document.getElementById("Async-await"),
  $fragment = document.createDocumentFragment();


  async function getData(){
    try{ 
      let res = await  fetch("https://jsonplaceholder.typicode.com/users"),
      json = await res.json();
     
      console.log(res,json);
    //       //if (!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos");
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

    $fetchAsinc.appendChild($fragment);
   }catch(err){
    console.log(err);
    let message = err.statusText || "Ocurrió un error";
    $fetchAsinc.innerHTML = `Error ${err.status}: ${message}`;
   }finally {
   }
}

getData()
})();