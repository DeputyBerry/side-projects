// grab elements to work with from the DOM
const colorChangebtn = document.querySelector('.color-generator-btn');
const textBox = document.querySelector('h2');

function generateHexColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      let randomColorNum = Math.floor(Math.random() * 16);
      let hexDigit = randomColorNum.toString(16);
      hexColor += hexDigit;
    }
    console.log(hexColor);
    return hexColor;
  }

// add event listener to button
colorChangebtn.addEventListener('click', function(){
    textBox.innerText = `Background Color : ${generateHexColor()}`;
    document.body.style.backgroundColor = `${generateHexColor()}`;
});