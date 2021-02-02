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

  // hide navbar while landing
  var width = window.innerWidth;
  if ( width >= 992 && $('body').attr('id')=='home' ) {
    $('#nav').hide();
    $( document ).scroll(function(){
      setTimeout(function() { 
        $('#nav').show();
      }, 300);
    });
  }
})
