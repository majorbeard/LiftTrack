const navBarToggle = document.querySelector(".mobile-nav-toggle");
const navBarLine1 = document.querySelector(".bar-1");
const navBarLine2 = document.querySelector(".bar-2");
const navBarLine3 = document.querySelector(".bar-3");
const navBar = document.querySelector(".navbar");

navBarToggle.addEventListener("click", () => {
    navBarLine1.classList.toggle("bar-1-clicked");
    navBarLine2.classList.toggle("bar-2-clicked");
    navBarLine3.classList.toggle("bar-3-clicked");
    navBar.classList.toggle("navbar-clicked");
});

// Get all the question wrappers
const questionWrappers = document.querySelectorAll('.question-wrapper');

// Add a click event listener to each question wrapper
questionWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', toggleAnswer);
});

function toggleAnswer(event) {
  // Get the current question wrapper that was clicked
  const currentWrapper = event.currentTarget;

  // Find the answer wrapper for the current question wrapper
  const answerWrapper = currentWrapper.nextElementSibling;

  // Toggle the 'answer-wrapper_clicked' class to show/hide the answer
  answerWrapper.classList.toggle('answer-wrapper_clicked');

  // Find the question icon elements within the current wrapper
  const questionIcon = currentWrapper.querySelector('.question-icon');
  const questionIconLine1 = questionIcon.querySelector('.question-line_1');
  const questionIconLine2 = questionIcon.querySelector('.question-line_2');

  // Toggle the opacity and rotation of the question icon lines
  if (answerWrapper.classList.contains('answer-wrapper_clicked')) {
    questionIconLine1.style.opacity = '0';
    questionIconLine2.classList.add('question-line_2_rotated');
  } else {
    questionIconLine1.style.opacity = '1';
    questionIconLine2.classList.remove('question-line_2_rotated');
  }
}