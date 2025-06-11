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

// Generate random stars
const starsContainer = document.querySelector(".stars");
const numberOfStars = 150;

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  // Random position anywhere on screen
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";

  // Random size
  const size = Math.random() * 2 + 1; // between 1px and 3px
  star.style.width = size + "px";
  star.style.height = size + "px";

  // Random animation delay so they don’t all twinkle at once
  star.style.animationDelay = Math.random() * 2 + "s";

  starsContainer.appendChild(star);
}
