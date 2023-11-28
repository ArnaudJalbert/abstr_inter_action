function skecthUnknownWork(p) {
  const mode = p._userNode;
  const heightAndWidth = window.innerHeight * 0.8;
  let centerPoint;

  // angles animation
  let animateArrows = 0;
  let animateArrowsBuffer = 0;
  let angle = 0;
  let angleBuffer = 0;

  const arrowTop = p.createVector(1 / 4, 1 / 4);
  const arrowBottomRight = p.createVector(1 / 2, 3 / 4);
  const arrowBottom = p.createVector(1 / 4, 1 / 2);
  const arrowBottomLeft = p.createVector(0, 3 / 4);

  const diamondTop = p.createVector(1 / 4, 1 / 4);
  const diamondRight = p.createVector(1 / 2, 1 / 2);
  const diamondBottom = p.createVector(1 / 4, 3 / 4);
  const diamondLeft = p.createVector(0, 1 / 2);

  function drawArrow(angle, divisions, pinkLine) {
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
    p.translate(arrowPoints[2].x, arrowPoints[2].y);
    p.rotate(angle);
    p.translate(-arrowPoints[2].x, -arrowPoints[2].y);

    p.push();
    for (let i = 0; i < arrowPoints.length - 1; i++) {
      if (i === pinkLine[0] || i === pinkLine[1]) {
        p.strokeWeight(3);
        p.stroke("#DB607A");
      } else {
        p.strokeWeight(1);
        p.stroke(0);
      }
      p.line(
        arrowPoints[i].x,
        arrowPoints[i].y,
        arrowPoints[i + 1].x,
        arrowPoints[i + 1].y,
      );
    }

    if (pinkLine[1] === 3) {
      p.strokeWeight(3);
      p.stroke("#DB607A");
    } else {
      p.strokeWeight(1);
      p.stroke(0);
    }

    p.line(
      arrowPoints[0].x,
      arrowPoints[0].y,
      arrowPoints[arrowPoints.length - 1].x,
      arrowPoints[arrowPoints.length - 1].y,
    );
    p.pop();
    if (divisions > 0) {
      const increment =
        p.dist(
          arrowPoints[0].x,
          arrowPoints[0].y,
          arrowPoints[2].x,
          arrowPoints[2].y,
        ) / divisions;
      console.log(increment);
      for (let i = 1; i < divisions; i++) {
        p.line(
          arrowPoints[1].x,
          arrowPoints[1].y,
          arrowPoints[0].x,
          arrowPoints[0].y + increment * i,
        );
        p.line(
          arrowPoints[3].x,
          arrowPoints[3].y,
          arrowPoints[0].x,
          arrowPoints[0].y + increment * i,
        );
      }
    }
    p.pop();
  }

  function drawTwoArrows(divisions, rotate, animate) {
    p.push();
    // rotate the canvas
    p.translate(centerPoint.x, centerPoint.y);
    p.rotate(rotate);
    p.translate(-centerPoint.x, -centerPoint.y);
    if (animate) {
      drawArrow(0, divisions, [0, 2]);
      drawArrow(animateArrows, divisions, [1, 3]);
    } else {
      drawArrow(0, divisions, [0, 2]);
      drawArrow(180, divisions, [1, 3]);
    }

    p.pop();
  }

  function drawDiamond(angle, divisions) {
    // create the points
    let diamondPoints = [];
    // top of the arrow
    diamondPoints.push(
      p.createVector(diamondTop.x * p.width, diamondTop.y * p.height),
    );
    // bottom right of the arrow
    diamondPoints.push(
      p.createVector(diamondRight.x * p.width, diamondRight.y * p.height),
    );
    // bottom of the arrow
    diamondPoints.push(
      p.createVector(diamondBottom.x * p.width, diamondBottom.y * p.height),
    );
    // bottom left of the arrow
    diamondPoints.push(
      p.createVector(diamondLeft.x * p.width, diamondLeft.y * p.height),
    );

    p.push();
    // rotate the points
    p.translate(centerPoint.x, centerPoint.y);
    p.rotate(angle);
    p.translate(-centerPoint.x, -centerPoint.y);

    p.push();
    for (let i = 0; i < diamondPoints.length - 1; i++) {
      p.strokeWeight(1);
      p.stroke(0);

      p.line(
        diamondPoints[i].x,
        diamondPoints[i].y,
        diamondPoints[i + 1].x,
        diamondPoints[i + 1].y,
      );
    }

    p.strokeWeight(1);
    p.stroke(0);

    p.line(
      diamondPoints[0].x,
      diamondPoints[0].y,
      diamondPoints[diamondPoints.length - 1].x,
      diamondPoints[diamondPoints.length - 1].y,
    );
    p.pop();
    if (divisions > 0) {
      const increment =
        p.dist(
          diamondPoints[0].x,
          diamondPoints[0].y,
          diamondPoints[2].x,
          diamondPoints[2].y,
        ) / divisions;
      console.log(increment);
      for (let i = 1; i < divisions; i++) {
        p.line(
          diamondPoints[1].x,
          diamondPoints[1].y,
          diamondPoints[0].x,
          diamondPoints[0].y + increment * i,
        );
        p.line(
          diamondPoints[3].x,
          diamondPoints[3].y,
          diamondPoints[0].x,
          diamondPoints[0].y + increment * i,
        );
      }
    }
    p.pop();
  }

  function drawPinkCorners() {
    for(let i = 0; i< angle; i+=90) {
      p.push();
      p.translate(centerPoint.x, centerPoint.y)
      p.rotate(i);
      p.translate(-centerPoint.x, -centerPoint.y)
      p.fill("#DB607A");
      p.strokeWeight(0);
      p.vertex(0, 0, (1 / 2) * p.width, (1 / 4) * p.height);
      p.vertex(
          (1 / 2) * p.width,
          (1 / 4) * p.height,
          (1 / 4) * p.width,
          (1 / 2) * p.height,
      );
      p.vertex((1 / 4) * p.width, (1 / 2) * p.height, 0, 0);
      p.triangle(
          0,
          0,
          (1 / 2) * p.width,
          (1 / 4) * p.height,
          (1 / 4) * p.width,
          (1 / 2) * p.height,
      );
      p.pop();
    }
  }

  p.setup = () => {
    p.angleMode(p.DEGREES);
    let canvas = p.createCanvas(heightAndWidth, heightAndWidth);
    centerPoint = p.createVector(p.width / 2, p.height / 2);
  };

  p.draw = () => {
    p.background(232);
    if (mode === "first-arrow") {
      drawArrow(0, 0, [0, 2]);
    }
    if (mode === "first-two-arrows") {
      drawTwoArrows(0, 0, true);
    }
    if (mode === "first-two-arrows-rotation") {
      drawTwoArrows(0, 0, true);
      drawTwoArrows(0, angle, true);
      if (angle >= 90) {
        drawTwoArrows(0, 90, true);
      }
      if (angle >= 180) {
        drawTwoArrows(0, 180, true);
      }
      if (angle >= 270) {
        drawTwoArrows(0, 270, true);
      }
      if (angle >= 360) {
        if (angleBuffer > 200) {
          angleBuffer = 0;
          angle = 0;
        } else {
          angleBuffer++;
        }
      } else {
        angle++;
      }
    }
    if (mode === "divisions-and-rotation") {
      let divisions = 20;
      drawTwoArrows(divisions, 0, true);
      drawTwoArrows(divisions, angle, true);
      if (angle >= 90) {
        drawTwoArrows(divisions, 90, true);
      }
      if (angle >= 180) {
        drawTwoArrows(divisions, 180, true);
      }
      if (angle >= 270) {
        drawTwoArrows(divisions, 270, true);
      }
      if (angle >= 360) {
        if (angleBuffer > 200) {
          angleBuffer = 0;
          angle = 0;
        } else {
          angleBuffer++;
        }
      } else {
        angle++;
      }
    }
    if (mode === "first-diamond") {
      drawDiamond(0, 0);
    }
    if (mode === "diamond-rotation") {
      drawDiamond(angle, 0);
      drawDiamond(0, 0);
      if (angle >= 90) {
        drawDiamond(90, 0);
      }
      if (angle >= 180) {
        drawDiamond(180, 0);
      }
      if (angle >= 270) {
        drawDiamond(270, 0);
      }
      if (angle >= 360) {
        angleBuffer++;
        if (angleBuffer > 200) {
          angle = 0;
          angleBuffer = 0;
        }
      } else {
        angle++;
      }
    }
    if (mode === "diamond-rotation-divisions") {
      let division = 40;
      drawDiamond(angle, division);
      drawDiamond(0, division);
      if (angle >= 90) {
        drawDiamond(90, division);
      }
      if (angle >= 180) {
        drawDiamond(180, division);
      }
      if (angle >= 270) {
        drawDiamond(270, division);
      }
      if (angle >= 360) {
        angleBuffer++;
        if (angleBuffer > 200) {
          angle = 0;
          angleBuffer = 0;
        }
      } else {
        angle++;
      }
    }
    if (mode === "diamonds-arrows" || mode==="diamonds-arrows-comparison") {
      drawPinkCorners();
      let divisions = 40;
      drawTwoArrows(divisions, 0, true);
      drawTwoArrows(divisions, angle, true);
      if (angle >= 90) {
        drawTwoArrows(divisions, 90, true);
      }
      if (angle >= 180) {
        drawTwoArrows(divisions, 180, true);
      }
      if (angle >= 270) {
        drawTwoArrows(divisions, 270, true);
      }
      if (angle >= 360) {
        if (angleBuffer > 200) {
          angleBuffer = 0;
          angle = 0;
        } else {
          angleBuffer++;
        }
      } else {
        angle++;
      }
      drawDiamond(angle, divisions);
      drawDiamond(0, divisions);
      if (angle >= 90) {
        drawDiamond(90, divisions);
      }
      if (angle >= 180) {
        drawDiamond(180, divisions);
      }
      if (angle >= 270) {
        drawDiamond(270, divisions);
      }
    }
    if (animateArrows >= 180) {
      if (animateArrowsBuffer > 100) {
        animateArrowsBuffer = 0;
        animateArrows = 0;
      } else {
        animateArrowsBuffer++;
      }
    } else {
      animateArrows++;
    }
  };
}

new p5(skecthUnknownWork, "first-arrow");
new p5(skecthUnknownWork, "first-two-arrows");
new p5(skecthUnknownWork, "first-two-arrows-rotation");
new p5(skecthUnknownWork, "divisions-and-rotation");
new p5(skecthUnknownWork, "first-diamond");
new p5(skecthUnknownWork, "diamond-rotation");
new p5(skecthUnknownWork, "diamond-rotation-divisions");
new p5(skecthUnknownWork, "diamonds-arrows");
new p5(skecthUnknownWork, "diamonds-arrows-comparison");
