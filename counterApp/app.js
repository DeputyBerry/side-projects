let counter = document.getElementsByClassName('count')
const increaseButton = document.getElementsByClassName('btn-increase')[0]
const decreaseButton = document.getElementsByClassName('btn-decrease')[0]
const resetButton = document.getElementsByClassName('btn-reset')[0]

let count = 0;

increaseButton.addEventListener('click', () => {
    count++;
    counter[0].innerHTML = count;
})
decreaseButton.addEventListener('click', () => {
    count--;
    counter[0].innerHTML = count;
})
resetButton.addEventListener('click', () => {
    count = 0;
    counter[0].innerHTML = count;
})