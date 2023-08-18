
function random() {
    const time = Math.floor(Math.random() * 3000);
    return time
}

function awaitSim(message, timeRange) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof message !== "string") {
                reject("Dont know what to do.")
            }
            resolve(message + " resolved!");
            return;
        }, timeRange())
    })
    
}

// awaitSim("test 1", random).then(value => {
//     console.log(value)
//     return awaitSim("test 2", random)
// }).then(val => {
//     console.log(val);
//     return awaitSim("test 3", random)
// }).then(val => {
//     console.log(val);
//     return awaitSim("test 4", random)
// }).then(val => {
//     return console.log(val)
// })

async function asyncAwait() {
    try {
        const fase1 = await awaitSim("time 1", random);
        console.log(fase1)
        const fase2 = await awaitSim("time 2", random);
        console.log(fase2)
        const fase3 = await awaitSim(455, random);
        console.log(fase3)
        const fase4 = await awaitSim("time 4", random);
        console.log(fase4)
        console.log("Finish at " + fase4);
    } catch(e) {
        console.error(e)
    }
}
asyncAwait()