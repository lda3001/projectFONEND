$(document).ready(function () {
    var progressBar = $('#progressBar');

    $(window).scroll(function () {
        updateProgressBar();
    });

    function updateProgressBar() {
        var scrollTop = $(document).scrollTop();
        var scrollHeight = $(document).height() - $(window).height();
        var progress = (scrollTop / scrollHeight) * 100;
        progressBar.css('width', progress + '%');
    }
});


$(document).ready(function () {
    $('#menu-icon').click(function () {
        $('.main-menu').slideToggle();
    })


})

function FallinOut() {
    var x = document.getElementById("accordion-inner");
    if (x.style.display == "block") {

        $('#accordion-inner').slideToggle();
        $('.accordion-title').removeClass('active');
    } else {
        $('#accordion-inner').slideToggle();
        $('.accordion-title').addClass('active');
    }

}



