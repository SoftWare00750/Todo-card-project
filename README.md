# 🚀 Todo Card Component — Stage 0

A clean, accessible, and testable Todo / Task Card built with **HTML, CSS, and JavaScript**.

This project fulfills the requirements for the **Frontend Wizards Stage 0 Task**, focusing on:
- Testability
- Accessibility
- Responsive design

---

## 🌐 Live Demo
(Add your deployed link here — Vercel / Netlify)

---

## 📂 Project Structure
todo-card/
│── index.html
│── style.css
│── script.js


---

## ✅ Features

### 🧩 Core Functionality
- Task title and description
- Priority indicator (**Low / Medium / High**)
- Status indicator (**Pending / Done**)
- Due date display
- Dynamic time remaining:
  - Due in X days
  - Due tomorrow
  - Overdue by X hours
  - Due now

---

### 🎯 Interactivity
- Checkbox toggle:
  - Marks task as complete
  - Updates status to **Done**
  - Applies strike-through styling

- Buttons:
  - **Edit** → Logs action
  - **Delete** → Shows alert

---

### 🧪 Testability
All required `data-testid` attributes are implemented:

- `test-todo-card`
- `test-todo-title`
- `test-todo-description`
- `test-todo-priority`
- `test-todo-due-date`
- `test-todo-time-remaining`
- `test-todo-status`
- `test-todo-complete-toggle`
- `test-todo-tags`
- `test-todo-edit-button`
- `test-todo-delete-button`

---

### ♿ Accessibility
- Semantic HTML (`article`, `time`, `button`)
- Keyboard navigable
- Accessible checkbox (`input[type="checkbox"]`)
- ARIA labels for status and time updates
- Visible focus styles

---

### 📱 Responsiveness
- Mobile-first design
- Works from **320px to 1200px**
- Flexible layout with wrapping tags
- No horizontal overflow

---

## ⚙️ Technologies Used

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (ES6)

---

## 🧠 Key Logic

### Time Remaining Calculation
- Calculates difference between current time and due date
- Updates every 30–60 seconds
- Displays human-readable output

---

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/todo-card.git

Open the project:
cd todo-card
Run in browser:
Open index.html

📦 Deployment

You can deploy easily using:

Vercel
Netlify
GitHub Pages
📌 Submission Checklist

GitHub repository created
 Live URL deployed
 All data-testid attributes implemented
 Responsive layout
 Accessible interactions
✨ Author

Oluwadamilola Stephen Otunla

📄 License

This project is for educational and assessment purposes.


---

## 💡 Tip
Before submitting:
- Add your **GitHub repo link**
- Add your **Live URL**

---
If you want, I can also:
- :contentReference[oaicite:0]{index=0}
- Or :contentReference[oaicite:1]{index=1} 🚀


