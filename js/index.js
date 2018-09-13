/* Scroll Animation */
$(document).ready(function () {
    $(".contactsLink").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;

        if ($(hash).offset()) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () { });
        }
    });

    $(".techLink").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;

        if ($(hash).offset()) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () { });
        }
    });

});