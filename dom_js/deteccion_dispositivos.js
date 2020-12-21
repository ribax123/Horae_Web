const d=document,
  w=window,
  n = navigator,
  ua=n.userAgent;
  

  export function  userDiviceInfo(id){
    const $id = d.getElementById(id),
      isMobile = {
        android: ()=> ua.match(/android/i),
        ios:()=> ua.match(/iphone|ipad|ipod/i),
        windows:()=> ua.match(/windows phone/i),
        any:function(){
          return this.android()||this.ios()||this.windows();
        },
      },
      isDesktop ={
        linux : ()=> ua.match(/linux/i),
        mac: ()=> ua.match(/mac os/i),
        windows: ()=> ua.match(/windows nt/i),
        any: function (){
        return this.linux() || this.mac() || this.windows()
        },
      },
      isBrowser = {
        chrome:()=> ua.match(/chrome/i),
        safari:()=> ua.match(/safari/i),
        firefox:()=> ua.match(/firefox/i),
        opera:()=> ua.match(/opera/i),
        ie:()=> ua.match(/msiw|iemobile/i),
        edge:()=> ua.match(/edge/i),
        any: function (){
          return(
            this.chrome()||
            this.safari()||
            this.firefox()||
            this.opera()||
            this.ie()||
            this.edge()
            );
        }
      };

      $id.innerHTML=`
      <ul>
  <li>User Agent: <b>${ua}
</b></li>
<li>Plataforma: <b>${
  isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
  <li>Navegador: <b> ${isBrowser.any()}</b></li>
</ul>
      `;
      if(isDesktop.windows()){
        $id.innerHTML += `<p> <mark>Descarga nuestro software para Windows</mark></p>`;
      }

      /* Redirecciones*/

      if(isMobile.android()){
        w.location.href = "https://www.facebook.com/";
      }
  }