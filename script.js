const menuEl = document.getElementById("menu");
const navigationEl = document.getElementById("navigation");

// Add onclick to the menu button

menuEl.onclick = () => {
  // Toggle the "active" class on the navigation and fa-xmark on menu elements

  // <i class="fa-solid fa-xmark"></i>
  menuEl.classList.toggle("fa-xmark");
  navigationEl.classList.toggle("active");
};
