// initial variables and const
const inputEl = document.getElementById("num")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
let imperial = [];
let metric = [];
const unitMetric = ["meters", "liters","kg"]
const unitImperial = ["feet", "galons","pounds"]
const conversionMatrix = [3.281, 0.264, 2.204]
const getParaEl = document.querySelectorAll("#para")

// click event to trigger conversion 
convertBtn.addEventListener("click", function(){
    convert(inputEl.value)
})

//function to convert numbers and change the paragraph strings 
function convert (num) {
    for (i=0; i < 3; i++){
        imperial[i] = num*conversionMatrix[i]
        metric[i] = num/conversionMatrix[i]
    }
    imperial = imperial.map(x => x.toFixed(3))
    metric = metric.map(x => x.toFixed(3))
    for (i=0; i < 3; i++){
        getParaEl[i].innerHTML = `${num} ${unitMetric[i]} = ${imperial[i]} ${unitImperial[i]} | ${num} ${unitImperial[i]} = ${metric[i]} ${unitMetric[i]}`
    }
}

// unit conversions 
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound