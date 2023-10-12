// Function to refresh the page
function refreshPage() {
    location.reload();
  }
  
    setInterval(refreshPage, 70000);

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


  var submitButton = document.getElementById('submitButton');
  const dropdown = document.getElementById('doctorDropdown');
  const selectedDoctorElement = document.getElementById('selectedDoctor');
  dropdown.addEventListener('change', () => {
    if(dropdown.value == "Dr. UNG GULIT" || dropdown.value == "Dr. BO VYNE" || dropdown.value == "Dr. MIA ELKE" || dropdown.value == "Dr. BESSIE VON COUL JR") {
      selectedDoctorElement.textContent = "You chose to schedule an appointment with " + dropdown.value + " for your cow's vet visit. Make sure you have completed all above fields BEFORE you submit!!!";
      submitButton.disabled = false;
    }
    else {
      selectedDoctorElement.textContent = "SYSTEM ERROR 1839JJ-181E9?";
      submitButton.disabled = true;
    }
  });


  
  var textInputFields = document.querySelectorAll('.input-field');
  
  
  textInputFields.forEach(function(inputField) {
    inputField.addEventListener('input', function() {
      var allFieldsFilled = Array.from(textInputFields).every(function(input) {
        return input.value.trim() !== '' && input.value.trim() !== input.getAttribute('value').trim();
      });
  
      submitButton.disabled = !allFieldsFilled || dropdown.value === "none";
    });
  });
  
  // Set the timer duration in seconds
  const timerDuration = 70;

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

  