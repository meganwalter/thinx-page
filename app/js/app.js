var cartQty = 0;
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    center: true,
    dots:true,
    dotsEach: true,
    items: 1
  });
});

$('.add-qty').click(function () {
  cartQty ++;
  $('#quantity').text(cartQty);
  $('#quantity-m').text(cartQty);
});
$('.minus-qty').click(function () {
  if(cartQty > 0){    
    cartQty --;
    $('#quantity').text(cartQty);
    $('#quantity-m').text(cartQty);
  }
});

var container = $('.img-col')[0];
var posClass = 'under';
var cols = $('.fixed-cols');

function onScroll() {
  // Get the viewport props
  var vh = window.innerHeight;
  var vy = window.pageYOffset;

  // Get the container props
  var bounds = container.getBoundingClientRect().height;
  var ct = bounds.top
  var cb = bounds.bottom;

  if( (bounds - vy) >= vh) {
    $.each(cols, function (i, el) {
      el.classList.remove('absolute-cols')
    });
  } else if ( (bounds - vy) < vh) {
    $.each(cols, function (i, el) {
      el.classList.add('absolute-cols')
    });
  }
}

window.addEventListener('scroll', onScroll, false);
onScroll();

$(document).ready(function () {
  $('#quantity').text(cartQty);
  $('#quantity-m').text(cartQty);
});
