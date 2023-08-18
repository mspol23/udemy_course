const fs = require("node:fs/promises");
const {myPath} = require("./write")

async function handleReadfile() {
    const data = await fs.readFile(myPath,  {encoding: "utf8"});
    const dataParse = JSON.parse(data);
    // console.log(dataParse)
    dataParse.map(e => console.log(e));
}

handleReadfile()

