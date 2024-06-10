// script.js

const subtitles = [
  "This is the first line of the subtitle.",
  "And this is the second line of the subtitle.",
  "Here is the third line of the subtitle.",
  "Finally, this is the fourth line.",
];

let currentIndex = 0;
let currentLine = 1;
let subtitleText = [];

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

function showNextLetter() {
  if (currentIndex < subtitles.length) {
    let currentSubtitle = subtitles[currentIndex].split(" ");

    if (subtitleText.length < currentSubtitle.length) {
      subtitleText = subtitleText.concat(currentSubtitle[subtitleText.length]);
      if (currentLine === 1) {
        line1.textContent = subtitleText.join(" ");
      } else {
        line2.textContent = subtitleText.join(" ");
      }
    } else {
      line1.textContent = subtitleText.join(" ");
      subtitleText = [];
      currentLine = 2;
      line2.textContent = "";
      currentIndex++;
    }

    setTimeout(showNextLetter, 300);
  }
}

showNextLetter();
