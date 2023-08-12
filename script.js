// Javascript Code will go here 

// Back to Top button
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


// Components 
document.addEventListener("DOMContentLoaded", function() {
  loadComponent("components/nav.html", "nav");
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
}
