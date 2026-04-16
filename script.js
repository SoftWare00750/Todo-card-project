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
  const abs      = Math.abs(ms);
  const mins     = Math.floor(abs / 60_000);
  const hours    = Math.floor(abs / 3_600_000);
  const days     = Math.floor(abs / 86_400_000);
  const isPast   = ms < 0;

  let label;

  if (abs < 60_000) {
    label = "Due now!";
  } else if (abs < 3_600_000) {
    // under 1 hour
    label = isPast
      ? `Overdue by ${mins} min${mins !== 1 ? "s" : ""}`
      : `Due in ${mins} min${mins !== 1 ? "s" : ""}`;
  } else if (abs < 86_400_000) {
    // under 24 hours
    label = isPast
      ? `Overdue by ${hours} hr${hours !== 1 ? "s" : ""}`
      : `Due in ${hours} hr${hours !== 1 ? "s" : ""}`;
  } else if (days === 1) {
    label = isPast ? "Overdue by 1 day" : "Due tomorrow";
  } else {
    label = isPast
      ? `Overdue by ${days} days`
      : `Due in ${days} days`;
  }

  return { label, isPast };
}

function updateTimeRemaining() {
  const diff = DUE_DATE - Date.now();
  const { label, isPast } = humaniseDiff(diff);

  timeEl.textContent = label;
  timeEl.classList.toggle("overdue", isPast);
  timeEl.setAttribute("aria-label", label);
}

// Run immediately, then every 30 seconds
updateTimeRemaining();
setInterval(updateTimeRemaining, 30_000);

// ── Checkbox toggle ───────────────────────────────────────────────
checkbox.addEventListener("change", () => {
  const done = checkbox.checked;

  card.classList.toggle("completed", done);

  const newStatus = done ? "Done" : "Pending";
  statusEl.textContent = newStatus;
  statusEl.setAttribute("aria-label", `Status: ${newStatus}`);
  titleEl.setAttribute("aria-label",
    done ? `${titleEl.textContent.trim()} — completed` : titleEl.textContent.trim()
  );
});

// ── Edit / Delete ─────────────────────────────────────────────────
editBtn.addEventListener("click", () => {
  console.log("edit clicked");
});

deleteBtn.addEventListener("click", () => {
  alert("Delete clicked — task would be removed.");
});
