// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Initialize Alpine.js
    Alpine.start();
  
    // Your custom JavaScript code here
    
    // Add event listeners for the next and previous buttons
    const nextButtons = document.querySelectorAll('.button-next');
    const prevButtons = document.querySelectorAll('.button-prev');
  
    nextButtons.forEach(button => {
      button.addEventListener('click', function() {
        changeStep(1);
      });
    });
  
    prevButtons.forEach(button => {
      button.addEventListener('click', function() {
        changeStep(-1);
      });
    });
  
    function changeStep(stepIncrement) {
      const currentStepElement = document.querySelector('[x-data="{ step: 1 }"]');
      const currentStep = parseInt(currentStepElement.getAttribute('x-data').split(':')[1]);
  
      const newStep = currentStep + stepIncrement;
      currentStepElement.setAttribute('x-data', `{ step: ${newStep} }`);
    }
  });
  