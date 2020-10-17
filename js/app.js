$('.pj-show').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
var filtered = false;
$('.js-filter').on('click', function () {
    if (filtered === false) {
        $('.filtering').slick('slickFilter', ':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});

$('.navbar-toggler').click(function () {
    $('.navbar-toggler span').toggleClass('feather-x').toggleClass('feather-menu');
})

let prevpos = $(window).scrollTop();
$(window).scroll(() => {
    let curpos = $(window).scrollTop();
    if (curpos > prevpos) {
        // $('.navi').css('top', '-50px')
        $('.navi').removeClass('smooth-show');
        $('.navi').addClass('smooth-hide')
    } else {
        // $('.navi').css('top', '0px')
        $('.navi').removeClass('smooth-hide');
        $('.navi').addClass('smooth-show');

    }
    prevpos = curpos;
    let totalH = document.documentElement.scrollHeight;
    let topH = document.documentElement.clientHeight;
    let H = totalH - topH;
    let scroll = document.documentElement.scrollTop || document.body.scrollHeight;
    let scrolled = (scroll / H) * 100;
    $('.pro').css('width', scrolled + '%');
    if (scroll == 0) {
        $('.pro').css('width', '0');
    }
    console.log(scroll);
})

