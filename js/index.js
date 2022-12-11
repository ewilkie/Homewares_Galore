///////////////////////////////
// javascript for index page //
///////////////////////////////

// about us button read more 
const aboutReadMore = document.querySelector('.about_section-button');

aboutReadMore.addEventListener("click", function(){
  // toggle between show and hide of additional text  
  document.querySelector('.moreabout').classList.toggle('moreabout-toggle');

  // so that text can return to original when div hidden/closed
  const initialText = 'READ MORE';

  // switch between texts
  if (aboutReadMore.textContent.includes(initialText)) {
    aboutReadMore.textContent = 'HIDE';
  } else {
    aboutReadMore.textContent = initialText;
  }
});