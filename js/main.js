//accross
// for sale animation
/*
const categoryGridIndivAll = document.querySelectorAll('.category-grid-indiv');

for (let i=0; i < categoryGridIndivAll.length; i++) {

  //const categoryGridIndiv = categoryGridIndivAll[i]
  //const sale = document.querySelector('.sale');

  //const orgWidht = sale.style.width;

  categoryGridIndivAll[i].addEventListener("mouseover",  (event) => {
    // for response event 
    if (window.innerWidth > 760) {
      const sale = event.target.querySelector('.sale')
      if (sale !== null ){
        sale.style.width= "200px";
      }
     // alert(event.target.classList.contains('.saleplace'));
      //if(event.target.classList.contains(".sale")){

        //sale.style.width = "200px";
        //event.target.classList.toggle(".sale_expand");
      //}
      //categoryGridIndiv.offsetWidth
    }
  });

  //categoryGridIndivAll[i].addEventListener("mouseleave",  (event) => {
    // for response event 
    //if (window.innerWidth > 760) {
      //sale.style.width = orgWidht;
      //categoryGridIndiv.offsetWidth
  //  }
  //});

}
*/

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


// to open and close the feedback div
const menuController = document.querySelector('.feedback-button');
menuController.addEventListener('click', function() {

  // toggle feedback open and close
  document.querySelector('.feedback-container').classList.toggle('feedback-open');
});


// feed back form error handling
function handleFormSubmission(event) {
  event.preventDefault();

  const labelError = document.querySelector('label');
  const inputError = document.querySelector('input');

  labelError.innerText="Name cannot be empty";
  labelError.classList.add('red');
  inputError.classList.add('red-border');

  /*
  const nameErrorContainer = document.querySelector('.name-error-container');
  nameErrorContainer.innerText = '';
  
  const firstNameInputEl = document.querySelector('#lname');
  
  firstNameInputEl.style.borderColor = 'grey';
  
  if (firstNameInputEl.value.length <= 0) {
    nameErrorContainer.innerText = 'This field cannot be empty';
    firstNameInputEl.style.borderColor = 'red';
  }
  */

}

const applicationForm = document.querySelector('.feedback-form');
applicationForm.addEventListener('submit', handleFormSubmission);

