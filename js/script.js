let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent ="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
        
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0]: words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
    setTimeout(()=>{
        letter.className ="letter out";
    },i * 80);
});
nextWord.style.opacity = "1";
Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{
        letter.className = "letter in";
    },340 + i * 80);
});
currentWordIndex = currentWordIndex === maxWordIndex ? 0:currentWordIndex +1;
};

changeText();
setInterval(changeText,3000);

var mixer = mixitup('.portfolio-gallery');

const words = ["Build", "Create", "Design", "Code"],
  colors = ["blue", "green", "yellow", "red"],
  text = document.querySelector(".text");

// Generator (iterate from 0-3)
function* generator() {
  var index = 0;
  while (true) {
    yield index++;

    if (index > 3) {
      index = 0;
    }
  }
}

// Printing effect
function printChar(word) {
  let i = 0;
  text.innerHTML = "";
  text.classList.add(colors[words.indexOf(word)]);
  let id = setInterval(() => {
    if (i >= word.length) {
      deleteChar();
      clearInterval(id);
    } else {
      text.innerHTML += word[i];
      i++;
    }
  }, 500);
}

// Deleting effect
function deleteChar() {
  let word = text.innerHTML;
  let i = word.length - 1;
  let id = setInterval(() => {
    if (i >= 0) {
      text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
      i--;
    } else {
      text.classList.remove(colors[words.indexOf(word)]);
      printChar(words[gen.next().value]);
      clearInterval(id);
    }
  }, 300);
}

// Initializing generator
let gen = generator();

printChar(words[gen.next().value]);






















}