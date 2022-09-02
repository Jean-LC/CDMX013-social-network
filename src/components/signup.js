import { googleButton } from './googleButton.js';

export const signup = () => {
  const sectionSignup = document.createElement('section');
  sectionSignup.setAttribute('id', 'signupPage');

  // section signup header
  const headerSignup = document.createElement('header');
  headerSignup.setAttribute('class', 'register-header');

  // logo of the welcome page
  const imgLogoSignup = document.createElement('img');
  imgLogoSignup.setAttribute('src', './img/Logo-BookNet.png');
  imgLogoSignup.setAttribute('class', 'logo-booknet');

  // appends img to header
  headerSignup.appendChild(imgLogoSignup);

  // main of signup
  const mainSignup = document.createElement('main');
  mainSignup.setAttribute('class', 'register-main');

  // adds the buttons for signup with email or google
  const signupButtonsDiv = document.createElement('div');
  signupButtonsDiv.setAttribute('class', 'register-buttons-div');
  const emailSignupButton = document.createElement('button');
  emailSignupButton.setAttribute('class', 'email-button');
  emailSignupButton.textContent = 'Continue with email';
  const googleSignupButton = document.createElement('div');
  googleSignupButton.setAttribute('id', 'buttonDiv');

  // appends the googleButton module to the google signup button
  googleSignupButton.append(googleButton());

  // appends the signup div in main
  mainSignup.appendChild(signupButtonsDiv);

  // adds the buttons for signup to their div
  signupButtonsDiv.append(emailSignupButton, googleSignupButton);

  // adds dialog and form for a signup modal
  const signupModal = document.createElement('dialog');
  signupModal.setAttribute('class', 'signup-modal');
  const formSignupModal = document.createElement('form');
  formSignupModal.setAttribute('id', 'form-signup-modal');
  const emailSignupInput = document.createElement('input');
  emailSignupInput.setAttribute('type', 'text');
  emailSignupInput.setAttribute('placeholder', 'email');
  emailSignupInput.setAttribute('class', 'signup-input');
  const passSignupInput = document.createElement('input');
  passSignupInput.setAttribute('placeholder', 'password');
  passSignupInput.setAttribute('type', 'password');
  passSignupInput.setAttribute('class', 'signup-input');
  const cancelSignupButton = document.createElement('button');
  cancelSignupButton.setAttribute('class', 'modal-button');
  cancelSignupButton.setAttribute('id', 'cancel-signup-modal');
  cancelSignupButton.textContent = 'Back';
  const submitSignupButton = document.createElement('button');
  submitSignupButton.setAttribute('class', 'modal-button');
  submitSignupButton.setAttribute('id', 'submit-signup-modal');
  submitSignupButton.textContent = 'Enter';

  // appends the buttons and input text areas to form
  formSignupModal.append(emailSignupInput, passSignupInput, cancelSignupButton, submitSignupButton);

  // appends the form to the dialog tag
  signupModal.appendChild(formSignupModal);

  // appends the dialog to signup section
  mainSignup.appendChild(signupModal);

  // click listener for the emailLoginButton to show the loginModal
  emailSignupButton.addEventListener('click', () => {
    signupModal.showModal();
  }); 

  cancelSignupButton.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.close();
  }); 

  sectionSignup.append(headerSignup, mainSignup);
  return sectionSignup;
};