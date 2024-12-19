async function harry(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("27 Deg")
        }, 1000);
    })
    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg")
    }, 7000)
})

// delhiWeather.then(alert)
// BangloreWeather.then(alert)
console.log("Fetching Delhi Weather Please wait ... ")
let delhiW = await delhiWeather  //await means jab tak delhiawaeather nhi mil jata banglore weather wait karega means fun ke execution ko rok diya
console.log("Fetching Delhi Weather : " + delhiW)

console.log("Fetching Banglore Weather Please wait ... ")
let bangloreW = await bangloreWeather
console.log("Fetching Banglore Weather : " + bangloreW)

return [delhiW, bangloreW]
}

console.log("Welcome to weather control room")
harry()
let a = harry()
a.then((value) =>{
    console.log(value)
})
console.log(a)