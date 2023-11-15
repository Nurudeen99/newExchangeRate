const Bortini = document.querySelector('.btn')
const inputVal = document.querySelector("#inputVal2")
// const NigerianButton = document.querySelector('#ngn')
// const AmericanButton = document.querySelector('#usd')
const outputDisplay = document.querySelector('h3')


const bitcoinValue = async() =>{
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const newResponse = await response.json()
    return (newResponse.bpi.USD.rate_float)
}
// NigerianButton.addEventListener("click",()=>{
//     let myNigerianResponse = inputVal.value

// })
// AmericanButton.addEventListener("click",()=>{
//     let myAmericanResponse = inputVal.value

// })
Bortini.addEventListener("click",async ()=>{
    let myResponse = await bitcoinValue()
    const NigerianButton = document.querySelector('#ngn')
    const AmericanButton = document.querySelector('#usd')
    let myNigerianResponse = inputVal.value
    let myAmericanResponse = inputVal.value
    if(NigerianButton){
        outputDisplay.textContent = `The Value Of Your Nigerian Currency  In BTC will be ${myResponse * myNigerianResponse}`
        myNigerianResponse = ""
    }else if(AmericanButton){
        outputDisplay.textContent = `The Value Of Your American Currency In BTC will be ${myResponse * myAmericanResponse}`
        myAmericanResponse = ""
    }else{
        outputDisplay.textContent = `Pls Input The Correct Value Of Your Currency`
    }
    // if(NigerianButton.addEventListener("click",()=>{
    //     let myNigerianResponse = inputVal.value
    
    // })){
    //     inputVal.textContent = myResponse * myNigerianResponse
    //     inputVal.value =""
    // }else if(AmericanButton.addEventListener("click",()=>{
    //     let myAmericanResponse = inputVal.value
    
    // })){
    //     inputVal.textContent = myResponse * myAmericanResponse
    //     inputVal.value =""
    // }else{
    //     inputVal.textContent
})
