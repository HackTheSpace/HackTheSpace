// Get the parent element and the child elements
const parent = document.querySelector(".parent");
const children = document.querySelectorAll(".child");

console.log(parent);

// Calculate the angle between each child element
const angle = (2 * Math.PI) / children.length;

// Position each child element on the perimeter of the oval
for (let i = 0; i < children.length; i++) {
  const child = children[i];
  const childAngle = angle * i;

  child.style.top = `calc(var(--oval-height) / 2 - var(--child-size) / 2 - (var(--oval-height) / 2) * sin(${childAngle}))`;
  child.style.left = `calc(var(--oval-width) / 2 - var(--child-size) / 2 + (var(--oval-width) / 2) * cos(${childAngle}))`;

  // Add a click event listener to each child element
  child.addEventListener("click", () => {
    // Calculate the new angle for each child element
    for (let j = 0; j < children.length; j++) {
      const newChildAngle = angle * (j - i);
      children[
        j
      ].style.top = `calc(var(--oval-height) / 2 - var(--child-size) / 2 - (var(--oval-height) / 2) * sin(${newChildAngle}))`;
      children[
        j
      ].style.left = `calc(var(--oval-width) / 2 - var(--child-size) / 2 + (var(--oval-width) / 2) * cos(${newChildAngle}))`;
      children[j].classList.remove("active");
    }

    child.classList.add("active");
  });
}

// Set the initial rotation angle and the rotation increment
let rotationAngle = 0;
const rotationIncrement = 1;

// Add a wheel event listener to the parent element
parent.addEventListener("wheel", (event) => {
  // Calculate the new rotation angle based on the deltaY value of the event
  const deltaY = event.deltaY;
  const deltaAngle = deltaY > 0 ? rotationIncrement : -rotationIncrement;
  rotationAngle += deltaAngle;

  // Update the position of each child element based on the new rotation angle
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    child.classList.remove("active");
    const childAngle = angle * i + rotationAngle;
    const newChildAngle = angle * (i - Math.floor(rotationAngle / angle));

    child.style.top = `calc(var(--oval-height) / 2 - var(--child-size) / 2 - (var(--oval-height) / 2) * sin(${newChildAngle}))`;
    child.style.left = `calc(var(--oval-width) / 2 - var(--child-size) / 2 + (var(--oval-width) / 2) * cos(${newChildAngle}))`;
  }

  // Prevent the default scrolling behavior
  event.preventDefault();
});

// Get all the section elements on the page
const sections = document.querySelectorAll("section");
let sectionIndex = 0;

// Add a scroll event listener to the window object
window.addEventListener("scroll", () => {
  // Get the index of the section currently in view
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
      sectionIndex = 10 - i;
    }
    console.log("check", sectionIndex);
  }

  // Calculate the new angle for each child element based on the section index
  const newRotationAngle = (sectionIndex - 1) * angle;
  // console.log(newRotationAngle, sectionIndex, angle);

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const newChildAngle = angle * i + newRotationAngle;
    child.style.top = `calc(var(--oval-height) / 2 - var(--child-size) / 2 - (var(--oval-height) / 2) * sin(${newChildAngle}))`;
    child.style.left = `calc(var(--oval-width) / 2 - var(--child-size) / 2 + (var(--oval-width) / 2) * cos(${newChildAngle}))`;
  }
});

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
