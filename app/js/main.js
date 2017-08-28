window.onload = function() {
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

  //correct new method of language selection
  var url = window.location.search;
  if (url){
    var lang = url.replace(/^.*?\=/,"").replace(/\&.*?$/,"");
    console.log(lang);
    strings.forEach (function(item, i){
      if (item.lang == lang){
        let text = item;
        document.getElementsByTagName('html')[0].setAttribute("lang", lang);

        const topHeight = parseInt(getComputedStyle(document.getElementById('text_top')).height);
        const bottomHeight = parseInt(getComputedStyle(document.getElementById('text_bottom')).height);

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

        let $fontSize = parseInt(getComputedStyle(document.getElementById('text_top')).fontSize);
        resizeFont (document.getElementById('text_top'), $fontSize, topHeight, lang);
        $fontSize = parseInt(getComputedStyle(document.getElementById('text_bottom')).fontSize);
        resizeFont (document.getElementById('text_bottom'), $fontSize, bottomHeight, lang);
      }//end if
    })//end forEach
  }//end if
  return false;
}//end onload
  /*for gradually fontSize reducing*/
  function resizeFont (content, $fontSize, height, lang){
    $fontSize = ($fontSize)*0.99;
    content.style.fontSize = $fontSize+"px";
    if (lang === "ru" || lang === "ja") {
      content.style.lineHeight = $fontSize*1.5+"px";
    }
    let newHeight = parseInt(getComputedStyle(content).height);
    if (newHeight > height) {
      resizeFont (content, $fontSize, height, lang);
    } else {
      return content;
    }
  };