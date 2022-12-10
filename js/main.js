  
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


// for modal
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal-div");

// open modal function
const openModal = function (event) {
  event.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModalBtn = document.querySelector(".contact");

// open modal event
openModalBtn.addEventListener("click", openModal);



const closeModalBtn = document.querySelector(".btn-close");

const closeModal = function (event) {

  event.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
