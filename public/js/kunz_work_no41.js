function sketchWorkNo41(p) {
  const mode = p._userNode;
  const heightAndWidth = window.innerHeight * 0.8;
  let centerPoint;
  let angle = 0;
  let counter = 0;
  let scale = 75;

  // shapes points
  let basisShape;
  let basisShapeColor = { r: "0", g: "0", b: "0" };
  let basisShapeTwo;
  let basisShapeColorTwo = { r: "197", g: "111", b: "247" };
  let basisShapeThree;
  let basisShapeColorThree = { r: "29", g: "199", b: "242" };
  let basisShapeFour;
  let basisShapeColorFour = { r: "0", g: "0", b: "0" };
  let basisShapeFive;
  let basisShapeColorFive = { r: "45", g: "229", b: "174" };
  let basisShapeSix;
  let basisShapeSeven;
  let basisShapeEight;
  let basisShapeColorSix = { r: "252", g: "199", b: "65" };
  let basisShapeNine;
  let basisShapeTen;
  let basisShapeEleven;
  let basisShapeColorNine = { r: "193", g: "102", b: "77" };

  function drawBasisShape(points, divisions, angle, color) {
    p.push();
    // rotate the canvas
    p.translate(centerPoint.x, centerPoint.y);
    p.rotate(angle);
    p.translate(-centerPoint.x, -centerPoint.y);

    // stroke information
    p.strokeWeight(1);
    p.stroke(color.r, color.g, color.b);

    // draw outline
    p.line(points.top.x, points.top.y, points.right.x, points.right.y);
    p.line(points.right.x, points.right.y, points.bottom.x, points.bottom.y);
    p.line(points.bottom.x, points.bottom.y, points.left.x, points.left.y);
    p.line(points.left.x, points.left.y, points.top.x, points.top.y);

    // stroke information
    p.strokeWeight(0.5);
    p.stroke(color.r, color.g, color.b);

    // draw the subdivision
    if (divisions > 0) {
      const increment =
        p.dist(points.top.x, points.top.y, points.bottom.x, points.bottom.y) /
        divisions;
      for (let i = 1; i < divisions; i++) {
        p.line(
          points.left.x,
          points.left.y,
          points.top.x,
          points.top.y + increment * i,
        );
        p.line(
          points.right.x,
          points.right.y,
          points.top.x,
          points.top.y + increment * i,
        );
      }
    }
    p.pop();
  }

  function drawBasisShapeSquare(shape, divisions, color) {
    drawBasisShape(shape, divisions, 0, color);
    drawBasisShape(shape, divisions, angle, color);
    if (angle > 90) {
      drawBasisShape(shape, divisions, 90, color);
    }
    if (angle > 180) {
      drawBasisShape(shape, divisions, 180, color);
    }
    if (angle > 270) {
      drawBasisShape(shape, divisions, 270, color);
    }
  }

  p.setup = () => {
    p.angleMode(p.DEGREES);
    p.createCanvas(heightAndWidth, heightAndWidth);
    centerPoint = p.createVector(p.width / 2, p.height / 2);
    basisShape = {
      top: p.createVector(p.width * (1 / 2), p.height * (1 / 20)),
      bottom: p.createVector(p.width * (1 / 2), p.height * (8 / 20)),
      left: p.createVector(p.width * (2 / 20), p.height * (2 / 20)),
      right: p.createVector(p.width * (18 / 20), p.height * (2 / 20)),
    };
    basisShapeTwo = {
      top: p.createVector(p.width * (1 / 2), p.height * (1.5 / 20)),
      bottom: p.createVector(p.width * (1 / 2), p.height * (8 / 20)),
      left: p.createVector(p.width * (3 / 20), p.height * (3 / 20)),
      right: p.createVector(p.width * (17 / 20), p.height * (3 / 20)),
    };
    basisShapeThree = {
      top: p.createVector(p.width * (1 / 2), p.height * (1.5 / 20)),
      bottom: p.createVector(p.width * (1 / 2), p.height * (8 / 20)),
      left: p.createVector(p.width * (4 / 20), p.height * (4 / 20)),
      right: p.createVector(p.width * (16 / 20), p.height * (4 / 20)),
    };
    basisShapeFour = {
      top: p.createVector(p.width * (1 / 2), p.height * (4 / 20)),
      bottom: p.createVector(p.width * (1 / 2), p.height * (8 / 20)),
      left: p.createVector(p.width * (6 / 20), p.height * (6 / 20)),
      right: p.createVector(p.width * (14 / 20), p.height * (6 / 20)),
    };
    basisShapeFive = {
      top: p.createVector(p.width * (1 / 2), p.height * (4.5 / 20)),
      bottom: p.createVector(p.width * (1 / 2), p.height * (4.9 / 20)),
      left: p.createVector(p.width * (4.7 / 20), p.height * (4.7 / 20)),
      right: p.createVector(p.width * (15.3 / 20), p.height * (4.7 / 20)),
    };

    basisShapeSix = {
      top: p.createVector(p.width * (1 / 2), p.height * (5.5 / 20)),
      bottom: p.createVector(p.width * (1 / 2), p.height * (6.1 / 20)),
      left: p.createVector(p.width * (5.8 / 20), p.height * (5.8 / 20)),
      right: p.createVector(p.width * (14.2 / 20), p.height * (5.8 / 20)),
    };
    basisShapeSeven = {
      top: p.createVector(p.width * (1 / 2), p.height * (6.5 / 20)),
      bottom: p.createVector(p.width * (1 / 2), p.height * (7.1 / 20)),
      left: p.createVector(p.width * (6.8 / 20), p.height * (6.8 / 20)),
      right: p.createVector(p.width * (13.2 / 20), p.height * (6.8 / 20)),
    };

    basisShapeEight = {
      top: p.createVector(p.width * (1 / 2), p.height * (8.2 / 20)),
      bottom: p.createVector(p.width * (1 / 2), p.height * (8.8 / 20)),
      left: p.createVector(p.width * (8.5 / 20), p.height * (8.5 / 20)),
      right: p.createVector(p.width * (11.5 / 20), p.height * (8.5 / 20)),
    };

    basisShapeNine = {
      top: p.createVector(p.width * (1 / 2), p.height * (7.2 / 20)),
      bottom: p.createVector(p.width * (1 / 2), p.height * (7.5 / 20)),
      left: p.createVector(p.width * (8.5 / 20), p.height * (8.5 / 20)),
      right: p.createVector(p.width * (11.5 / 20), p.height * (8.5 / 20)),
    };

    basisShapeTen = {
      top: p.createVector(p.width * (1 / 2), p.height * (9 / 20)),
      bottom: p.createVector(p.width * (1 / 2), p.height * (9.3 / 20)),
      left: p.createVector(p.width * (8.5 / 20), p.height * (8.5 / 20)),
      right: p.createVector(p.width * (11.5 / 20), p.height * (8.5 / 20)),
    };

    basisShapeEleven = {
      top: p.createVector(p.width * (1 / 2), p.height * (9.7 / 20)),
      bottom: p.createVector(p.width * (1 / 2), p.height * (9.9 / 20)),
      left: p.createVector(p.width * (8.5 / 20), p.height * (8.5 / 20)),
      right: p.createVector(p.width * (11.5 / 20), p.height * (8.5 / 20)),
    };
  };

  p.draw = () => {
    p.background(232);
    if (mode === "basis-shape") {
      drawBasisShape(basisShape, 0, 0, basisShapeColor);
    }
    if (mode === "basis-shape-rotation") {
      drawBasisShapeSquare(basisShape, 0, basisShapeColor);
    }
    if (mode === "basis-shape-divisions") {
      drawBasisShape(basisShape, 20, 0, basisShapeColor);
    }
    if (mode === "basis-shape-divisions-rotations") {
      drawBasisShapeSquare(basisShape, 20, basisShapeColor);
    }
    if (mode === "two-shapes-divisions-rotations") {
      drawBasisShapeSquare(basisShape, 20, basisShapeColor);

      drawBasisShapeSquare(basisShapeTwo, 20, basisShapeColorTwo);

      drawBasisShapeSquare(basisShapeThree, 20, basisShapeColorThree);

      drawBasisShapeSquare(basisShapeFour, 20, basisShapeColorFour);
    }
    if (mode === "first-small-square") {
      let shape = {
        top: p.createVector(basisShapeSix.top.x, basisShapeSix.top.y - scale),
        bottom: p.createVector(
          p.width * (1 / 2),
          basisShapeSix.bottom.y + scale,
        ),
        left: p.createVector(p.width * (5.8 / 20), p.height * (5.8 / 20)),
        right: p.createVector(p.width * (14.2 / 20), p.height * (5.8 / 20)),
      };
      drawBasisShape(shape, 7, 0, basisShapeColorSix);
      scale -= 0.2;
      if (scale < 0) {
        scale = 75;
      }
    }
    if (mode === "first-small-square-rotation") {
      let shape = {
        top: p.createVector(basisShapeSix.top.x, basisShapeSix.top.y - scale),
        bottom: p.createVector(
          p.width * (1 / 2),
          basisShapeSix.bottom.y + scale,
        ),
        left: p.createVector(p.width * (5.8 / 20), p.height * (5.8 / 20)),
        right: p.createVector(p.width * (14.2 / 20), p.height * (5.8 / 20)),
      };
      drawBasisShapeSquare(shape, 7,  basisShapeColorSix);
      scale -= 0.2;
      if (scale < 0) {
        scale = 75;
      }
    }
    if (mode === "all-small-squares-rotation") {

      drawBasisShapeSquare(basisShapeSix, 7, basisShapeColorSix);

      drawBasisShapeSquare(basisShapeSeven, 7, basisShapeColorSix);

      drawBasisShapeSquare(basisShapeEight, 7, basisShapeColorSix);

      drawBasisShapeSquare(basisShapeNine, 7, basisShapeColorNine);

      drawBasisShapeSquare(basisShapeTen, 7, basisShapeColorNine);

      drawBasisShapeSquare(basisShapeEleven, 7, basisShapeColorNine);
    }

    if (mode === "final-shape" || mode === "final-shape-comparison") {
      drawBasisShapeSquare(basisShape, 20, basisShapeColor);

      drawBasisShapeSquare(basisShapeTwo, 20, basisShapeColorTwo);

      drawBasisShapeSquare(basisShapeThree, 20, basisShapeColorThree);

      drawBasisShapeSquare(basisShapeFour, 20, basisShapeColorFour);

      drawBasisShapeSquare(basisShapeFive, 20, basisShapeColorFive);

      drawBasisShapeSquare(basisShapeSix, 7, basisShapeColorSix);

      drawBasisShapeSquare(basisShapeSeven, 7, basisShapeColorSix);

      drawBasisShapeSquare(basisShapeEight, 7, basisShapeColorSix);

      drawBasisShapeSquare(basisShapeNine, 7, basisShapeColorNine);

      drawBasisShapeSquare(basisShapeTen, 7, basisShapeColorNine);

      drawBasisShapeSquare(basisShapeEleven, 7, basisShapeColorNine);
    }
    if (angle >= 360) {
      counter++;
      if (counter > 200) {
        counter = 0;
        angle = 0;
      }
    } else {
      angle++;
    }
  };
}

new p5(sketchWorkNo41, "basis-shape");
new p5(sketchWorkNo41, "basis-shape-rotation");
new p5(sketchWorkNo41, "basis-shape-divisions");
new p5(sketchWorkNo41, "basis-shape-divisions-rotations");
new p5(sketchWorkNo41, "two-shapes-divisions-rotations");
new p5(sketchWorkNo41, "first-small-square");
new p5(sketchWorkNo41, "first-small-square-rotation");
new p5(sketchWorkNo41, "all-small-squares-rotation");
new p5(sketchWorkNo41, "final-shape");
new p5(sketchWorkNo41, "final-shape-comparison");
