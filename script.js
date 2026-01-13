const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");
const bar = document.getElementById("bar");
const message = document.getElementById("message");

let progress = 0;

// submit button dodges
submit.addEventListener("mouseover", () => {
  submit.style.position = "absolute";
  submit.style.left = Math.random() * 70 + "%";
  submit.style.top = Math.random() * 70 + "%";
});

// fake loading bar
setInterval(() => {
  progress += Math.random() * 15;
  if (progress > 100) {
    progress = Math.random() * 20;
  }
  bar.style.width = progress + "%";
}, 600);

// cancel lies
cancel.onclick = () => {
  message.innerText = "Cancelled. Probably.";
};

// submit never really submits
submit.onclick = () => {
  message.innerText = "Submitting…";
  setTimeout(() => {
    const responses = [
      "Success! (not really)",
      "Error: worked too well",
      "Submission failed successfully",
      "Please try again later (or never)"
    ];
    message.innerText = responses[Math.floor(Math.random() * responses.length)];
  }, 2000);
};

// inputs randomly wipe themselves
setInterval(() => {
  if (Math.random() < 0.3) {
    document.getElementById("name").value = "";
  }
  if (Math.random() < 0.2) {
    document.getElementById("email").value = "";
  }
}, 2500);
