 function Calculator() {
  const display = document.querySelector(".display");

  this.handleBtn = () => {
    document.addEventListener("click", e => {
      const el = e.target;
      console.dir(el);
      if (el.classList.contains("operator")) {
        console.log("Enter")
        this.printNumberOnDisplay(el.innerText)
      };
      if (el.classList.contains("zero")) {
        this.clearDisplay()
      };
      if (el.classList.contains("result")) {
        this.executeExpression()
      };
      if (el.classList.contains("backspace")) {
        this.deleteLast()
      };
    })
  };

  this.printNumberOnDisplay = (param) => {
    display.innerText += param
  };

  this.clearDisplay = () => {
    display.innerText = ""
  };

  this.executeExpression = () => {
    const result = eval(display.innerHTML)
    if (!result) return alert("Invalid Expression!");
    display.innerText = result
  };

  this.deleteLast = () => {
    display.innerText = display.innerHTML.slice(0, -1)
  };
}
const calc = new Calculator()
calc.handleBtn()
