$(document).ready(function() {
    $('#about-link').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000)
    })
    $('#products-list').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $('#products').offset().top
        }, 1000)
    })
})