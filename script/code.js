//const convert = document.querySelector("#inputMins')
//User Inputs


//Button Converter Functionality
let btn = document.getElementById('Convert')

function conversion(){
    let minutes = document.getElementById('inputMins').value;
    let seconds = minutes * 60
    if (minutes < 0){
        document.getElementById(`result`).textContent = `You must enter a valid number`
    } 
    else{
        document.getElementById(`result`).textContent = seconds + ` seconds`
    }
}

btn.addEventListener('click', conversion)