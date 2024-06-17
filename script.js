const data = [
  "nhập câu 1, rồi xóa",
  "nhập thêm câu nữa, rồi lại xóa",
  "rảnh nên nhập thêm, xong xóa tiếp",
];

var speed = 120;
const p = document.getElementById("typing");

const delay = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const typeEffect = async () => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      p.innerHTML += data[i].charAt(j);
      await delay(speed);
    }
    await delay(speed * 4);
    for (let k = 0; k < data[i].length; k++) {
      p.innerHTML = p.innerHTML.slice(0, -1);
      await delay(speed / 4);
    }
    await delay(speed);
  }
};

typeEffect();
