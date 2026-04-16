// ── Config ────────────────────────────────────────────────────────
const DUE_DATE = new Date("2026-04-20T18:00:00Z");

// ── DOM refs ──────────────────────────────────────────────────────
const card         = document.querySelector("[data-testid='test-todo-card']");
const checkbox     = document.querySelector("[data-testid='test-todo-complete-toggle']");
const statusEl     = document.querySelector("[data-testid='test-todo-status']");
const timeEl       = document.querySelector("[data-testid='test-todo-time-remaining']");
const titleEl      = document.querySelector("[data-testid='test-todo-title']");
const editBtn      = document.querySelector("[data-testid='test-todo-edit-button']");
const deleteBtn    = document.querySelector("[data-testid='test-todo-delete-button']");

// ── Time remaining ────────────────────────────────────────────────
function humaniseDiff(ms) {
  const abs = Math.abs(ms);
  const mins = Math.floor(abs / 60000);
  const hours = Math.floor(abs / 3600000);
  const days = Math.floor(abs / 86400000);
  const isPast = ms < 0;

  let label;

  if (abs < 60000) {
    label = "Due now!";
  } else if (abs < 3600000) {
    label = isPast ? `Overdue by ${mins} min` : `Due in ${mins} min`;
  } else if (abs < 86400000) {
    label = isPast ? `Overdue by ${hours} hr` : `Due in ${hours} hr`;
  } else if (days === 1) {
    label = isPast ? "Overdue by 1 day" : "Due tomorrow";
  } else {
    label = isPast ? `Overdue by ${days} days` : `Due in ${days} days`;
  }

  return { label, isPast };
}

function updateTimeRemaining() {
  const diff = DUE_DATE - Date.now();
  const { label, isPast } = humaniseDiff(diff);

  timeEl.textContent = label;
  timeEl.classList.toggle("overdue", isPast);
}

updateTimeRemaining();
setInterval(updateTimeRemaining, 30000);

// ── Checkbox toggle ───────────────────────────────────────────────
if (checkbox) {
  checkbox.addEventListener("change", () => {
    const done = checkbox.checked;

    card.classList.toggle("completed", done);

    const newStatus = done ? "Done" : "Pending";
    statusEl.textContent = newStatus;
  });
}

// ── Buttons FIXED ─────────────────────────────────────────────────
if (editBtn) {
  editBtn.addEventListener("click", () => {
    console.log("Edit clicked");
    alert("Edit action triggered");
  });
}

if (deleteBtn) {
  deleteBtn.addEventListener("click", () => {
    alert("Delete clicked — task would be removed.");
  });
}
