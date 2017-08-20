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
fetch('./data.db')
	.then(response => response.json())
  .then(data => {
  	if (data.lang) {
      let lang = data.lang;
      document.getElementsByTagName('html')[0].setAttribute("lang", lang);
      let text;
      strings.forEach((item, i) => {
        if (item.lang === lang){
          text = item;
        }//end if
      })//end forEach

      const height = parseInt(getComputedStyle(document.getElementById('content')).height);
     
      let textTop = document.createElement("div");
      textTop.setAttribute("id", "text_top");
      textTop.innerHTML = text.textTop;

      let textBottom = document.createElement("div");
      textBottom.setAttribute("id", "text_bottom");
      textBottom.innerHTML = text.textBottom;
     
      document.getElementById('text_top').remove();
      document.getElementById('text_bottom').remove();
      let content = document.getElementById('content');
      content.appendChild(textTop);
      content.appendChild(textBottom);

      let $fontSize = parseInt(getComputedStyle(content).fontSize);
      resizeFont (content, $fontSize, height);
    }//end if
  })
  .catch (error => {
  	alert(error);
  });

  /*for gradually fontSize reducing*/
  function resizeFont (content, $fontSize, height){
    $fontSize = ($fontSize)*0.9;
    content.style.fontSize = $fontSize+"em";
    let newHeight = parseInt(getComputedStyle(content).height);
    if (newHeight > height) {
      resizeFont (content, $fontSize, height);
    } else {
      return content;
    }
  };