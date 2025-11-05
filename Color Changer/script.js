// get the HTML elements
const box = document.getElementById("box");
const colorText = document.getElementById("colorText");
const button = document.getElementById("btn");

// list of colors to choose from
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "pink",
  "purple",
  "black",
];

// when the button is clicked
button.addEventListener("click", function () {
  // pick a random number between 0 and (colors.length - 1)
  const randomIndex = Math.floor(Math.random() * colors.length);

  // get a random color from the list
  const newColor = colors[randomIndex];

  // change the box color
  box.style.backgroundColor = newColor;

  // change the text below
  colorText.textContent = newColor;
});
