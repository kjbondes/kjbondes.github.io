$( document ).ready(function(){
  var userLang = navigator.language || navigator.userLanguage;

  var hostname = window.location.hostname;
  var referrer = document.referrer;

  var landingPage = !referrer || referrer.indexOf(hostname) == -1;

  if (landingPage && userLang !== "de") {
    window.location = '/en';
  }
})
