const earth = document.getElementById("earth");
const orbits = [
  document.getElementById("orbit1"),
  document.getElementById("orbit2"),
  document.getElementById("orbit3")
];

let colorIndex = 0;
let speedFactor = 1;

const earthColors = ["blue", "green", "purple", "aqua", "gold"];
const speeds = [1, 0.5, 2]; // normal, slower, faster

document.body.addEventListener("click", () => {
  // Change Earth color
  colorIndex = (colorIndex + 1) % earthColors.length;
  earth.style.backgroundColor = earthColors[colorIndex];

  // Change speed
  speedFactor = speeds[(speeds.indexOf(speedFactor) + 1) % speeds.length];
  orbits.forEach((orbit, index) => {
    let baseSpeed = [5, 7, 10][index];
    orbit.style.animationDuration = (baseSpeed / speedFactor) + "s";
  });
});
