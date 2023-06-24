// p5js
let containerHeight = document.getElementById("myCanvas").offsetHeight;
let containerWidth = document.getElementById("myCanvas").offsetWidth;

let leftContainerTop =
  document.querySelector(".time-container-left").offsetTop + 80;
let rightContainerTop =
  document.querySelector(".time-container-right").offsetTop + 80;
let leftContainerLeft =
  document.querySelector(".time-container-left").offsetLeft + 50;

let Height = rightContainerTop - leftContainerTop;
let Width = document.querySelector(".time-container-left").offsetWidth;

let noOfLeftToRight = 6;
let noOfRightToLeft = 5;

function setup() {
  let myCanvas = createCanvas(containerWidth, containerHeight);
  myCanvas.parent("myCanvas");

  stroke(255);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(0);
  setLineDash([8, 8]);
  curve(
    leftContainerLeft,
    rightContainerTop,
    leftContainerLeft + 20,
    0,
    leftContainerLeft,
    leftContainerTop,
    Width,
    0
  );

  for (let i = 0, j = -1; i < noOfLeftToRight; i++, j += 2) {
    bezier(
      leftContainerLeft,
      rightContainerTop + Height * j,
      leftContainerLeft,
      rightContainerTop + Height * 2 * i,
      Width,
      rightContainerTop + Height * j,
      Width,
      rightContainerTop + Height * 2 * i
    );
  }

  for (let i = 0, j = -2; i < noOfRightToLeft; i++, j += 2) {
    bezier(
      Width,
      rightContainerTop + Height * 2 * i,
      Width,
      rightContainerTop + Height * (3 + j),
      leftContainerLeft,
      rightContainerTop + Height * 2 * i,
      leftContainerLeft,
      rightContainerTop + Height * (3 + j)
    );
  }

  curve(
    leftContainerLeft,
    rightContainerTop,
    Width,
    rightContainerTop + Height * 10,
    Width - 400,
    containerHeight,
    Width,
    0
  );
}

function windowResized() {
  containerHeight = document.getElementById("myCanvas").offsetHeight;
  containerWidth = document.getElementById("myCanvas").offsetWidth;

  if (containerWidth > 653) {
    leftContainerTop =
      document.querySelector(".time-container-left").offsetTop + 80;
    rightContainerTop =
      document.querySelector(".time-container-right").offsetTop + 80;
    leftContainerLeft =
      document.querySelector(".time-container-left").offsetLeft + 50;
  } else {
    leftContainerTop =
      document.querySelector(".time-container-left").offsetTop + 60;
    rightContainerTop =
      document.querySelector(".time-container-right").offsetTop + 60;
    leftContainerLeft =
      document.querySelector(".time-container-left").offsetLeft + 35;
  }
  Height = rightContainerTop - leftContainerTop;
  Width = document.querySelector(".time-container-left").offsetWidth;

  resizeCanvas(containerWidth, containerHeight);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
