// Function to refresh the page
function refreshPage() {
    location.reload();
  }
  
  // Refresh the page every 20 seconds (20000 milliseconds)
  setInterval(refreshPage, 20000);

  // document.addEventListener('DOMContentLoaded', function() {
  //   const textInput = document.getElementById('textInput');
  //   const submitButton = document.getElementById('submitButton');
  
  //   // Enable or disable the submit button based on text input
  //   textInput.addEventListener('input', function() {
  //     submitButton.disabled = textInput.value.trim() === '';
  //   });
  // });

  function openPopup() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    overlay.style.display = 'block';
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  
  function closePopup() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    overlay.style.display = 'none';
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  var couponButton = document.getElementById('couponButton');
  couponButton.addEventListener('click', openPopup);

  function openSuccessPopup() {
    var successPopup = document.getElementById('successPopup');
    successPopup.style.display = 'block';
    successPopup.style.top = '0';
    successPopup.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }

  function closeSuccessPopup() {
      var successPopup = document.getElementById('successPopup');
      successPopup.style.display = 'none';
      document.body.style.overflow = 'auto';
  }
  
  var textInputFields = document.querySelectorAll('.input-field');
  var submitButton = document.getElementById('submitButton');
  
  textInputFields.forEach(function(inputField) {
    inputField.addEventListener('input', function() {
      var allFieldsFilled = Array.from(textInputFields).every(function(input) {
        return input.value.trim() !== '' && input.value.trim() !== input.getAttribute('value').trim();
      });
  
      submitButton.disabled = !allFieldsFilled;
    });
  });
  
  // Set the timer duration in seconds
  const timerDuration = 20;

  let countdown = timerDuration;
  const countdownElement = document.getElementById('countdown');

  // Update the countdown element every second
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('timer').textContent = 'Time\'s up!';
    }
  }, 1000);
  