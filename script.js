const form = document.getElementById("signup");
const email = document.getElementById("email");
const note = document.getElementById("form-note");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!email.checkValidity()) {
    email.focus();
    return;
  }
  note.textContent = "You're on the list. We'll send a signal when ExtDevs is ready.";
  note.style.color = "#67dfb3";
  form.querySelector("button").innerHTML = "REGISTERED ✓";
  form.querySelector("button").disabled = true;
  email.disabled = true;
});

// Small parallax effect for the ambient orbs.
window.addEventListener("pointermove", (e) => {
  const x = (e.clientX / innerWidth - .5);
  const y = (e.clientY / innerHeight - .5);
  document.querySelector(".orb-a").style.transform = `translate(${x * 18}px, ${y * 12}px)`;
  document.querySelector(".orb-b").style.transform = `translate(${x * -12}px, ${y * -8}px)`;
});
