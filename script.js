// Javascript Code will go here 

// Components - This code loads the components from separate HTML file (e.g. header and footer) and injects the code into designated container elements in the main HTML page. 
// Purpose: For organising and maintaining consistent structure to multiple pages and easier code maintenance.
document.addEventListener("DOMContentLoaded", function() {
  loadComponent("components/header.html", "header");
  loadComponent("components/footer.html", "footer");
});

function loadComponent(componentUrl, containerId) {
  var container = document.getElementById(containerId);
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        container.innerHTML = xhr.responseText;
      } else {
        console.error("Error loading component:", componentUrl);
      }
    }
  };
  
  xhr.open("GET", componentUrl, true);
  xhr.send();
};

// Hamburger Menu
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });


  document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }));
});


// Back to Top button
// Purpose: For accesibility, convenience and UI/UX.
const backToTopButton = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Subscribe Button - Landing Page
document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("subscription-popup");
  const openPopupButton = document.getElementById("open-popup");
  const closePopupButton = document.getElementById("close-popup");
  const thankYouMessage = document.getElementById("thank-you-message");
  const subscribeForm = document.getElementById("subscribe-form");
  const emailInput = document.getElementById("email");
  const emailErrorMessage = document.getElementById("email-error");
  const invalidEmailMessage = document.getElementById("invalid-email-error");

  openPopupButton.addEventListener("click", function() {
    popup.style.display = "flex";
  });

  closePopupButton.addEventListener("click", function() {
    popup.style.display = "none";
    thankYouMessage.style.display = "none"; // Hide thank you message on close
  });

  subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
      emailErrorMessage.style.display = "block";
      invalidEmailMessage.style.display = "none";
    } else if (!isValidEmail(emailValue)) {
      emailErrorMessage.style.display = "none";
      invalidEmailMessage.style.display = "block";
    } else {
      emailErrorMessage.style.display = "none";
      invalidEmailMessage.style.display = "none";

      // Simulate successful subscription for demonstration
      // In real use, you would likely submit form data to a server
      thankYouMessage.style.display = "block"; // Display thank you message
      emailInput.value = ""; // Clear the input field
    }
  });

  emailInput.addEventListener("input", function() {
    emailErrorMessage.style.display = "none";
    invalidEmailMessage.style.display = "none";
  });

  // This function is to validate whether a given email address is in a valid format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

// Modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});

