(function($) {

    var toggleSearchDashboard = $('.search-toggler').click(function() {
        $(".search-input-wrapper").toggle(function() {
            if ($(this).is(":visible")) {
                $("#search-input").focus();
            }
        });
    })

    $(document).ready(function() {
        toggleSearchDashboard();
    })

})(jQuery);