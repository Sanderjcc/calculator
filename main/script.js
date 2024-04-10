//add path of buttons
const addButton = document.getElementById('addButton')
const subButton = document.getElementById('subButton')
const divButton = document.getElementById('divButton')
const multButton = document.getElementById('multButton')

//add events for each button
addButton.addEventListener('click', add)
subButton.addEventListener('click', sub)
divButton.addEventListener('click', division)
multButton.addEventListener('click', mult)

//creating output text
const outputText = document.createElement('p')
const outputArea = document.getElementById('output')

// function for verify if some field is empty
function validation(){
    const num01 = document.getElementById('numOneText').value
    const num02 = document.getElementById('numTwoText').value

    if (num01.length == 0 || num02.length == 0){
        return false

    } else {
        return true
        
    }
}


//operators
function add(){
    const num01 = document.getElementById('numOneText')
    const num02 = document.getElementById('numTwoText')
    let sum = Number(num01.value) + Number(num02.value)

    if (validation()){
       outputText.innerText += `${num01.value} + ${num02.value} = ${sum.toFixed(2)}`
        outputArea.appendChild(outputText)

        num01.value = ''
        num02.value = ''
        num01.focus()

    } else {
        alert('ERROR!!! - Empty Field')
        outputText.innerText = ''
    
    }
}

//subtraction
function sub(){
    const num01 = document.getElementById('numOneText')
    const num02 = document.getElementById('numTwoText')
    difference = Number(num01.value) - Number(num02.value)
    
    if (validation()){
        outputText.innerText = `${num01.value} - ${num02.value} = ${difference.toFixed(2)}`
        outputArea.appendChild(outputText)

        num01.value = ''
        num02.value = ''
        num01.focus()

    } else {
        alert('ERROR!!! - Empty Field')
        outputText.innerText = ''
    }
}

//division
function division(){
    const num01 = document.getElementById('numOneText')
    const num02 = document.getElementById('numTwoText')
    quotient = Number(num01.value) / Number(num02.value)

    if (validation()){
        outputText.innerText = `${num01.value} / ${num02.value} = ${quotient.toFixed(2)}`
        outputArea.appendChild(outputText)

        num01.value = ''
        num02.value = ''
        num01.focus()

    } else {
        alert('ERROR!!! - Empty Field')
        outputText.innerText = ''
    }
}

//multiplication
function mult(){
    const num01 = document.getElementById('numOneText')
    const num02 = document.getElementById('numTwoText')
    product = Number(num01.value) * Number(num02.value)

    if (validation()){
        outputText.innerText = `${num01.value} x ${num02.value} = ${product.toFixed(2)}`
        outputArea.appendChild(outputText)

        num01.value = ''
        num02.value = ''
        num01.focus()

    } else {
        alert('ERROR!!! - Empty Field')
        outputText.innerText = ''
    }
}
