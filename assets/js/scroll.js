$('.page-scroll').on('click', function(e){
    
    //ambil isi href
    var tujuan  = $(this).attr('href');
    
    //tangkap elemet yang bersangkutan
    var elemenTujuan  = $(tujuan);

    //pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 55  

    }, 500, 'swing');


    e.preventDefault();


});




