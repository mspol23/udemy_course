const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send()
    
        xhr.addEventListener("load", () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                // console.log(xhr.responseText)
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    })
}

document.addEventListener("click", e => {
    const el = e.target.tagName;
    // console.log(e.target)
    const elLowerCase = el.toLowerCase()
    // console.dir(elLowerCase)

    if (elLowerCase === "a") {
        e.preventDefault()
        loadPage(e.target)
    }
});

async function loadPage(el) {
    const attHref = el.getAttribute("href");
    // console.log(attHref);
    
    try {
        const requestPromise = await request({
            method: "GET",
            url: attHref,
        })
        loadResult(requestPromise)
    } catch(e) {
        console.log(e)
    }

};

function loadResult(resultParam) {
    const resultClass = document.querySelector(".result");
    resultClass.innerHTML = resultParam;
};


fetch("pagina2.html")
.then(response => {
    if (response.status !== 200) throw new Error("ERRO TESTE!");
    return response.text()
    .then(res => {
        console.log(res)
    })
})
.catch(err => {
    console.error(err)
})

