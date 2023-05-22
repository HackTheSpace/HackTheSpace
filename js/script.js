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

const text = "Think. Build. Launch.";
let idx = 6;
let speed = 100;

function writeText() {
  console.log(textEl);
  textEl.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

writeText();
