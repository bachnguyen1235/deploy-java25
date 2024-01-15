$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 25, //khoảng  cách giữa các phần tử
        nav: true, //thanh điều hướng
        dots: true, //dấu chấm
        autoplay: true,
        autoplaytimeout: 5000,
        responsive: { // tương thích trên các màn hình
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })
});