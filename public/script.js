var colorButton = document.querySelector('.color-button');


colorButton.addEventListener('click', changeColor);


function changeColor() {
  var titleText = document.querySelector('.title');
  titleText.classList.toggle('red');
}