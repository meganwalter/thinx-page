$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    center: true,
    dots:true,
    dotsEach: true,
    items: 1
  });
});

$('.owl-item').click(function () {
  $(".owl-carousel").trigger('to.owl.carousel', [$(this).index(), 300]);
});
