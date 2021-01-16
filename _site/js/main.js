$( document ).ready(function(){
  var userLang = navigator.language || navigator.userLanguage;
  if (userLang == "de") {
    window.location.href = "https://kjbondes.github.io"
  }
  else {
    window.location.href = "https://kjbondes.github.io/en"
  }
});