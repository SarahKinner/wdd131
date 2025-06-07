function isCardNumberValid(number) {
    // Accept only this exact card number for simplicity
    return number === '1234123412341234';
  }
  
  function displayError(msg) {
    document.querySelector('.errorMsg').textContent = msg;
  }
  
  function submitHandler(event) {
    event.preventDefault(); // stop form from submitting/reloading
    
    let errorMsg = '';
    displayError(''); // clear previous errors
  
    // Access the form that triggered the event via "this"
    const cardNumber = this.cardNumber.value.trim();
    const expMonth = this.expMonth.value.trim();
    const expYear = this.expYear.value.trim();
  
    // Check card number is numeric
    if (isNaN(cardNumber)) {
      errorMsg += 'Card number is not a valid number.\n';
    } else if (!isCardNumberValid(cardNumber)) {
      errorMsg += 'Card number is not a valid card number.\n';
    }
  
    // Validate expiration date is in the future
    const currentDate = new Date();
    const monthNum = Number(expMonth);
    const yearNum = Number(expYear);
  
    // Check if month and year are numbers and in valid range
    if (
      !Number.isInteger(monthNum) || monthNum < 1 || monthNum > 12 ||
      !Number.isInteger(yearNum) || yearNum < currentDate.getFullYear()
    ) {
      errorMsg += 'Expiration date is invalid.\n';
    } else {
      // Create date object for the last day of expiration month
      // Month in JS Date is 0-indexed, so subtract 1
      const expiryDate = new Date(yearNum, monthNum, 0); // last day of month
  
      if (expiryDate < currentDate) {
        errorMsg += 'Expiration date must be in the future.\n';
      }
    }
  
    if (errorMsg !== '') {
      displayError(errorMsg);
      return false; // stop submission
    }
  
    // If no errors, submit or further process here
    // For demo, just alert success or console.log
    alert('Form submitted successfully!');
    return true;
  }
  
  // Attach the event listener when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#credit-card');
    if (form) {
      form.addEventListener('submit', submitHandler);
    }
  });
  