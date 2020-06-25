// $(document).ready(function(e){
//     $win = $(window);
//     $navbar = $('#header');
//     $toggle = $('.toggle-button');
//     var width = $navbar.width();
//     toggle_onclick($win, $navbar, width);

//     // resize event
//     $win.resize(function(){
//         toggle_onclick($win, $navbar, width);
//     });

//     $toggle.click(function(e){
//         $navbar.toggleClass("toggle-left");
//     })

// });

// function toggle_onclick($win, $navbar, width){
//     if($win.width() <= 768){
//         $navbar.css({left: `-${width}px`});
//     }else{
//         $navbar.css({left: '0px'});
//     }
// }

var typed = new Typed('#typed', {
    strings: [
        'Student',
        'Study at Islamic University of Riau'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        'Student',
        'Study at Islamic University of Riau'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// // event pada saat link di klik
// $('.page-scroll').on('click', function (e) {

//     // ambil isi href
//     var tujuan = $(this).attr('href');
//     // tangkap elemen yang bersangkutan
//     var elemenTujuan = $(tujuan);

//     //pindahkan scroll
//     $('html,body').animate({ scrollTop: elemenTujuan.offset().top - 50 }, 1250, 'easeInOutExpo');

//     e.preventDefault();
// });


