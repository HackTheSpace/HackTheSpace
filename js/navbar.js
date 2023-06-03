// mobile navbar setup
const openMobileNavBtn = document.getElementById("open-mobile-nav");
const closeMobileNavBtn = document.getElementById("close-mobile-nav");
const mobileNavLinks = document.getElementById("mobile-nav-links");

openMobileNavBtn.addEventListener("click", () => {
  // hide burger
  openMobileNavBtn.classList.remove("show");
  openMobileNavBtn.classList.add("hidden");

  // show close btn
  closeMobileNavBtn.classList.remove("hidden");
  closeMobileNavBtn.classList.add("show");

  // show the sidebar
  mobileNavLinks.style.transform = `translate(0%, 0)`;
});

closeMobileNavBtn.addEventListener("click", () => {
  // hide close btn
  closeMobileNavBtn.classList.remove("show");
  closeMobileNavBtn.classList.add("hidden");

  // show burger
  openMobileNavBtn.classList.remove("hidden");
  openMobileNavBtn.classList.add("show");

  // hide the sidebar
  mobileNavLinks.style.transform = `translate(100%, 0)`;
});
