const skecthKunzLines = (p) => {
  let grid_points;

  let ellipses_amount = 6;
  let ellipses;

  let x_points_amount;
  let y_points_amount;
  const POINTS_COEFFICIENT = 64;
  let verticalPointsDistance;
  let horizontalPointsDistance;
  let moved = false;
  let moved_count = 0;

  function init_base_grid() {
    for (let i = 0; i < x_points_amount - 1; i++) {
      grid_points[i] = Array(y_points_amount);
      for (let j = 0; j < y_points_amount - 1; j++) {
        grid_points[i][j] = p.createVector(
          (p.width * i) / x_points_amount + p.width / x_points_amount,
          (p.height * j) / y_points_amount + p.height / y_points_amount,
        );
      }
    }
  }

  function draw_grid() {
    // stroke between the points
    p.stroke(0, 0, 0, 255);
    // iterating over all points
    for (let i = 0; i < grid_points.length - 1; i++) {
      for (let j = 0; j < grid_points[i].length - 1; j++) {
        if (i === grid_points[i].length - 2) {
          if (j === grid_points[i].length - 2) {
          } else {
            p.line(
              grid_points[i][j].x,
              grid_points[i][j].y,
              grid_points[i][j + 1].x,
              grid_points[i][j + 1].y,
            );
          }
        } else if (
          j === grid_points[i].length - 2 ||
          i === grid_points[i].length - 2
        ) {
          p.line(
            grid_points[i][j].x,
            grid_points[i][j].y,
            grid_points[i + 1][j].x,
            grid_points[i][j].y,
          );
        } else {
          p.line(
            grid_points[i][j].x,
            grid_points[i][j].y,
            grid_points[i][j + 1].x,
            grid_points[i][j + 1].y,
          );
          p.line(
            grid_points[i][j].x,
            grid_points[i][j].y,
            grid_points[i + 1][j].x,
            grid_points[i + 1][j].y,
          );
        }
      }
    }
  }

  function drawEllipses() {
    // draw info
    p.stroke(0, 0, 0, 0);
    p.fill(200, 200, 200, 255);

    // reset ellipses array
    ellipses = [];

    const ellipseWidth = p.width / 4;
    const ellipseHeight = p.height / 2.2;
    const baseXPosition = p.width / 6;
    const baseYPosition = p.height / 4;
    p.ellipse(baseXPosition, baseYPosition, ellipseWidth, ellipseHeight);
    ellipses.push({
      x: baseXPosition,
      y: baseYPosition,
      width: ellipseWidth,
      height: ellipseHeight,
    });
    p.ellipse(baseXPosition, baseYPosition * 3, ellipseWidth, ellipseHeight);
    ellipses.push({
      x: baseXPosition,
      y: baseYPosition * 3,
      width: ellipseWidth,
      height: ellipseHeight,
    });
    p.ellipse(baseXPosition * 3, baseYPosition, ellipseWidth, ellipseHeight);
    ellipses.push({
      x: baseXPosition * 3,
      y: baseYPosition,
      width: ellipseWidth,
      height: ellipseHeight,
    });
    p.ellipse(
      baseXPosition * 3,
      baseYPosition * 3,
      ellipseWidth,
      ellipseHeight,
    );
    ellipses.push({
      x: baseXPosition * 3,
      y: baseYPosition * 3,
      width: ellipseWidth,
      height: ellipseHeight,
    });
    p.ellipse(baseXPosition * 5, baseYPosition, ellipseWidth, ellipseHeight);
    ellipses.push({
      x: baseXPosition * 5,
      y: baseYPosition,
      width: ellipseWidth,
      height: ellipseHeight,
    });
    p.ellipse(
      baseXPosition * 5,
      baseYPosition * 3, //
      ellipseWidth,
      ellipseHeight,
    );
    ellipses.push({
      x: baseXPosition * 5,
      y: baseYPosition * 3,
      width: ellipseWidth,
      height: ellipseHeight,
    });
  }

  function isClose(
    x,
    y,
    ellipse_x,
    ellipse_y,
    ellipse_width,
    ellipse_height,
    proximity,
  ) {
    // Check if the point is inside the ellipse
    return (
      ((x - ellipse_x) * (x - ellipse_x)) / (ellipse_width * ellipse_width) +
        ((y - ellipse_y) * (y - ellipse_y)) /
          (ellipse_height * ellipse_height) <=
      proximity
    );
  }

  function moveGrid(ellipse) {
    for (let i = 0; i < grid_points.length - 1; i++) {
      for (let j = 0; j < grid_points[i].length - 1; j++) {
        if (
          grid_points[i][j].y < verticalPointsDistance ||
          grid_points[i][j].y > p.height - verticalPointsDistance
        ) {
          continue;
        }
        if (
          grid_points[i][j].x < horizontalPointsDistance ||
          grid_points[i][j].x > p.width - horizontalPointsDistance
        ) {
          continue;
        }
        let direction = p.createVector(
          grid_points[i][j].x,
          grid_points[i][j].y,
        );
        direction.sub([ellipse.x, ellipse.y]);
        direction.normalize();
        if (
          isClose(
            grid_points[i][j].x,
            grid_points[i][j].y,
            ellipse.x,
            ellipse.y,
            ellipse.width,
            ellipse.height,
            0.25,
          )
        ) {
          grid_points[i][j].x = grid_points[i][j].x + direction.x * 0.1;
          grid_points[i][j].y = grid_points[i][j].y + direction.y * 0.1;
        } else if (
          isClose(
            grid_points[i][j].x,
            grid_points[i][j].y,
            ellipse.x,
            ellipse.y,
            ellipse.width,
            ellipse.height,
            0.4,
          )
        ) {
          grid_points[i][j].x = grid_points[i][j].x + direction.x * 0.05;
          grid_points[i][j].y = grid_points[i][j].y + direction.y * 0.05;
        } else if (
          isClose(
            grid_points[i][j].x,
            grid_points[i][j].y,
            ellipse.x,
            ellipse.y,
            ellipse.width,
            ellipse.height,
            0.5,
          )
        ) {
          grid_points[i][j].x = grid_points[i][j].x + direction.x * 0.03;
          grid_points[i][j].y = grid_points[i][j].y + direction.y * 0.03;
        } else if (
          isClose(
            grid_points[i][j].x,
            grid_points[i][j].y,
            ellipse.x,
            ellipse.y,
            ellipse.width,
            ellipse.height,
            0.6,
          )
        ) {
          grid_points[i][j].x = grid_points[i][j].x + direction.x * 0.02;
          grid_points[i][j].y = grid_points[i][j].y + direction.y * 0.02;
        }
      }
    }
  }

  p.setup = () => {
    p.createCanvas(600, 600);
    x_points_amount = POINTS_COEFFICIENT;
    y_points_amount = Math.ceil(POINTS_COEFFICIENT * (p.height / p.width));
    grid_points = Array(x_points_amount);
    verticalPointsDistance = p.height / x_points_amount;
    horizontalPointsDistance = p.width / y_points_amount;
    init_base_grid();
  };

  p.draw = () => {
    // check
    if (!moved) {
      // background of the canvas
      p.background(232);

      // draw the strokes between the points
      draw_grid();

      // draw all ellipses and store them in "ellipses"
      drawEllipses();

      // move all points according to where the ellipses are
      for (const ellipse of ellipses) {
        moveGrid(ellipse);
      }

      // limit the movement
      moved_count += 1;
    }
    if (moved_count > 300) {
      moved = true;
    }
  };
};

let kunzLines = new p5(skecthKunzLines, "kunz-lines");
