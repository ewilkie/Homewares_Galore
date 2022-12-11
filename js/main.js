

 
// to open and close the feedback div
const menuController = document.querySelector('.feedback-button');
menuController.addEventListener('click', function() {

  // toggle feedback open and close
  document.querySelector('.feedback-container').classList.toggle('feedback-open');
});


// feed back form error handling
function handleFormSubmission(event) {
  event.preventDefault();

  const inputError = document.querySelector('input[name="fname"]');
  const labelError = inputError.labels[0];

  if (inputError.value.length === 0) {
    labelError.textContent="Name cannot be empty";
    labelError.classList.add('red');
    inputError.classList.add('red-border');

  } else {
    labelError.textContent="Your Name";
    labelError.classList.remove('red');
    inputError.classList.remove('red-border');
  }

  const inputErrorMob = document.querySelector('input[name="mobile"]');
  const labelErrorMob = inputErrorMob.labels[0];
  
  if (inputErrorMob.value.length < 9) {
    labelErrorMob.textContent="Mobile cannot be less than 9 digits";
    labelErrorMob.classList.add('red');
    inputErrorMob.classList.add('red-border');

  } else {
    labelErrorMob.textContent="Mobile Number *";
    labelErrorMob.classList.remove('red');
    inputErrorMob.classList.remove('red-border');
  }

  const inputErrorEm = document.querySelector('input[name="email"]');
  const labelErrorEm = inputErrorEm.labels[0];
  
  if (inputErrorEm.value.includes("@") === false) {
    labelErrorEm.textContent="Not a valid email";
    labelErrorEm.classList.add('red');
    inputErrorEm.classList.add('red-border');

  } else {
    labelErrorEm.textContent="Email *";
    labelErrorEm.classList.remove('red');
    inputErrorEm.classList.remove('red-border');
  }

  const select = document.querySelector('select[name="select"]');
  const labelErrorSel = select.options[select.selectedIndex].value;
  const label = select.labels[0];

  if (labelErrorSel === "choose") {
    
    label.textContent="Need to make a selection";
    label.classList.add('red');
    select.classList.add('red-border');

  } else {
    label.textContent="You've made a valid selection";
    label.classList.remove('red');
    select.classList.remove('red-border');
  }

  const comments= document.querySelector('textarea[name="comments"]');
  const labelErrorCom = comments.labels[0];

  if (comments.value.length === 0) {
    labelErrorCom.textContent="Please enter some text";
    labelErrorCom.classList.add('red');
    comments.classList.add('red-border');

  } else {
    labelErrorCom.textContent="Comments accepted";
    labelErrorCom.classList.remove('red');
    comments.classList.remove('red-border');
  }

}


const applicationForm = document.querySelector('.feedback-form');
applicationForm.addEventListener('submit', handleFormSubmission);
 

/************ */
// for modal */
/*********** */
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



const closeModalBtn = document.querySelector(".modal-cls-button");

const closeModal = function (event) {

  event.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
