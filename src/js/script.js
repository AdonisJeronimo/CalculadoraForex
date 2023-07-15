let calculate = document.getElementById('calculate');
let sidebar = document.getElementById('sidebar');
let menuBtn = document.getElementById('menuBtn');
let overlay = document.getElementById('overlay');
let menuItems = document.querySelectorAll('.menu-item');

menuBtn.onclick = () =>{
    sidebar.classList.toggle('active')
    overlay.classList.toggle('hidden')

    menuItems.forEach(item => {
          item.classList.toggle('hidden');
        });
}


overlay.onclick = () =>{
    sidebar.classList.toggle('active')
    overlay.classList.toggle('hidden')
    menuItems.forEach(item => {
        item.classList.toggle('hidden');
      });
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