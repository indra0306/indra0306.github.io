window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

jQuery(document).ready(function() {
    if (jQuery('.aqua').length) {
        var words = [
                'Welcome',
                'To',
                'My Website',
            ],
            i = 0;

        setInterval(function() {
            jQuery('.aqua').fadeOut(function() {
                jQuery(this).html(words[i = (i + 1) % words.length]).fadeIn();
            });
        }, 2000);
    }
});



