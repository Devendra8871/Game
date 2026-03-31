let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "purple", "orange"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
      if (started == false) {
            console.log("Game is started");
            started = true;

            levelup();
      }
});

function btnFlash(btn) {
      btn.classList.add("flash");
      setTimeout(function () {
            btn.classList.remove("flash");
      }, 250);
}

function levelup() {
      level++;
      h2.innerText = `Level ${level}`;

      let randIdx = Math.floor(Math.random() * 3);
      let randColor = btns[randIdx];
      let randBtn = document.querySelector(`.${randColor}`);
      console.log(randIdx);
      console.log(randColor);
      console.log(randBtn);
      btnFlash(randBtn);
}
function btnPress(){
      console.log(this);
}

let allBtns = document.querySelectorAll("btn");
for (btn of allBtns) {
      btn.addEventListener("click", btnPress);
}
