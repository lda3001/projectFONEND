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

function FallinOut(targetId) {
    var x = document.getElementById(targetId);

    if (x.style.display === "block") {
        $('#' + targetId).slideToggle();
        $('#' + targetId).prev('.accordion-title').removeClass('active');
    } else {
        $('#' + targetId).slideToggle();
        $('#' + targetId).prev('.accordion-title').addClass('active');
    }
}




