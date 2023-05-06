
const goToTopButton = document.querySelector(".go-to-top-btn");
const rocketSmoke = document.querySelector(".rocketSmoke");
const rocketFire = document.querySelector(".rocketFire");

goToTopButton.addEventListener("click", () => {
  rocketSmoke.classList.add("hidden");
  rocketFire.classList.add("show");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = () => {
  if (window.scrollY > 300) {
    goToTopButton.classList.add("show");
  } else {
    goToTopButton.classList.remove("show");
    rocketFire.classList.remove("show");
    rocketSmoke.classList.remove("hidden");
  }
};