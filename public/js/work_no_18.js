function sketchWorkNo18(p) {
  const mode = p._userNode;
  const heightAndWidth = 1000;
  let centerPoint;

  // shape two animation
  let shapeTwoAngle = 0;
  let shapeTwoPause = 0;

  let mainAnimatedAngle = 0;

  const arrowTop = p.createVector(10 / 20, 2 / 20);
  const arrowBottomRight = p.createVector(18 / 20, 18 / 20);
  const arrowBottom = p.createVector(10 / 20, 14 / 20);
  const arrowBottomLeft = p.createVector(2 / 20, 18 / 20);

  const diamondTop = p.createVector(10 / 20, 6 / 20);
  const diamondRight = p.createVector(18 / 20, 10 / 20);
  const diamondBottom = p.createVector(10 / 20, 14 / 20);
  const diamondLeft = p.createVector(2 / 20, 10 / 20);

  function drawArrow(angle) {
    // create the points
    let arrowPoints = [];
    // top of the arrow
    arrowPoints.push(
      p.createVector(arrowTop.x * p.width, arrowTop.y * p.height),
    );
    // bottom right of the arrow
    arrowPoints.push(
      p.createVector(
        arrowBottomRight.x * p.width,
        arrowBottomRight.y * p.height,
      ),
    );
    // bottom of the arrow
    arrowPoints.push(
      p.createVector(arrowBottom.x * p.width, arrowBottom.y * p.height),
    );
    // bottom left of the arrow
    arrowPoints.push(
      p.createVector(arrowBottomLeft.x * p.width, arrowBottomLeft.y * p.height),
    );

    p.push();
    // rotate the points
    p.translate(centerPoint.x, centerPoint.y);
    p.rotate(angle);
    p.translate(-centerPoint.x, -centerPoint.y);

    for (let i = 0; i < arrowPoints.length - 1; i++) {
      p.line(
        arrowPoints[i].x,
        arrowPoints[i].y,
        arrowPoints[i + 1].x,
        arrowPoints[i + 1].y,
      );
    }
    p.line(
      arrowPoints[0].x,
      arrowPoints[0].y,
      arrowPoints[arrowPoints.length - 1].x,
      arrowPoints[arrowPoints.length - 1].y,
    );
    p.pop();
  }

  function drawDivided(shape, angle, divisions, scalingFactor, addThickLine) {
    let scaling = 1;
    for (let i = 0; i < divisions; i++) {
      p.push();
      if (addThickLine) {
        if (i === 0) {
          p.stroke(237, 161, 30);
          p.strokeWeight(10 / scaling);
        } else if (i === 8) {
          p.stroke(252, 80, 80);
          p.strokeWeight(5 / scaling);
        } else {
          p.strokeWeight(1 / scaling);
        }
      }else {
          p.strokeWeight(1 / scaling);
      }

      p.translate(centerPoint.x, centerPoint.y);
      p.scale(scaling);
      p.translate(-centerPoint.x, -centerPoint.y);
      shape(angle);
      p.pop();
      scaling -= scalingFactor;
    }
  }

  function drawDiamond(angle) {
    // create the points
    let diamondPoints = [];
    // top of the diamond
    diamondPoints.push(
      p.createVector(diamondTop.x * p.width, diamondTop.y * p.height),
    );
    // right of the diamond
    diamondPoints.push(
      p.createVector(diamondRight.x * p.width, diamondRight.y * p.height),
    );
    // bottom of the diamond
    diamondPoints.push(
      p.createVector(diamondBottom.x * p.width, diamondBottom.y * p.height),
    );
    // left of the diamond
    diamondPoints.push(
      p.createVector(diamondLeft.x * p.width, diamondLeft.y * p.height),
    );

    // rotate the points
    p.translate(centerPoint.x, centerPoint.y);
    p.rotate(angle);
    p.translate(-centerPoint.x, -centerPoint.y);

    for (let i = 0; i < diamondPoints.length - 1; i++) {
      p.line(
        diamondPoints[i].x,
        diamondPoints[i].y,
        diamondPoints[i + 1].x,
        diamondPoints[i + 1].y,
      );
    }
    p.line(
      diamondPoints[0].x,
      diamondPoints[0].y,
      diamondPoints[diamondPoints.length - 1].x,
      diamondPoints[diamondPoints.length - 1].y,
    );
  }

  function animateShapeTwo(divided) {
    if (shapeTwoAngle >= 180) {
      // pause for 90 frames
      shapeTwoPause++;
      if (shapeTwoPause > 120) {
        shapeTwoAngle = 0;
        shapeTwoPause = 0;
      }
    } else {
      shapeTwoAngle += 1;
    }
    if (divided) {
      drawDivided(drawArrow, shapeTwoAngle, 10, 0.1);
    } else {
      drawArrow(shapeTwoAngle);
    }
  }

  p.setup = () => {
    p.angleMode(p.DEGREES);
    p.createCanvas(heightAndWidth, heightAndWidth);
    centerPoint = p.createVector(p.width / 2, p.height / 2);
  };

  p.draw = () => {
    p.background(223, 214, 178);
    if (mode === "shape-1") {
      drawArrow(0);
    }
    if (mode === "shape-2") {
      drawArrow(0);
      animateShapeTwo();
    }
    if (mode === "shape-3") {
      drawDiamond(0);
    }
    if (mode === "main-shape") {
      drawArrow();
      animateShapeTwo(false);
      drawDiamond();
    }
    if (mode === "shape-1-divided") {
      drawDivided(drawArrow, 0, 10, 0.1);
    }
    if (mode === "shape-2-divided") {
      drawDivided(drawArrow, 0, 10, 0.1);
      animateShapeTwo(true);
    }
    if (mode === "shape-3-divided") {
      drawDivided(drawDiamond, 0, 10, 0.1);
    }
    if (mode === "main-shape-divided") {
      drawDivided(drawArrow, 0, 14, 0.075);
      drawDivided(drawArrow, 180, 14, 0.075);
      drawDivided(drawDiamond, 0, 14, 0.075);
    }
    if (mode === "main-shape-divided") {
      drawDivided(drawArrow, 0, 14, 0.075, false);
      drawDivided(drawArrow, 180, 14, 0.075, false);
      drawDivided(drawDiamond, 0, 14, 0.075, false);
    }
    if (mode === "main-shape-divided-animated") {
      mainAnimatedAngle += 0.25;
      drawDivided(drawArrow, mainAnimatedAngle, 14, 0.075, true);
      drawDivided(drawArrow, 180 + mainAnimatedAngle, 14, 0.075, true);
      drawDivided(drawDiamond, mainAnimatedAngle, 14, 0.075, true);
    }
  };
}

let shapeOne = new p5(sketchWorkNo18, "shape-1");
let shapeTwo = new p5(sketchWorkNo18, "shape-2");
let shapeThree = new p5(sketchWorkNo18, "shape-3");
let mainShape = new p5(sketchWorkNo18, "main-shape");
let shapeOneDivided = new p5(sketchWorkNo18, "shape-1-divided");
let shapeTwoDivided = new p5(sketchWorkNo18, "shape-2-divided");
let shapeThreeDivided = new p5(sketchWorkNo18, "shape-3-divided");
let mainShapeDivided = new p5(sketchWorkNo18, "main-shape-divided");
let mainShapeDividedAnimated = new p5(
  sketchWorkNo18,
  "main-shape-divided-animated",
);
