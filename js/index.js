// about us button read more 
const aboutReadMore = document.querySelector('.about_section-button');

aboutReadMore.addEventListener("click", function(){
  document.querySelector('.moreabout').classList.toggle('moreabout-toggle');

  // so that text can return to original when div hidden/closed
  const initialText = 'READ MORE';

  if (aboutReadMore.textContent.includes(initialText)) {
    aboutReadMore.textContent = 'HIDE';
  } else {
    aboutReadMore.textContent = initialText;
  }
});