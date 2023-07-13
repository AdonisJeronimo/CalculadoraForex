let calculate = document.getElementById('calculate')
let menuBtn = document.querySelector('#sidebar-expand')

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bi-x-lg')
}


calculate.addEventListener('click', ()=>{
    let balance = document.getElementById('balance')
    let risk = document.getElementById('risk')
    let stopLossPoint = document.getElementById('stop-loss-point')
    let stopResult = document.getElementById('stop-loss-result')
    let lotResult = document.getElementById('lot-size-result')
    accountBalance = parseInt(balance.value)

    let riskPerOperation = (accountBalance * risk.value) / 100
    let lossSize = riskPerOperation / stopLossPoint.value

    lotResult.innerText = `${riskPerOperation},00`
    stopResult.innerText = `${lossSize.toFixed(2)}`
   
})