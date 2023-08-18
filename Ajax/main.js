// com "fetch" e "async / await"

document.addEventListener("click", e => {
    const el = e.target.tagName;
    const elLowerCase = el.toLowerCase()
    if (elLowerCase === "a") {
        e.preventDefault()
        loadPage(e.target)
    }
});

async function loadPage(el) {
    try {
        const attHref = await el.getAttribute("href");
        const response = await fetch(attHref);
        if (response.status !== 200) throw new Error("MEU ERRO!");
        const responseText = await response.text()
        loadResult(responseText)
    } catch(error) {
        console.error(error)
    }
}

function loadResult(resultParam) {
    const resultClass = document.querySelector(".result");
    resultClass.innerHTML = resultParam;
};

