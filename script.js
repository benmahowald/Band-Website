// console.log('srced script.js');

// function detects scrolled amount of pixels from top
// fade in and fade out of nav-toggle button
var verticalDetect = function() {
  var screenheight = parseInt($(document).height());
  var y = $('#container').scrollTop();
  if(y < screenheight) {
    $('#nav-toggle, #nav-circle').hide();
  }else {
    $('#nav-toggle, #nav-circle').fadeIn(300);
  }
  // change background on scroll
  if(y > 1162) {
    $('#container').css('background-image', 'url("assets/mainBandPic.png")');
  }else {
    $('#container').css('background-image', 'url("assets/mainPicColor.jpg")');
  }
};

$(document).ready( function () {
  console.log('in doc ready');

  // toggles class for hamburger menu clicks
  $("#nav-circle, #nav-toggle, #nav").click(function () {
    document.getElementById('nav-toggle').classList.toggle( "active" );
  });

  // shows and hides nav for small screens
  $('#nav-toggle, #nav, #nav-circle').click( function() {
    if($('#container').offset().left === 0) {
        $('#container').animate({ left: '190' }, 250);
        $('#nav-circle').css({'box-shadow': '0 0 11px 0 #DAEDD0', '-moz-box-shadow': '0 0 11px 0 #DAEDD0', '-webkit-box-shadow': '0 0 11px 0 #DAEDD0'});

    }else {
        $('#container').animate({ left: '0' }, 250);
        $('#nav-circle').css({'box-shadow': '0 0 5px 0 #222', '-moz-box-shadow': '0 0 5px 0 #222', '-webkit-box-shadow': '0 0 5px 0 #222'});


    } // end else
  }); // end nav-toggle click

  // functions to handle image roll over for contact info
  $(function() {
    $("#fb1, #fb2")
        .mouseover(function() {
            $(this).attr("src", "assets/fbhover.png");
        })
        .mouseout(function() {
           $(this).attr("src", "assets/fb.png");
        });
  });
  $(function() {
    $("#bc").mouseover(function() {
      $(this).attr("src", "assets/bandcamphover.png");
        })
        .mouseout(function() {
           $(this).attr("src", "assets/bandcamp.png");
        });
  });
  $(function() {
    $("#it")
        .mouseover(function() {
            $(this).attr("src", "assets/ituneshover.png");
        })
        .mouseout(function() {
           $(this).attr("src", "assets/itunes.png");
        });
  });
}); // end doc ready
