const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const submit = document.getElementById('submit');
const buttons = [minus, plus, heart, submit];
const comments = [];

let time = 0;
let isPaused = false;


let timer = setInterval("startTimer()", 1000);

function startTimer() {
  if (isPaused == false) {
    time++;
    counter.innerText = `${time}`;
  }
}

function minusTimer() {
  minus.addEventListener("click", function() {
    counter.innerText = `${time--}`;
  });
}

function plusTimer() {
  plus.addEventListener("click", function() {
    counter.innerText = `${time++}`;
  });
}

function pauseTimer() {
  pause.addEventListener("click", function() {
    if (isPaused == false) {
      isPaused = true;
      buttons.forEach(button => button.disabled = true);
      pause.innerText = "resume";
    }
    else {
      isPaused = false;
      buttons.forEach(button => button.disabled = false);
      pause.innerText = "pause";
    }
  })
}

function comment() {
  submit.addEventListener("click", function(e) {
    e.preventDefault();

    let comment = document.getElementById("comment-input");
    let p = document.createElement("p");
    let list = document.getElementById("list");
    list.appendChild(p);

    p.innerText = comment.value;
    comment.value = "";
  })
}

function like() {
  heart.addEventListener("click", function () {
    let likes = document.querySelector(".likes");
    let li = document.getElementById(time);

    if(li) {
      let num = parseInt(li.innerText.split(" ").slice(4, 5));
      li.innerText = `${time} has been liked ${num + 1} times`;
    } else {
      let li = document.createElement("li");
      li.setAttribute("id", time);
      likes.appendChild(li);
      li.innerText = `${time} has been liked 1 time`;
    }
  });
}


document.addEventListener("DOMContentLoaded", function() {
  minusTimer();
  plusTimer();
  pauseTimer();
  comment();
  like();
});

