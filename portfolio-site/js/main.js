window.sr = ScrollReveal();
sr.reveal('.foo', {duration: 700, scale: 1});
sr.reveal('.bar', {duration: 3500});
sr.reveal('.description', {duration: 1000, scale: 1, origin: 'top',distance: '30px',});
sr.reveal('.bucket', {duration: 700,  scale: .95, distance: '5px',});
sr.reveal('.card1', {duration: 500, scale: 1});
sr.reveal('.card2', {duration: 500, scale: 1, delay: 250});
sr.reveal('.card3', {duration: 500, scale: 1, delay: 500});
sr.reveal('.card4', {duration: 500, scale: 1, delay: 750});
sr.reveal('.boo', {duration: 1000, scale: 1, origin: 'top',distance: '30px',});



$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 485) {
            $('.second-nav').css('visibility','visible');
            $('.second-nav').slideDown('fast');
        }
        else {
            $('.second-nav').fadeOut('fast');
        }
    });
});
