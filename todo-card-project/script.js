const dueDate = new Date("2026-03-01T18:00:00Z");
const timeElement = document.getElementById("time-remaining");
const checkbox = document.getElementById("checkbox");
const card = document.querySelector(".todo-card");
const statusText = document.getElementById("status-text");

function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  const hours = Math.floor(Math.abs(diff) / (1000 * 60 * 60));

  let text = diff > 0 ? `Due in ${hours} hours` : `Overdue by ${hours} hours`;

  timeElement.textContent = text;
}

updateTime();
setInterval(updateTime, 60000);

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    card.classList.add("completed");
    statusText.textContent = "Done";
  } else {
    card.classList.remove("completed");
    statusText.textContent = "Pending";
  }
});
