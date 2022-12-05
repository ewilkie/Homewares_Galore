// Slideshow/ carousell javascript 
/*
var slideIndex = 1;
showSlides(slideIndex);

var timer;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (timer) {
    clearTimeout(timer);
  }
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout( function(){ plusSlides(1); }, 3000 );
}
*/ 

// about us button read more 
const aboutReadMore = document.querySelector('.about_section-button');

aboutReadMore.addEventListener("click", function(){
  document.querySelector('.moreabout').classList.toggle('moreabout-toggle');

 
  const initialText = 'READ MORE';

  if (aboutReadMore.textContent.includes(initialText)) {
    aboutReadMore.textContent = 'HIDE';
  } else {
    aboutReadMore.textContent = initialText;
  }
});


/* for the feedback container
const menuController = document.getElementById('feedback-container');
menuController.addEventListener('click', function() {
  
  // setAttribute way
  // Warning: This over-writes previous classes. Use add/remove/toggle to impact just one class
  //document.querySelector('.menu').setAttribute('class', 'menu menu-open');

  // classList way
  document.querySelector('.feedback-container').classList.toggle('menu-open');
});
*/