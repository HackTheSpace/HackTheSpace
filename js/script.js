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

// const textEl = document.getElementById("title");

// const text = "Think. Build. Launch.               ";
// let idx = 6;
// let speed = 100;

// console.log(text.slice(text.length, 0));

// function writeText() {
//   textEl.innerText = text.slice(0, idx);
//   idx++;

//   // console.log(textEl, idx);
//   if (idx > text.length) {
//     idx = 1;
//   }

//   setTimeout(writeText, speed);
// }

// writeText();

const textEl = document.getElementById("title");
const text = "Think. Build. Launch.";
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
