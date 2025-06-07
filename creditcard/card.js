function isCardNumberValid(number) {
    // For this assignment, only one card number is considered valid
    return number === '1234123412341234';
  }
  
  function displayError(msg) {
    // Show error message in the form
    document.querySelector('.errorMsg').innerHTML = msg;
  }
  
  function submitHandler(event) {
    event.preventDefault(); // Prevent page reload
  
    let errorMsg = '';
    displayError(''); // Clear old error messages
  
    // 'this' refers to the form
    const cardNumber = this.cardNumber.value.trim();
    const expMonth = this.expMonth.value.trim();
    let expYear = parseInt(this.expYear.value.trim()); // changed to let
    const monthNum = parseInt(expMonth);
  
    // Validate card number is numeric
    if (isNaN(cardNumber)) {
      errorMsg += 'Card number is not a valid number<br>';
    } else if (!isCardNumberValid(cardNumber)) {
      errorMsg += 'Card number is not a valid card number<br>';
    }
  
    // Convert short years like "25" to "2025"
    if (expYear < 100) {
      expYear += 2000;
    }
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // JS months are 0-indexed
  
    // Validate expiration date
    if (
      isNaN(monthNum) || monthNum < 1 || monthNum > 12 ||
      isNaN(expYear)
    ) {
      errorMsg += 'Expiration date is invalid<br>';
    } else if (
      expYear < currentYear ||
      (expYear === currentYear && monthNum < currentMonth)
    ) {
      errorMsg += 'Expiration date must be in the future<br>';
    }
  
    // If any errors, show them
    if (errorMsg !== '') {
      displayError(errorMsg);
      return false;
    }
  
    // Otherwise, it's valid
    alert('Form submitted successfully!');
    return true;
  }
  
  // Attach event listener to form when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#credit-card');
    if (form) {
      form.addEventListener('submit', submitHandler);
    }
  });
  