document.addEventListener('DOMContentLoaded', function () {
    var progressBar = document.getElementById('progressBar');

    window.onscroll = function () {
        updateProgressBar();
    };

    function updateProgressBar() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    }
});


$(document).ready(function(){
    $('#menu-icon').click(function(){
        $('.main-menu').slideToggle();
    })
})



