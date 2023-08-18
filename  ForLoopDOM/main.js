const elements = [
    {tag: "p", text: "Frase 1"},
    {tag: "div", text: "Frase 2"},
    {tag: "footer", text: "Frase 3"},
    {tag: "section", text: "Frase 4"}
]

for (let i = 0; i < elements.length; i++ ) {
    
    const { tag, text } = elements[i]
    const selectContainer = document.querySelector(".container");
    const createElement = document.createElement(tag);
    createElement.setAttribute("class", text);
    const createText = document.createTextNode(text);
    createElement.appendChild(createText);
    selectContainer.appendChild(createElement);
};

