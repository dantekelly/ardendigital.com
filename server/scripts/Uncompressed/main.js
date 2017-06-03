// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

var eventFired = 0;
var htmlwindow = $(window);
if (htmlwindow.width() / htmlwindow.height() < 1.4) {
    $(".fullscreen-bg__video").css({"max-width": "inherit", "max-height": "125%" });
    eventFired = 1;
} else if (htmlwindow.width() / htmlwindow.height() > 2) {
    $(".fullscreen-bg__video").css({"max-height": "inherit", "max-width": "125%" });
    eventFired = 1;
} else {
    alert('Window aspect perfect');
    eventFired = 0;
}

$(window).on('resize', function() {
    if (!eventFired) {
        if (htmlwindow.width() / htmlwindow.height() < 1.4) {
            $(".fullscreen-bg__video").css({"max-width": "inherit", "max-height": "125%" });
        } else if (htmlwindow.width() / htmlwindow.height() > 2) {
            $(".fullscreen-bg__video").css({"max-height": "inherit", "max-width": "125%" });
        } else {
            $(".fullscreen-bg__video").css({"max-height": "125%", "max-width": "125%" });
        }
    }
});


//$('#mainContent').bind('heightChange', function(){
//        alert('xxx');
//    });


//$("#btnSample1").click(function() {
//    $("#mainContent").css('height', '400px');
//    $("#mainContent").trigger('heightChange'); //<====
//    ...
//});


//@media only screen and (calc(width / height): 1.2727) {
//   .fullscreen-bg__video {
//       max-width: inherit;
//       max-height: 125%;
//   }
//}
//@media only screen and (calc(width / height): 2.2592) {
//   .fullscreen-bg__video {
//       max-width: 125%;
//       max-height: inherit;
//   }
//}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
