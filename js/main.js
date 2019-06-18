document.addEventListener('DOMContentLoaded', function() {

const signIn = document.querySelector(".signin");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const submit = document.querySelector(".submit");
const user = document.querySelector("#user");
const password = document.querySelector("#pass");

// When the user presses the .signin button, display the modal window

signIn.addEventListener("click", function() {modal.style.display = "block"});

// When the user presses the .close button, hide the modal window

closeModal.addEventListener("click", function() {modal.style.display = "none"});

// When the user presses the .submit button, add an .error class to both input elements

submit.addEventListener("click", function(){ user.classList.add("error")});
submit.addEventListener("click", function(){ password.classList.add("error")});

// When the user puts their cursor in one of the input fields, remove the .error class

user.addEventListener("mouseover", function(){user.classList.remove("error")});
password.addEventListener("mouseover", function(){password.classList.remove("error")});
})

