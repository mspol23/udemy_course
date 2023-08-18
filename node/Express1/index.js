const fs = require('node:fs/promises');
const { resolve } = require('node:path');
const path = require('path');

// console.log(path.resolve("teste2"))

async function handleDir(baseDir) {
    try {
        baseDir = baseDir || path.resolve(__dirname);
        const items = await fs.readdir(baseDir);
        goDeeper(items, baseDir)

    } catch(err) {
        console.log(err)
    }
}

async function goDeeper(items, baseDir) {
    try {
        for(let file of items) {

            const fullPath = path.resolve(baseDir, file);
            const stats = await fs.stat(fullPath);

            if(/\.git/g.test(fullPath)) continue;
            if(/node_modules/g.test(fullPath)) continue;
            
            if(stats.isDirectory()) {
                handleDir(fullPath);
                continue;
            };
            
            if(!/\.css$/g.test(fullPath)) continue;

            console.log(file);
            
        }
    } catch(err) {
        console.log(err);
    }
}

handleDir("/Users/marcosoliveira/Documents/Marcos/Repos")



///.+\.css/g