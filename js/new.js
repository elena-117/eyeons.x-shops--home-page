$(document).ready(function () {
  $('.carousel-brand-block').owlCarousel({
    loop: true,
    smartSpeed: 250,
    fluidSpeed: true,
    touchDrag: true,
    center: true,
    margin: 44,
    navText: [
      '<img src="../img/carousel-arrows/arrow-left.png">',
      '<img src="../img/carousel-arrows/arrow-right.png">',
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
        center: true,
        margin: 10,
      },
      468: {
        items: 3,
        center: true,
        margin: 10,
      },
      576: {
        items: 4,
        center: false,
        margin: 40,
      },
      768: {
        items: 5,
        center: true,
        margin: 40,
      },
      992: {
        items: 6,
        center: false,
        margin: 44,
      },
      1200: {
        items: 7,
        center: true,
        margin: 44,
      },
    },
  });

  $('.carousel-shop-by-shapes').owlCarousel({
    loop: true,
    smartSpeed: 250,
    center: true,
    margin: 140,
    navText: [
      '<img src="../img/carousel-arrows/arrow-left.png">',
      '<img src="../img/carousel-arrows/arrow-right.png">',
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
        center: true,
        margin: 28,
      },
      576: {
        items: 3,
        center: true,
        margin: 40,
      },
      768: {
        items: 3,
        center: true,
        margin: 60,
      },
      992: {
        items: 3,
        center: true,
        margin: 100,
      },
      1200: {
        items: 3,
        center: true,
        margin: 140,
      },
    },
  });

  $('#btnViewMore').on('click', function () {
    var dots = document.getElementById('descriptionDots');
    var moreText = document.getElementById('descriptionMore');
    var btnText = document.getElementById('btnViewMore');

    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'View more';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'View less';
      moreText.style.display = 'inline';
    }
  });
});
