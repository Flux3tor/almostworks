const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");
const bar = document.getElementById("bar");
const message = document.getElementById("message");

let progress = 0;

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

let clicks = 0;

// submit button dodges only after some hope
submit.addEventListener("mouseover", () => {
  if (progress > 40) {
    submit.style.position = "absolute";
    submit.style.left = Math.random() * 80 + "%";
    submit.style.top = Math.random() * 80 + "%";
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  clicks++;

  if (clicks === 1) {
    message.innerText = "Submitting…";
  } 
  else if (clicks === 2) {
    message.innerText = "Almost there…";
    cloneSubmit();
  } 
  else {
    message.innerText = "Captcha incorrect. Try again.";
    cloneSubmit();
    cloneSubmit();
  }
});


setInterval(() => {
  ["name", "email", "reason"].forEach(id => {
    if (Math.random() < 0.25) {
      document.getElementById(id).value = "";
    }
  });
}, 2500);

function cloneSubmit() {
  const original = document.getElementById("submit");
  const clone = original.cloneNode(true);

  clone.style.position = "absolute";
  clone.style.left = Math.random() * 80 + "%";
  clone.style.top = Math.random() * 80 + "%";

  clone.innerText = "Submit";
  
  clone.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("message").innerText =
      "Nice try. Wrong submit button.";
    cloneSubmit(); // spawns MORE
  });

  document.body.appendChild(clone);
}

// spawn a new one when user clicks original
submit.addEventListener("click", (e) => {
  e.preventDefault();
  cloneSubmit();
});

const captchaInput = document.getElementById("captcha");
const captchaText = document.getElementById("captcha-text");

function randomCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let text = "";
  for (let i = 0; i < 5; i++) {
    text += chars[Math.floor(Math.random() * chars.length)];
  }
  return text;
}

// constantly change captcha
setInterval(() => {
  captchaText.innerText = randomCaptcha();
}, 1500);

// block submission forever
submit.addEventListener("click", () => {
  message.innerText = "Captcha incorrect. Try again.";
});

setTimeout(() => {
  message.innerText = "Submitted successfully!";
  setTimeout(() => {
    message.innerText = "Just kidding.";
  }, 1500);
}, 20000);
