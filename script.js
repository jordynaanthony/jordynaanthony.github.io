// Function to check if all fields are filled
function areAllFieldsFilled() {
    return Array.from(textInputFields).every(function (input) {
      return input.value.trim() !== '' && input.value.trim() !== input.getAttribute('value').trim();
    });
  }
  
  // Function to check if a valid doctor is selected
  function isValidDoctor(doctorName) {
    const validDoctors = ["Dr. UNG GULIT", "Dr. BO VYNE", "Dr. MIA ELKE", "Dr. BESSIE VON COUL JR"];
    return validDoctors.includes(doctorName);
  }
  
  // Function to refresh the page
  function refreshPage() {
    location.reload();
  }
  
  setInterval(refreshPage, 75000);
  
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
  
  var valid_doctor;
  var submitButton = document.getElementById('submitButton');
  const dropdown = document.getElementById('doctorDropdown');
  const selectedDoctorElement = document.getElementById('selectedDoctor');
  dropdown.addEventListener('change', () => {
    valid_doctor = isValidDoctor(dropdown.value);
  
    if (valid_doctor) {
      selectedDoctorElement.textContent = "You chose to schedule an appointment with " + dropdown.value + " for your cow's vet visit. Make sure you have completed all above fields BEFORE you submit!!!";
    } else {
      selectedDoctorElement.textContent = "SYSTEM ERROR 1839JJ-181E9?";
    }
  
    submitButton.disabled = !areAllFieldsFilled() || !valid_doctor;
  });
  
  var textInputFields = document.querySelectorAll('.input-field');
  
  textInputFields.forEach(function (inputField) {
    inputField.addEventListener('input', function () {
      submitButton.disabled = !areAllFieldsFilled() || !valid_doctor;
    });
  });
  
  // Set the timer duration in seconds
  const timerDuration = 75;
  
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
  