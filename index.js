const form = document.getElementById("registrationForm");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const zip = document.querySelector("#zip");
const selectCountry = document.querySelector("#selectCountry");
const seminarTopic = document.querySelector("#seminarTopic");
const confirmationMessage = document.querySelector("#confirmationMessage");
const aiImage = document.querySelector("#aiImage");
const cybersecurity = document.querySelector("#cybersecurity");

form.addEventListener("submit", validate);
aiImage.addEventListener("click", () => {
  alert("AI Image Clicked!");
});
cybersecurity.addEventListener("click", () => {
  alert("Cybersecurity Image Clicked!");
});

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
    evt.preventDefault();
    return false;
  }

  confirmationMessage.innerHTML = `<p>Thank you, ${nameVal}, for registering for the ${seminarTopicVal} seminar!</p>`;
  confirmationMessage.classList.add("confirmation-style");

  aiImage.addEventListener("click", () => {
    aiImage.setAttribute("alt", "AI Seminar Image");
  });

  cybersecurity.addEventListener("click", () => {
    cybersecurity.setAttribute("alt","Cybersecurity Image");
  });
  
  return true;
}

// Simple email validation.
function validateEmail() {
  let emailVal = email.value;
  if (emailVal === "") {
    email.classList.add("error");
    email.nextElementSibling.textContent = "Please provide an email.";
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

// Navigate to the parent of the form
const formParent = form.parentNode;

// Navigate to the next sibling of the form
const formNextSibling = form.nextElementSibling;

// Iterate over all input elements and log their values
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  console.log(input.value);
});

// Create a new paragraph element
const newParagraph = document.createElement("p");
newParagraph.textContent = "Thank you for registering!";
confirmationMessage.appendChild(newParagraph);

// Use the DocumentFragment Interface to create templated content
const template = document.createElement("template");
template.innerHTML = `
  <div class="template-content">
    <p>Further information, contact registration@techs.com!</p>
  </div>
`;

const fragment = document.createDocumentFragment();
const clonedContent = template.content.cloneNode(true);
fragment.appendChild(clonedContent);
document.body.appendChild(fragment);
