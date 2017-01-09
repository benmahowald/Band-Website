console.log('in friends-script');

$(document).ready( function () {
  console.log('jq sourced');

  // find link-list in DOM and count all anchor tags
  var content = document.getElementById('link-list');
  var divAnchors = content.getElementsByTagName('a');

  // loop through all anchors, animate and fadeIn each
    for(var i = 0; i < divAnchors.length; i++) {

      (function(i){
        setTimeout(function(){
            $(divAnchors[i]).animate({opacity: '1.0'}).fadeIn(1000);
        }, 200 * i);
      }(i)); // end wrapped function(i)

    } // end for loop
}); // end jq ready function
