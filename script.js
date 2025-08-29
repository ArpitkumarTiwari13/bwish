let spinText = document.getElementById("spin-text");
let spinner = document.getElementById("spinner");
let celebration = document.getElementById("celebration");
let messagesDiv = document.getElementById("messages");

let steps = ["Year 2025", "August", "30 August"];
let i = 0;

function showCelebration() {
  spinner.classList.add("hidden");
  celebration.classList.remove("hidden");
}

function spinSequence() {
  if (i < steps.length) {
    spinText.innerText = steps[i];
    i++;
    setTimeout(spinSequence, 2000);
  } else {
    setTimeout(showCelebration, 1500);
  }
}

spinSequence();

let loveMessages = [
  "You make my world brighter 🌟",
  "Forever yours 💖",
  "Every day with you is special ❤️",
  "Happy Birthday once again 🎂🎉"
];

let msgIndex = 0;
function nextMessage() {
  if (msgIndex < loveMessages.length) {
    let p = document.createElement("p");
    p.innerText = loveMessages[msgIndex];
    messagesDiv.appendChild(p);
    msgIndex++;
  }
}