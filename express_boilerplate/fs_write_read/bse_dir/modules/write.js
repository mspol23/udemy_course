const fs = require('node:fs/promises');
const path = require("node:path");

const myPath = path.resolve(__dirname, "clients.txt");
// console.log(myPath)

const testObjects = [
    {name: "Marcos"},
    {name: "Claudio"},
    {name: "Fulano"},
    {name: "Beltrano"}
];

function objToJson(testObjects) {
    const toJson = JSON.stringify(testObjects, "", 2);
    // console.log(toJson)
    setObjInsideFile(toJson)
}

async function setObjInsideFile(toJson) {
    await fs.writeFile(myPath, toJson, {flag: "w", encoding: 'utf8'});
};

objToJson(testObjects)

module.exports.myPath = myPath
// flag "w" apaga o conteúdo do arquivo todas as vezes que eu rodar o programa.
// flag "a" acrescente conteúdo.
// enconding: utf8 já é o padrão, não precisa ser informado.
// usar /n no final da string quando quiser quebrar a linha após casa acréscimo. 
