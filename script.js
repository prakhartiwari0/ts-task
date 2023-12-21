


let numOfTimesPressedSpan = document.querySelector('.numOfTimesPressedSpan')

let button = document.querySelector('.button')

let numOfTimesPressed = 0;

button.addEventListener('click', e => {
    let currentColorCode = (e.target).getAttribute('data-color')
    let newColorCode;
    newColorCode = (currentColorCode < 3) ? parseInt(currentColorCode) + 1 : 1

    e.target.setAttribute('data-color', newColorCode)

    numOfTimesPressed = numOfTimesPressed + 1
    numOfTimesPressedSpan.textContent = numOfTimesPressed
})