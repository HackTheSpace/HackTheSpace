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

const textEl = document.getElementById("title");
const text = "THINK. BUILD. LAUNCH.";
let idx = 0;
let direction = 1;
let animationDelay = 100; // milliseconds
let pauseDelay = 2000; // milliseconds

function writeText() {
  if (direction === 1) {
    textEl.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
      direction = -1;
      idx = text.length;
      setTimeout(writeText, pauseDelay);
      return;
    }
  } else if (direction === -1) {
    textEl.innerText = text.slice(0, idx);
    idx--;
    if (idx < 0) {
      direction = 1;
      idx = 0;
      setTimeout(writeText, pauseDelay);
      return;
    }
  }

  setTimeout(writeText, animationDelay);
}

writeText();

const load = document.getElementById("preloader");
const body = document.getElementById("body");

setTimeout(function loadcomplete() {
  load.style.opacity = 0;
  body.style.overflow = "auto";
}, 6000);

setTimeout(function loadcomplete() {
  load.style.display = "none";
}, 6200);
