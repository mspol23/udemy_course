
class CpfValidation {
  constructor(cpf) {
    this.cpf = cpf
  }

  get isValid() {
    this.#comparison()
  }

  #originalCpf() {
    const originalCpf = this.cpf;
    // console.log(originalCpf);
    return originalCpf
  }

  #cleanCpf() {
    const originalCpf = this.#originalCpf();
    const cleanCpf = originalCpf.replace(/\D/gm, "")
    // console.log(cleanCpf)
    return cleanCpf
  }

  #initialCpfArray() {
    const cleanCpf = this.#cleanCpf();
    const cpfArray = Array.from(cleanCpf);
    return cpfArray
  }

  #removeTwoLastDigits() {
    const completeCpfArray = this.#initialCpfArray();
    const lastDigitsOut = completeCpfArray.slice(0, -2)
    // console.log(lastDigitsOut)
    return lastDigitsOut
  }

  #createDigits(param) {
    const cpfToCheck = param;
    let i = cpfToCheck.length + 1;
    const multipliedArray = cpfToCheck.map(e => Number(e) * i--);
    const accumulator = multipliedArray.reduce((acc, val) => (acc + val), 0)
    const finalCalc = 11 - (accumulator % 11)
    return finalCalc
  }
  #getArrayWithCheckedDigits() {
    const nineDigitsArray = this.#removeTwoLastDigits();
    const firstDigit = this.#createDigits(nineDigitsArray);
    nineDigitsArray.push(String(firstDigit));
    const lastDigit = this.#createDigits(nineDigitsArray)
    nineDigitsArray.push(String(lastDigit));
    // console.log(nineDigitsArray)
    return nineDigitsArray
  }

  #cpfArrayWithCheckedDigitsToString() {
    const fullCheckedArray = this.#getArrayWithCheckedDigits();
    const fullCheckedString = fullCheckedArray.join("");
    // console.log(fullCheckedString)
    return fullCheckedString
  }

  #comparison() {
    const initial = this.#cleanCpf();
    console.log(initial);
    const final = this.#cpfArrayWithCheckedDigitsToString();
    console.log(final);
    const success = "CPF confirmed.";
    const fail = "Invalid CPF.";
    const check = initial === final ? success : fail;
    return console.log(check);
  }

}

const myCpf = new CpfValidation("076.268.427-59");
// console.log(myCpf.cpf)
console.log(myCpf.isValid)