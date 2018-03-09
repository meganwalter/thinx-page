var cartQty = 0;

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

function setTopOfRelated() {
  var $relatedContainer = $('.related-container')[0];
  var imgHeight = container.getBoundingClientRect().height + 'px';
  $('.related-container').css('top', imgHeight);
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop:true,
    center: true,
    dots:true,
    dotsEach: true,
    items: 1
  });

  $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

  $('#quantity').text(cartQty);
  $('#quantity-m').text(cartQty);
  setTopOfRelated();
  window.addEventListener('resize', setTopOfRelated, false);
});
