const ACCESS_KEY = "rotkehlchens";

if (localStorage.getItem("access") !== ACCESS_KEY) {
  const input = prompt("Enter access code:");
  if (input !== ACCESS_KEY) {
    document.body.innerHTML = "No access";
  } else {
    localStorage.setItem("access", ACCESS_KEY);
  }
}

const stored = localStorage.getItem("birds");

let birds = [];

fetch('birds.json')
  .then(response => response.json())
  .then(data => {
    birds = data;
    renderBirdList(); // call your existing function to render checkboxes
  });

birds.forEach(bird => {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = bird.seen;

  checkbox.addEventListener("change", () => {
    bird.seen = checkbox.checked;
    saveProgress();
  });

  li.appendChild(checkbox);
  li.append(" " + bird.name);
  list.appendChild(li);
});

function saveProgress() {
  localStorage.setItem("birds", JSON.stringify(birds));
}