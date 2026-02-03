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

const birds = stored
  ? JSON.parse(stored)
  : [
      { id: 1, name: "European Robin", seen: false },
      { id: 2, name: "Common Blackbird", seen: false },
      { id: 3, name: "Great Tit", seen: false }
    ];

const list = document.getElementById("bird-list");

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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW registered', reg))
      .catch(err => console.log('SW registration failed', err));
  });
}
