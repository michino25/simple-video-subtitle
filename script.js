const subtitles = [
  "Con người thích cười",
  "điều này là rõ ràng và dễ hiểu",
  "điều này đã trở nên quen thuộc và hiển nhiên",
];

let currentIndex = 0;
let subtitleText = [];

const line = document.getElementById("line");

var i = 0;
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

function showNextLetter() {
  if (currentIndex < subtitles.length) {
    let currentSubtitle = subtitles[currentIndex].split("");

    if (subtitleText.length < currentSubtitle.length) {
      subtitleText = subtitleText.concat(currentSubtitle[subtitleText.length]);
      line.textContent = subtitleText.join("");
    }
  } else {
    line.textContent = subtitleText.join("");
    currentIndex++;
  }

  setTimeout(showNextLetter, 50);
}

showNextLetter();
