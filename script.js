/**
 *  TODO for creating 60 ticks
        1. create line element
        2. append to svg as child
        3. add attributes on line element

        4. find point for each tick 
            need a function to convert degree to radian
            declare fix offset

        5. draw ticks

 */

//create line element

function createLine(p1, p2, strong) {
  const svgEl = document.querySelector("svg"); // get svg Element
  const lineEl = document.createElementNS("http://www.w3.org/2000/svg", "line"); //create line Element
  svgEl.appendChild(lineEl); // append line Element into SVG as child
  lineEl.setAttribute("x1", p1.x); // set Attributes on line Element
  lineEl.setAttribute("y1", p1.y);
  lineEl.setAttribute("x2", p2.x);
  lineEl.setAttribute("y2", p2.y);
  lineEl.setAttribute("stroke", "black");
  lineEl.setAttribute("stroke-width", strong ? 2.5 : 1);
}

// find ticks points

const degToRad = (deg) => (deg * Math.PI) / 180; // find radian of each degree since Math functions work only with radians)

function findPoint(r, deg, { x, y } = { x: 0, y: 0 }) { //x and y is offset
  
  const rad = degToRad(deg);

  // To find x, the formula is radius * cos (deg), but because math functions require radians as input, we need to convert the angle from degrees to radians first.
  // To find y, the formula is radius * sin (deg)

  return { x: x + r * Math.cos(rad), y: y + r * Math.sin(rad) };
}

// now drawing ticks with points

function drawTick(deg, offset) {
  const strong = deg % 30 == 0;
  const p1 = findPoint(100, deg, offset);
  const p2 = findPoint(strong ? 90 : 95, deg, offset);

  createLine(p1, p2, strong);
}

for (let deg = 0; deg < 360; deg += 6) {
  const offset = { x: 200, y: 200 }; // we have a fix offset
  drawTick(deg, offset);
}
