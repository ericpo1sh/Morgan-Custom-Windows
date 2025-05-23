document.addEventListener('DOMContentLoaded', () => {
  // Navbar JavaScript
  const menuRef = document.getElementById('navbar-menu');
  const overlayRef = document.getElementById('menu-overlay');
  const openMenuButton = document.getElementById('nav-mob-open');
  const closeMenuButton = document.getElementById('nav-mob-close');
  
  if (menuRef) { // Ensure menuRef is not null before accessing its properties
    const navLinks = menuRef.querySelectorAll('.nav-link');

    const openMenu = () => {
      if (menuRef) menuRef.style.right = "0";
      if (overlayRef) overlayRef.style.display = "block";
    };

    const closeMenu = () => {
      if (menuRef) menuRef.style.right = "-350px";
      if (overlayRef) overlayRef.style.display = "none";
    };

    if (openMenuButton) openMenuButton.addEventListener('click', openMenu);
    if (closeMenuButton) closeMenuButton.addEventListener('click', closeMenu);
    if (overlayRef) overlayRef.addEventListener('click', closeMenu);
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }


  // BookSection Form JavaScript
  const form = document.getElementById('book-assessment-form');
  const submitButton = document.getElementById('submit-form-button');

  if (form && submitButton) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      const formData = new FormData(event.target);
      formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_PLACEHOLDER"); 

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          alert("Form Submitted Successfully!");
          event.target.reset();
        } else {
          alert("Error: " + data.message);
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("Something went wrong. Please try again later.");
      }
      submitButton.disabled = false;
      submitButton.textContent = "Submit";
    });
  }

  // Footer Current Year
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});
