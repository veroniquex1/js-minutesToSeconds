let mins = document.querySelector(#inputMins);


//function conversion to seconds
function convertToSeconds(minutes){
    let seconds = minutes*60
    return seconds
}

//console.log(convertToSeconds(5));

//console conversion to minutes
function convertToMins(seconds){
    let minutes = seconds/60
    return minutes
}

//console.log(convertToMins())

//Button Converter Functionality
let btn = document.querySelector([data-submit]);

btn.addEventListener('click', 'convert')