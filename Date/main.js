const date = new Date(2019, 9, 7, 22, 52)
const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
}

const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
}

function createAndAddTextNode(selectEl, elementToCreate = "div", text) {
    const selectedEl = document.querySelector(selectEl)
    const createEl = document.createElement(elementToCreate);
    const createTxt = document.createTextNode(text);
    createEl.appendChild(createTxt);
    selectedEl.appendChild(createEl)
    return selectedEl
}


function addTextNode(selector = "div", text) {
    const selectEl= document.querySelector(selector)
    selectEl.innerHTML = text
    return selectEl
}

const formattedDate = date.toLocaleString("pt-BR", dateOptions)
console.log(formattedDate)
const formattedTime = date.toLocaleTimeString("pt-BR", timeOptions)
console.log(formattedTime)

addTextNode(".fullDate", formattedDate);
createAndAddTextNode(".container", "h1", formattedTime)





// const y = date.getFullYear();
// const m = date.getMonth();
// const d = date.getDate();

