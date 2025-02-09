const svg = document.querySelector("svg.squiggle");
const path = svg.querySelector("path");

// Get the total length of the path
const pathLength = path.getTotalLength();

// Initialize the path to be hidden
path.style.strokeDasharray = `${pathLength}`;
path.style.strokeDashoffset = `${pathLength}`;

const scroll = () => {
  const distance = window.scrollY;
  const totalDistance = document.body.clientHeight - window.innerHeight;

  const percentage = distance / totalDistance;

  // Animate the strokeDashoffset to reveal the path
  path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
};

// Run the scroll function on page load to set initial values
scroll();

// Add the scroll event listener
window.addEventListener("scroll", scroll);
