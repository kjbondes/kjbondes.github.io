$( document ).ready(function(){
  var userLang = navigator.language || navigator.userLanguage;

  var hostname = window.location.hostname;
  var referrer = document.referrer;

  // check if reloading the page
  var landingPage = !referrer || referrer.indexOf(hostname) == -1;

  if (landingPage && userLang !== "de") {
    // TODO: only redirect to actual path, not home
    window.location = '/en';
  }
  if (landingPage && $('body').attr('id') == 'home') {
      nav.style.opacity = "0";
    }
  }
})
