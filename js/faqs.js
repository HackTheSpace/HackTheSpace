let questionButtons = document.querySelectorAll(
  ".faqs-section .container .question"
);
let answers = document.querySelectorAll(".faqs-section .container .answer");

// console.log(questionButtons);
questionButtons.forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    answers[ind].classList.toggle("active");

    answers.forEach((answer, index) => {
      if (index !== ind) {
        answer.classList.remove("active");
        questionButtons[index].classList.remove("active");
      }
    });
  });
});
