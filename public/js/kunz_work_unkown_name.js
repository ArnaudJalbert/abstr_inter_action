function skecthUnknownWork(p) {
  const mode = p._userNode;
  const heightAndWidth = 1000;
  let centerPoint;

  // angles animation
  let animationAngle = 0;
  // colors of lines
  const redPyramidColor = { r: 252, g: 55, b: 62 };
  const bluePyramidColor = { r: 0, g: 178, b: 121 };
  const brownPyramidColor = { r: 0, g: 0, b: 0 };

  let topLine = {
    start: p.createVector(0.2, 0.075),
    end: p.createVector(0.8, 0.075),
  };
  let halfTopLine = {
    start: p.createVector(0.5, topLine.start.y),
    end: p.createVector(topLine.end.x, topLine.end.y),
  };
  let rightLine = {
    start: p.createVector(0.925, 0.2),
    end: p.createVector(0.925, 0.8),
  };
  let halfRightLine = {
    start: p.createVector(rightLine.start.x, rightLine.start.y),
    end: p.createVector(rightLine.end.x, 0.5),
  };
  let bottomLine = {
    start: p.createVector(topLine.start.x, 1 - topLine.start.y),
    end: p.createVector(topLine.end.x, 1 - topLine.end.y),
  };
  let leftLine = {
    start: p.createVector(1 - rightLine.start.x, rightLine.start.y),
    end: p.createVector(1 - rightLine.end.x, rightLine.end.y),
  };

  let halfLeftLine = {
    start: p.createVector(leftLine.start.x, leftLine.start.y),
    end: p.createVector(leftLine.end.x, 0.5),
  };
  const redPyramidsLinesAmount = 25;
  const bluePyramidsLinesAmount = 25;

  // start point of pyramids
  let bluePyramidTopStart;
  let bluePyramidBottomStart;
  let brownPyramidRightStart;

  function drawPyramid(startPoint, endLine, linesAmount, color, angle) {
    const distanceX = (endLine.end.x - endLine.start.x) * p.width;
    const distanceY = (endLine.end.y - endLine.start.y) * p.height;

    // rotate the points
    p.push();
    p.translate(centerPoint.x, centerPoint.y);
    p.rotate(angle);
    p.translate(-centerPoint.x, -centerPoint.y);

    for (let i = 0; i <= linesAmount; i++) {
      p.stroke(color.r, color.g, color.b);
      p.line(
        startPoint.x,
        startPoint.y,
        endLine.start.x * p.width + distanceX * (i / linesAmount),
        endLine.start.y * p.height + distanceY * (i / linesAmount),
      );
    }
    p.pop();
  }

  function animatePyramid(shape, linesAmount) {
    shape(linesAmount, 0);
    if (animationAngle < 90) {
      shape(linesAmount, animationAngle);
    } else {
      shape(linesAmount, 90);
    }
    if (animationAngle < 180) {
      shape(linesAmount, animationAngle);
    } else {
      shape(linesAmount, 180);
    }
    if (animationAngle < 270) {
      shape(linesAmount, animationAngle);
    } else {
      shape(linesAmount, 270);
    }
    if (animationAngle === 500) {
      animationAngle = 0;
    }
  }

  function drawRedPyramid(linesAmount, angle) {
    drawPyramid(centerPoint, bottomLine, linesAmount, redPyramidColor, angle);
  }

  function drawBluePyramid(linesAmount, angle) {
    drawPyramid(
      bluePyramidTopStart,
      rightLine,
      linesAmount,
      bluePyramidColor,
      angle,
    );
    drawPyramid(
      bluePyramidTopStart,
      leftLine,
      linesAmount,
      bluePyramidColor,
      angle,
    );
  }

  function drawBrownPyramid(linesAmount, angle) {

    drawPyramid(
      bluePyramidTopStart,
      halfLeftLine,
      linesAmount,
      brownPyramidColor,
      angle,
    );

    drawPyramid(
      bluePyramidTopStart,
      halfRightLine,
      linesAmount,
      brownPyramidColor,
      angle,
    );
  }

  p.setup = () => {
    p.angleMode(p.DEGREES);
    p.createCanvas(heightAndWidth, heightAndWidth);
    centerPoint = p.createVector(p.width / 2, p.height / 2);
    // blue pyramids starting points
    bluePyramidTopStart = p.createVector(
      centerPoint.x,
      p.height * rightLine.start.y,
    );
    bluePyramidBottomStart = p.createVector(
      centerPoint.x,
      p.height - bluePyramidTopStart.y,
    );
  };

  p.draw = () => {
    p.background(223, 214, 178);
    if (mode === "first-pyramid") {
      drawPyramid(centerPoint, bottomLine, 1, redPyramidColor, 0);
    }
    if (mode === "first-pyramid-square") {
      animatePyramid(drawRedPyramid, 1);
    }
    if (mode === "first-pyramid-square-multlines") {
      animatePyramid(drawRedPyramid, redPyramidsLinesAmount);
    }
    if (mode === "second-pyramid") {
      drawBluePyramid(1, 0);
    }
    if (mode === "second-pyramid-square") {
      animatePyramid(drawBluePyramid, 1);
    }
    if (mode === "second-pyramid-square-multlines") {
      animatePyramid(drawBluePyramid, bluePyramidsLinesAmount);
    }
    if (mode === "third-pyramid") {
      drawBrownPyramid(1, 0);
    }
    if (mode === "third-pyramid-square") {
      animatePyramid(drawBrownPyramid, 1);
    }
    if (mode === "third-pyramid-square-multlines") {
      animatePyramid(drawBrownPyramid, bluePyramidsLinesAmount);
    }
    if (mode === "final-shape"){
        animatePyramid(drawRedPyramid, redPyramidsLinesAmount);
        animatePyramid(drawBluePyramid, redPyramidsLinesAmount);
        animatePyramid(drawBrownPyramid, redPyramidsLinesAmount);
    }
    animationAngle++;
  };
}

new p5(skecthUnknownWork, "first-pyramid");
new p5(skecthUnknownWork, "first-pyramid-square");
new p5(skecthUnknownWork, "first-pyramid-square-multlines");
new p5(skecthUnknownWork, "second-pyramid");
new p5(skecthUnknownWork, "second-pyramid-square");
new p5(skecthUnknownWork, "second-pyramid-square-multlines");
new p5(skecthUnknownWork, "third-pyramid");
new p5(skecthUnknownWork, "third-pyramid-square");
new p5(skecthUnknownWork, "third-pyramid-square-multlines");
new p5(skecthUnknownWork, "final-shape");
