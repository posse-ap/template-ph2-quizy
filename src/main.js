const list = document.querySelector('.choiceList');
console.log(list.children[0])
list.children[0].classList.add('answer');
list.children[1].classList.add('wrong');
list.children[2].classList.add('invalid');





const answer = document.querySelector('.answer');
const answerBox = document.querySelector('#answerBox');
const wrong = document.querySelector('.wrong');
const invalid = document.querySelector('.invalid');
const errorBox = document.querySelector('#errorBox');
function clickAnswer(){
  answer.classList.add('blue');
  answerBox.style.display='block';
  wrong.style.pointerEvents="none";
  invalid.style.pointerEvents="none"
}
answer.addEventListener('click',clickAnswer);

function clickWrong(){
  wrong.classList.add('red');
  errorBox.style.display='block';
  answer.style.pointerEvents="none";
  invalid.style.pointerEvents="none";
}
function clickInvalid(){
  invalid.classList.add('red');
  errorBox.style.display='block';
  answer.style.pointerEvents="none"
  wrong.style.pointerEvents="none"
}

wrong.addEventListener('click',clickWrong);
invalid.addEventListener('click',clickInvalid);
