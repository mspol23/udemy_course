// com "Fetch" , "Axios" , "Json"

// fetch("pessoas.json")
//     .then(response => {
//         console.log(response)
//         return response.json()
//     })
//     .then(response => {
//         console.log(response)
//         loadElements(response)
//     })

// Com "Axios" ficaria:
axios("pessoas.json")
    .then(response => loadElements(response.data))


function loadElements(param) {
    const tableContainer = document.querySelector(".tableContainer")
    const createTable = document.createElement("table")
    createTable.classList= "table"
    tableContainer.appendChild(createTable)

    param.map(e => {
        // console.log(e)
        const tableRow = document.createElement("tr")

        const tableDataName = document.createElement("td")
        tableDataName.innerHTML = e.nome
        tableRow.appendChild(tableDataName)
        
        const tableDataEmail = document.createElement("td")
        tableDataEmail.innerHTML = e.email
        tableRow.appendChild(tableDataEmail)
  
        const tableDataCpf = document.createElement("td")
        tableDataCpf.innerHTML = e.cpf
        tableRow.appendChild(tableDataCpf)

        createTable.appendChild(tableRow)
        // console.log(tableRow)
    });
}