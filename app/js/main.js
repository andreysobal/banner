const strings = [
  {
    lang: "es",
    textTop: "Mantén Seguras Tus Fotos y Vídeos Privados",
    textBottom: "Prueba gratuita de 7 días"
  },
  {
    lang: "de",
    textTop: "Halten Sie Ihre privaten Fotos & Videos geheim",
    textBottom: "7-tägige Gratis-Version"
  },
  {
    lang: "fr",
    textTop: "Protégez Vos Photos et Vidéos Privées",
    textBottom: "7 jours d'essai gratuit"
  },
  {
    lang: "ja",
    textTop: "プライベート写真と 動画を安全に 保つ",
    textBottom: "7日間無料トライアル"
  },
  {
    lang: "it",
    textTop: "Tieni al Sicuro i Tuoi Video e Foto Private",
    textBottom: "Prova gratuita di 7 giorni"
  },
  {
    lang: "ru",
    textTop: "Держите Личные Фото и Видео под Надежной Защитой",
    textBottom: "7-дневная пробная версия"
  }
]

/*Receive lang from server*/
fetch('../data.db')
	.then(response => response.json())
  .then(data => {
  	let lang = data.lang;
    let text;
    strings.forEach((item, i) => {
      if (item.lang === lang){
        text = item;
      }
    });
    let content = createElem("div", "content");
    let img = createElem("div", "");
    img.id = "icon";
    let textTop = createElem("div", "", text.textTop);
    textTop.id = "text_top";
    let textBottom = createElem("div", "", text.textBottom);
    textBottom.id = "text_bottom";
    content.innerHTML += img.outerHTML + textTop.outerHTML + textBottom.outerHTML;

    let height = document.getElementsByClassName('content')[0].offsetHeight;
    document.getElementsByClassName('content')[0].remove();
    document.getElementsByTagName('html')[0].setAttribute("lang", lang);
    document.getElementById('banner').appendChild(content);
    
    let newHeight = content.offsetHeight;
    console.log("height", newHeight);
    if (newHeight > height){
      document.getElementById('text_top').style.fontSize="0.7rem";
      document.getElementById('text_top').style.lineHeight="1rem";
      document.getElementById('text_bottom').style.fontSize="0.65rem";
      document.getElementById('text_bottom').style.lineHeight="1rem";
    }
  })
  .catch (error => {
  	alert(error);
  });

  /*elemnts manufacturing*/
  function createElem (elem, className, cont, src) {
  	div = document.createElement(elem);
  	div.setAttribute("class", className);
  	if (cont) {div.innerHTML=cont};
  	if (src) {
  		div.setAttribute("src", src);
  		div.setAttribute("alt", "The Poster");
  	};
  	return div;
  };