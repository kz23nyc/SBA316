const form = document.getElementById("registrationForm");
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const zip = document.getElementById('zip');
const selectCountry = document.getElementById('selectCountry');
const seminarTopic = document.getElementById('seminarTopic');
const confirmationMessage = document.getElementById('confirmationMessage');
const aiImage = document.getElementById('aiImage');
const cybersecurity = document.getElementById('cybersecurity');

form.addEventListener("submit", validate);

// The big validation function.

function validate(evt) {
    const nameVal = validateName();
    if (nameVal === false) {
      evt.preventDefault();
      return false;
    }
  
    const emailVal = validateEmail();
    if (emailVal === false) {
        evt.preventDefault();
      return false;
    }
  
    const zipVal = validateZip();
    if (zipVal === false) {
      evt.preventDefault();
      return false;
    }
  
    const countryVal = validateCountry();
    if (countryVal === false) {
        evt.preventDefault();
      return false;
    }
  
    const seminarTopicVal = validateSeminarTopic();
    if (seminarTopicVal === false) {
      evt.returnValue = false;
      return false;
    }
  
    alert(`Name: ${nameVal}
  Email: ${emailVal}
  Country: ${countryVal}
  Zip Code: ${zipVal}`);
  
    return true;
  }

 // Simple email validation. 
function validateEmail() {
    let emailVal = email.value;
  
    if (emailVal === "") {
      alert("Please provide an email.");
      email.focus();
      return false;
    }
  
    const atpos = emailVal.indexOf("@");
    const dotpos = emailVal.lastIndexOf(".");
  
    if (atpos < 1) {
      alert(
        "Your email must include an @ symbol which must not be at the beginning of the email."
      );
      email.focus();
      return false;
    }
  
    if (dotpos - atpos < 2) {
      alert(
        "Invalid structure: @.\nYou must include a domain name after the @ symbol."
      );
      email.focus();
      return false;
    }
  
    return emailVal;
  }


// Name Validation
function validateName() {
    if (fullName.value === "") {
      alert("Please provide a name.");
      fullName.focus();
      return false;
    }
    return fullName.value;
  }

// Country Validation  
function validateCountry() {
    if (selectCountry.value === "") {
      alert("Please provide a country.");
      selectCountry.focus();
      return false;
    }
    return selectCountry.value;
  }

  // SeminarTopic Validation  
function validateSeminarTopic() {
    if (seminarTopic.value === "") {
      alert("Please choose a topic.");
      seminarTopic.focus();
      return false;
    }
    return seminarTopic.value;
  }

  //Zip Code Validation
function validateZip() {
    if (zip.value === "") {
      alert("Please provide a zip code.");
      zip.focus();
      return false;
    }
  
    if (zip.value.length !== 5 || isNaN(Number(zip.value))) {
      alert("Zip codes must be in the format #####.");
      zip.focus();
      return false;
    }
  
    return zip.value;
  }

  //reference formValidation