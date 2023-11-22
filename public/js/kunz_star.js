const sketchKunzStar = (p) => {
  const mode = p._userNode;
  const heightAndWidth = 1000;
  let centerPoint;
  let angle = 0;

  const lowerLimit = 1 / 20;
  const upperLimit = 1 - lowerLimit;
  const middleLowerLimit = 8 / 20;
  const middleUpperLimit = 1 - middleLowerLimit;

  function drawStar(angle) {
    p.strokeWeight(1)
    p.stroke(0)
    let starPoints = [];
    // top point -> 0
    starPoints.push(p.createVector(p.width / 2, p.height * lowerLimit));
    // top right quadrant point -> 1
    starPoints.push(
      p.createVector(p.width * middleUpperLimit, p.height * middleLowerLimit),
    );
    // right point -> 2
    starPoints.push(p.createVector(p.width * upperLimit, p.height / 2));
    // bottom right quadrant point -> 3
    starPoints.push(
      p.createVector(p.width * middleUpperLimit, p.height * middleUpperLimit),
    );
    // bottom point -> 4
    starPoints.push(p.createVector(p.width / 2, p.height * upperLimit));
    // bottom left quadrant point  -> 5
    starPoints.push(
      p.createVector(p.width * middleLowerLimit, p.height * middleUpperLimit),
    );
    // left -> 6
    starPoints.push(p.createVector(p.width * lowerLimit, p.height / 2));
    // top left quadrant point  -> 7
    starPoints.push(
      p.createVector(p.width * middleLowerLimit, p.height * middleLowerLimit),
    );

    // start translation
    p.push();

    // rotate
    p.translate(centerPoint.x, centerPoint.y);
    p.rotate(angle);
    p.translate(-centerPoint.x, -centerPoint.y);

    for (let i = 0; i < starPoints.length - 1; i++) {
      p.line(
        starPoints[i].x,
        starPoints[i].y,
        starPoints[i + 1].x,
        starPoints[i + 1].y,
      );
    }
    p.line(
      starPoints[0].x,
      starPoints[0].y,
      starPoints[starPoints.length - 1].x,
      starPoints[starPoints.length - 1].y,
    );

    if (
      mode === "kunz-star" ||
      mode === "kunz-star-cross-lines" ||
      mode === "kunz-star-cross-lines-two-shapes" ||
      mode === "kunz-star-cross-lines-four-shapes"
    ) {
      // // top to bottom line
      p.line(
        starPoints[0].x,
        starPoints[0].y,
        starPoints[4].x,
        starPoints[4].y,
      );

      // left to right line
      p.line(
        starPoints[2].x,
        starPoints[2].y,
        starPoints[6].x,
        starPoints[6].y,
      );

      // top to bottom right line
      p.line(
        starPoints[0].x,
        starPoints[0].y,
        starPoints[3].x,
        starPoints[3].y,
      );

      // bottom to top left line
      p.line(
        starPoints[4].x,
        starPoints[4].y,
        starPoints[7].x,
        starPoints[7].y,
      );

      // top left line to top right line
      p.line(
        starPoints[7].x,
        starPoints[7].y,
        starPoints[1].x,
        starPoints[1].y,
      );

      // top right line to bottom right line
      p.line(
        starPoints[1].x,
        starPoints[1].y,
        starPoints[3].x,
        starPoints[3].y,
      );

      // bottom right line to bottom left line
      p.line(
        starPoints[3].x,
        starPoints[3].y,
        starPoints[5].x,
        starPoints[5].y,
      );

      // bottom left line to top right line
      p.line(
        starPoints[5].x,
        starPoints[5].y,
        starPoints[7].x,
        starPoints[7].y,
      );

      // bottom left line to top
      p.line(
        starPoints[5].x,
        starPoints[5].y,
        starPoints[0].x,
        starPoints[0].y,
      );

      // top right line to bottom
      p.line(
        starPoints[1].x,
        starPoints[1].y,
        starPoints[4].x,
        starPoints[4].y,
      );
    }
    // reset translation
    p.pop();
  }

  p.setup = () => {
    p.angleMode(p.DEGREES);
    p.createCanvas(heightAndWidth, heightAndWidth);
    centerPoint = p.createVector(p.width / 2, p.height / 2);
  };

  p.draw = () => {
    p.background(223, 214, 178);
    if (mode === "kunz-star-one-shape") {
      drawStar(0);
    }
    if (mode === "kunz-star-rotation") {
      drawStar(angle);
      angle++;
    }
    if (mode === "kunz-star-two-shapes") {
      for (let i = 0; i < 360; i += 45) {
        drawStar(i);
      }
    }
    if (mode === "kunz-star-multiple-shapes") {
      for (let i = 0; i < 360; i += 9) {
        drawStar(i);
      }
    }
    if (mode === "kunz-star-cross-lines") {
      drawStar(0);
    }
    if (mode === "kunz-star-cross-lines-two-shapes") {
      for (let i = 0; i < 360; i += 45) {
        drawStar(i);
      }
    }
    if (mode === "kunz-star-cross-lines-four-shapes") {
      for (let i = 0; i < 360; i += 30) {
        drawStar(i);
      }
    }
    if (mode === "kunz-star") {
      p.fill(226, 219, 183,255)
      p.strokeWeight(50)
      p.stroke(189, 202, 181)
      p.ellipse(centerPoint.x, centerPoint.y, p.width * upperLimit)
      for (let i = 0; i < 360; i += 9) {
        drawStar(i);
      }

    }
  };
};

let kunzLinesOneShape = new p5(sketchKunzStar, "kunz-star-one-shape");

let kunzLinesRotation = new p5(sketchKunzStar, "kunz-star-rotation");

let kunzLinesTwoShapes = new p5(sketchKunzStar, "kunz-star-two-shapes");

let kunzLinesMultipleShapes = new p5(
  sketchKunzStar,
  "kunz-star-multiple-shapes",
);

let kunzLinesCrossLine = new p5(sketchKunzStar, "kunz-star-cross-lines");

let kunzLinesCrossLineTwoShapes = new p5(
  sketchKunzStar,
  "kunz-star-cross-lines-two-shapes",
);

let kunzLinesCrossLineFourShapes = new p5(
  sketchKunzStar,
  "kunz-star-cross-lines-four-shapes",
);

let kunzLines = new p5(sketchKunzStar, "kunz-star");
