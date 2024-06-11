const subtitles = [
  "Con người thích cười, điều này là rõ ràng và dễ hiểu",
  "do đó con người sẽ tìm cách chọc cười nhau càng nhiều càng tốt",
  "điều này đã trở nên quen thuộc và hiển nhiên",
  "Thế nhưng có một điều mà vẫn còn ít người trong chúng ta quan tâm đến",
  "đó là hậu quả gì sẽ xảy ra nếu chỉ vì mục đích được cười",
  "liệu con người có sẵn sàng giải trí hoá mọi thứ trong xã hội này?",
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

    setTimeout(showNextLetter, 200);
  }
}

showNextLetter();
