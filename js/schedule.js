// p5js
let containerHeight = document.getElementById("myCanvas").offsetHeight;
let containerWidth = document.getElementById("myCanvas").offsetWidth;

let firstAnchorX = 100;
let firstAnchorY = 0;

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

  bezier(
    firstAnchorX,
    firstAnchorY,
    -containerWidth / 5,
    containerHeight / 1.7,
    containerWidth,
    containerHeight / 10,
    containerWidth + 20 - firstAnchorX,
    containerHeight / 2.2
  );

  if (containerHeight < 600 && containerWidth < 644) {
    bezier(
      containerWidth + 30 - firstAnchorX,
      containerHeight / 2.5,
      containerWidth + 20 - firstAnchorX,
      containerHeight / 1.5,
      firstAnchorX - 30,
      containerHeight / 2.9,
      firstAnchorX - 30,
      containerHeight / 1.6
    );
    bezier(
      firstAnchorX - 40,
      containerHeight / 1.8,
      firstAnchorX - 20,
      containerHeight - 20,
      containerWidth + 70,
      containerHeight / 2.5,
      containerWidth - firstAnchorX,
      containerHeight
    );
  } else {
    bezier(
      containerWidth + 30 - firstAnchorX,
      containerHeight / 2.5,
      containerWidth + 20 - firstAnchorX,
      containerHeight / 1.4,
      firstAnchorX - 20,
      containerHeight / 2.7,
      firstAnchorX - 20,
      containerHeight / 1.6
    );
    bezier(
      firstAnchorX - 20,
      containerHeight / 1.6,
      firstAnchorX - 20,
      containerHeight - 20,
      containerWidth,
      containerHeight / 2,
      containerWidth - firstAnchorX,
      containerHeight
    );
  }
}

function windowResized() {
  containerHeight = document.getElementById("myCanvas").offsetHeight;
  containerWidth = document.getElementById("myCanvas").offsetWidth;

  resizeCanvas(containerWidth, containerHeight);

  firstAnchorX = 100;
  firstAnchorY = 0;
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
