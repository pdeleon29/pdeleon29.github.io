const display = document.getElementById('calc-display');
const scientificPanel = document.querySelector('.scientific');

// Insert value into the display
function insert(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Perform calculation
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Toggle scientific calculator
function toggleMode() {
  scientificPanel.classList.toggle('hidden');
}
