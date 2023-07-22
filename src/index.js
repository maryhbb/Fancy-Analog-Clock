/**
 *  TODO for creating 60 ticks
        1. create line element
        2. append to svg as child
        3. add attributes on line element

        4. find point for each tick 
            need a function to convert degree to radian

        5. draw ticks

        6. find Current Time

 */

// find ticks points

const degToRad = (deg) => (deg * Math.PI) / 180; // find radian of each degree since Math functions work only with radians)

function findPoint(r, deg) {
  const rad = degToRad(deg);
  return { x: r * Math.cos(rad), y: r * Math.sin(rad) }; // To find x, the formula is radius * cos (deg) and   // To find y, the formula is radius * sin (deg), but because math functions require radians as input, we need to convert the angle from degrees to radians first.
}

//create line element

function createLine(p1, p2, strong) {
  const svgEl = document.querySelector("svg"); // get svg Element
  const lineEl = document.createElementNS("http://www.w3.org/2000/svg", "line"); //create line Element
  svgEl.appendChild(lineEl); // append line Element into SVG as child
  lineEl.setAttribute("x1", p1.x); // set Attributes on line Element
  lineEl.setAttribute("y1", p1.y);
  lineEl.setAttribute("x2", p2.x);
  lineEl.setAttribute("y2", p2.y);
  lineEl.setAttribute("stroke", strong ? "#333" : "#888");
  lineEl.setAttribute("stroke-width", strong ? 4 : 3);
}

//create text element

function createText(x, y, text) {
  const svgEl = document.querySelector("svg");
  const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
  svgEl.prepend(textEl);
  textEl.setAttribute("x", x);
  textEl.setAttribute("y", y);
  textEl.textContent = text;
  textEl.classList.add("text");
}

//  drawing text with points

function drawText(deg) {
  if (deg % 90 === 0) {
    const { x, y } = findPoint(75, deg);
    createText(x, y, (deg + 90) / 30);
  }
}

//  drawing ticks with points

function drawTick(deg) {
  const strong = deg % 30 === 0;
  const p1 = findPoint(100, deg);
  const p2 = findPoint(strong ? 85 : 90, deg);

  createLine(p1, p2, strong);
}

for (let deg = 0; deg < 360; deg += 6) {
  drawTick(deg);
  drawText(deg);
}

function drawHands() {
  const svg = document.querySelector("svg");

  const hourHand = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  hourHand.id = "hour";
  hourHand.setAttribute("x1", "0");
  hourHand.setAttribute("y1", "0");
  hourHand.setAttribute("x2", "0");
  hourHand.setAttribute("y2", "-50");
  hourHand.setAttribute("stroke", "#333");
  hourHand.setAttribute("stroke-width", "7");

  const minuteHand = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  minuteHand.id = "minute";
  minuteHand.setAttribute("x1", "0");
  minuteHand.setAttribute("y1", "0");
  minuteHand.setAttribute("x2", "0");
  minuteHand.setAttribute("y2", "-70");
  minuteHand.setAttribute("stroke", "#888");
  minuteHand.setAttribute("stroke-width", "5");

  const secondHand = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  secondHand.id = "second";
  secondHand.setAttribute("x1", "0");
  secondHand.setAttribute("y1", "0");
  secondHand.setAttribute("x2", "0");
  secondHand.setAttribute("y2", "-80");
  secondHand.setAttribute("stroke", "red");
  secondHand.setAttribute("stroke-width", "3");

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", "0");
  circle.setAttribute("cy", "0");
  circle.setAttribute("r", "5");
  circle.setAttribute("fill", "#888");
  circle.setAttribute("stroke", "#333");
  circle.setAttribute("stroke-width", "2");

  svg.append(hourHand, minuteHand, secondHand, circle);
}

drawHands();

const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");

function updateClock() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();

  const hourDeg = hour * 30 + (30 / 60) * minute;
  const minuteDeg = minute * 6;
  const secondDeg = second * 6;

  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();

setInterval(updateClock, 1000);
