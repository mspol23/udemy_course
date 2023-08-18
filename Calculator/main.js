function calculator() {

  return {
    
    // Properties:
    selectDisplay: document.querySelector(".display"),
    
    start() {
      console.log("started.")
      console.log(this.selectDisplay)
      this.eventListener()
    },
    
    eventListener() {
      document.addEventListener("click", (e) => {
       const el = e.target;
       if (el.classList.contains("operator")) {
        this.handleTextOnDisplay(el.innerText)
       };
       if (el.classList.contains("zero")) {
        this.handleClearDisplay()
       }
       if (el.classList.contains("backspace")) {
        this.handleBackspace(el.innerText)
       }
       if (el.classList.contains("result")) {
        this.handleResultButton()
       }
      })
    },

    handleTextOnDisplay(param) {
      this.selectDisplay.innerText += param;
      console.log(this.selectDisplay);
    },

    handleClearDisplay() {
      this.selectDisplay.innerHTML = ""
    },

    handleBackspace(param) {
      this.selectDisplay.innerText = this.selectDisplay.innerHTML.slice(0, -1);
    },

    handleResultButton() {
     const evalFunction = eval(this.selectDisplay.innerText);
      if (Number(evalFunction) === NaN) {
        return console.log("Invalid result!")
      };
      this.selectDisplay.innerHTML = evalFunction;
    }
 
  }
}

const calc = calculator();
calc.start()
