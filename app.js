// slideshow function
const $slideshow = $('.js-slideshow');

$slideshow.slick({
  centerMode: true,
  centerPadding: '60px',
  arrows: false,
  slidesToShow: 3,
  variableWidth: true,
  responsive: [
    // {
    //   breakpoint: 1400,
    //   settings: {
    //     arrows: false,
    //     centerMode: true,
    //     centerPadding: '40px',
    //     slidesToShow: 3,
    //   }
    // },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        variableWidth: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        variableWidth: true,
        slidesToShow: 1
      }
    }
  ]
});


const $nextButton = $('.slick-next');
const onNextButtonClick = () => {
	$slideshow.slick('slickNext');
	console.log(onNextButtonClick)
}

$nextButton.click(onNextButtonClick)

const $prevButton = $('.slick-prev');
const onPrevButtonClick = () => {
  $slideshow.slick('slickPrev');
  console.log(onPrevButtonClick)
}

$prevButton.click(onPrevButtonClick)

// menu transition
$('.autumn.leaf')
  .transition('horizontal flip')
;

// Contact modal
$('.ui.modal')
  .modal({
    blurring: true
});

const $contact = $('.ctn-modal');

const $contactModalClick =() => {
  $('.ui.modal.contact-wrapper').modal('show');
  console.log($contactModalClick)
}

$contact.click($contactModalClick)
$('form').form('clear');

// image modal
const $image = $('.popup-img');
const myModal =$('.ui.modal.full-img')
const $modalImg = $('.ui.modal img')


const $imageModalClick =() => {
  event.preventDefault();
  $modalImg.attr('src',);
  myModal.modal('show');
  console.log($imageModalClick)
}

$image.click($imageModalClick)


