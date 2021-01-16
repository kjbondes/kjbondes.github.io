$( document ).ready(function(){
  var userLang = navigator.language || navigator.userLanguage;

  var hostname = window.location.hostname;
  var referrer = document.referrer;

  var landingPage = !referrer || referrer.indexOf(hostname) == -1;

  if (landingPage && userLang !== "de") {
    window.location = '/en/';
  }
})

/*
$( document ).ready(function(){
  var [lang, locale] = (((navigator.userLanguage || navigator.language).replace('-', '_')).toLowerCase()).split('_');

  function getBestSuitableSupportedLang(lang, locale, supported) {
    // Exclude first element, default language
    var supported_lang = supported.shift();
    
    if (supported.includes(lang + "-" + locale)) {
      supported_lang = lang + "-" + locale;
    } else if (supported.includes(lang)) {
      supported_lang = lang;
    }

    return supported_lang;
  }

  var supported_languages = ["en", "de"];
  var current_lang = '';
  var suitable_lang = getBestSuitableSupportedLang(lang, locale, supported_languages);

  var hostname = window.location.hostname;
  var referrer = document.referrer;

  var landingPage = !referrer || referrer.indexOf(hostname) == -1;

  if (landingPage && (current_lang !== suitable_lang)) {
    window.location = '/' + suitable_lang + '/';
  }

})
*/
