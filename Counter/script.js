const displayCounter = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

let count = parseInt(localStorage.getItem("counterValue")) || 0;
updateDisplay();

// Event listeners
incBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// Helper function to update UI and save count
function updateDisplay() {
  displayCounter.textContent = count;

  // change color based on value
  if (count > 0) {
    displayCounter.style.color = "green";
  } else if (count < 0) {
    displayCounter.style.color = "red";
  } else {
    displayCounter.style.color = "#222";
  }

  // Save current value to localStorage
  localStorage.setItem("counterValue", count);
}
