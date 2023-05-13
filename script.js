/**
 *  TODO for creating 60 ticks
        1. create line element
        2. append to svg as child
        3. add attributes on line element

        4. find point for each tick 
            function to convert degree to radian
            declare fix offset
        5. draw ticks

 */

//create line element
function createLine(p1, p2, strong) {
  const svgEl = document.querySelector("svg"); // get svg Element
  const lineEl = document.createElementNS("http://www.w3.org/2000/svg", line); //create line Element
  svgEl.appendChild("lineEl"); // append line Element into SVG as child
  lineEl.setAttribute("x1", p1.x); // set Attributes on line Element
  lineEl.setAttribute("y1", p1.y);
  lineEl.setAttribute("x2", p2.x);
  lineEl.setAttribute("y1", p2.y);
  lineEl.setAttribute("stroke", "black");
  lineEl.setAttribute("stroke-width", strong ? 2.5 : 1);
}
