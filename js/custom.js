$(document).ready(function() {

    // var sideslider = $('[data-toggle=collapse-side]');
    // var sel = sideslider.attr('data-target');
    // var sel2 = sideslider.attr('data-target-2');
    // sideslider.click(function(event){
    //     $(sel).toggleClass('in');
    //     $(sel2).toggleClass('out');
    // });
    
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });
});
