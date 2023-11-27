//const convert = document.querySelector("#inputMins')
//User Inputs


//Button Converter Functionality
let btn = document.getElementById('Convert')

function conversion(){
    debugger
    let minutes = document.getElementById('inputMins').value;
    let seconds = minutes * 60
    if (minutes < 0){
        alert(`Problem`)
        document.getElementById(`result`).textContent = `Wrong Buddy`
        // let seconds = minutes*60
        // return seconds
    } 
    else{
        document.getElementById(`result`).textContent = seconds + ` seconds`
    }
}

btn.addEventListener('click', conversion)



//btn.addEventListener('click', 'conversion')

//function conversion to seconds
//function convertToSeconds(minutes){
//    let seconds = minutes*60
//    return seconds
//}

//console.log(convertToSeconds(5));

//console conversion to minutes
//function convertToMins(seconds){
//    let minutes = seconds/60
//    return minutes
//}

//console.log(convertToMins())