/* modal */
var objectShow = (function(objectID){ 
  $(objectID).show(); 
})
var objectHide = (function(objectID){ 
  $(objectID).hide(); 
})

/* scroll down */
var scrollDownTo = (function(objectID){
  var width = $(window).width();
  if (width >= 992) { // $screenM
    $('html,body').animate({ scrollTop : $(objectID).offset().top -75 }, 1000);
  } else if ( width >= 576 ) { // $screenXS
    $('html,body').animate({ scrollTop : $(objectID).offset().top -60 }, 1000);
  } else { 
    $('html,body').animate({ scrollTop : $(objectID).offset().top -50 }, 1000);
  }
});
