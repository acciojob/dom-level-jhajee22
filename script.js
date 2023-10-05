//your JS code here. If required.// Wait for the DOM to be fully loaded before running the code
document.addEventListener("DOMContentLoaded", function() {
  // Find the element with the id "level"
  const levelElement = document.getElementById("level");

  if (levelElement) {
    // Initialize a variable to keep track of the DOM level
    let domLevel = 0;
    
    // Start from the target element and traverse up the DOM tree until we reach the root HTML element
    let currentElement = levelElement;
    while (currentElement !== document.documentElement) {
      currentElement = currentElement.parentElement;
      domLevel++;
    }

    // Display the result using the alert() function
    alert("The level of the element is: " + domLevel);
  } else {
    // If the element with id "level" was not found, display an error message
    alert("Element with id 'level' not found in the DOM.");
  }
});

