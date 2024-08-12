document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");
  const toggleButton = document.querySelector("#mydocs .toggle-button");
  const toggleContent = document.querySelector("#mydocs .toggle-content");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
  toggleButton.addEventListener("click", function () {
    toggleContent.classList.toggle("show");
  });

});
