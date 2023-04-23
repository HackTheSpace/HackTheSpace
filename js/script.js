
const goToTopButton = document.querySelector(".go-to-top-btn");

goToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = () => {
  if (window.scrollY > 300) {
    goToTopButton.classList.add("show");
  } else {
    goToTopButton.classList.remove("show");
  }
};