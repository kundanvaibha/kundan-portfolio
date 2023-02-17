$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    })
})
jQuery(document).ready(function() {
    "use strict"
    $('.home').ripples({
        dropRadius: 15,
        perturbance: 0.01,
    });
    
    (function($) {
        var controller = new ScrollMagic.Controller();
        function animateNumber() {
            $(".js-count").each(function() {
                var $this = $(this),
                    countTo = $this.attr("data-count");
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 20000,
                    easing: "linear",
                    step: function() {
                        $this.text(Math.floor(this.countNum).toLocaleString("en"))
                    },
                    complete: function() {
                        $this.text(this.countNum.toLocaleString("en"))
                    }
                })
            })
        }
        new ScrollMagic.Scene({
            triggerElement: ".section"
        }).on("enter", function() {
            $(".section").addClass("pod--animated");
            animateNumber()
        }).on("leave", function() {
            $(".section").removeClass("pod--animated")
        }).addTo(controller)
    })(jQuery)
});
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x]
}
function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x]
}
function startTimer() {
    setInterval(displayNextImage, 3000)
}
var images = [],
    x = -1;
images[0] = "imgs/cartoon.jpg";
images[1] = "imgs/cartoon2.jpg"
