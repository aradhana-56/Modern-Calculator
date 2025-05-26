const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const calculator = document.querySelector(".calculator");
const themeToggler = document.getElementById("theme-toggler");

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const id = button.id;

    if (id === "clear") {
      display.innerText = "";
    } else if (id === "backspace") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (id === "equal") {
      if (display.innerText.trim() === "") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 1500);
        return;
      }
      try {
        // Replace visible operators with JS operators
        let expression = display.innerText.replace(/÷/g, "/").replace(/×/g, "*");
        let result = eval(expression);

        if (result === undefined || result === null) {
          display.innerText = "Error!";
        } else {
          display.innerText = result;
        }
      } catch (e) {
        display.innerText = "Syntax Error!";
        setTimeout(() => (display.innerText = ""), 1500);
      }
    } else {
      // Append clicked button value
      if (id === "/") {
        display.innerText += "÷";
      } else if (id === "*") {
        display.innerText += "×";
      } else {
        display.innerText += id;
      }
    }
  });
});

// Theme toggle handler
themeToggler.addEventListener("click", () => {
  if (calculator.classList.contains("light")) {
    calculator.classList.remove("light");
    calculator.classList.add("dark");
  } else {
    calculator.classList.remove("dark");
    calculator.classList.add("light");
  }
});
