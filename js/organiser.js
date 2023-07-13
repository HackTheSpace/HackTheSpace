const team1 = document.querySelectorAll(".marquee a");
const para = document.querySelector(".team-para");
const head = document.querySelector(".team-name");

const defaultHeadText = head.innerText;
const defaultParaText = para.innerHTML;

let isHovered = false;

team1.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        isHovered = true;
        console.log(item.dataset.head, item.dataset.para);
        updateContent(item.dataset.head, item.dataset.para);
    });

    item.addEventListener("mouseleave", () => {
        isHovered = false;
        updateContent(defaultHeadText, defaultParaText);
    });
});

function updateContent(headText, paraText) {
    console.log(headText, paraText);

    requestAnimationFrame(() => {
        para.textContent = paraText;
        head.textContent = headText;
    });
}

// const team1 = document.querySelectorAll(".marquee a img");
// const para = document.querySelector(".team-para");
// const head = document.querySelector(".team-name");

// console.log(team1);

// team1.forEach((item) => {
//     item.addEventListener(
//         "mouseenter",
//         () => {
//             console.log("123");
//             para.innerHTML = item.dataset.para;
//             head.innerText = item.dataset.head;
//         },
//         false
//     );
// });

// team1.forEach((item) => {
//     item.addEventListener(
//         "mouseleave",
//         () => {
//             console.log("123");
//             head.innerText = "Core Team";
//             para.innerHTML = "Thanks to all who worked for it";
//         },
//         false
//     );
// });
