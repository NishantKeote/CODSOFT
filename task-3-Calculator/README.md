# Interactive Grid Calculator with Keyboard Support

A sleek, fully functional standard calculator built using vanilla web technologies. This project focuses heavily on implementing a dynamic user interface using CSS Grid and handling complex state management, conditional arithmetic evaluation, and multi-input listeners in JavaScript.

---

## 🎮 Features

- **CSS Grid Layout:** A beautifully aligned 4-column button matrix that adapts dynamically to the container chassis.
- **Dual-Display Screen:** Tracks your active operations by showing your previous equation input directly above the current output operand.
- **Robust Math Logic:** Handles standard operations (Addition, Subtraction, Multiplication, Division, and Percentages) while preventing floating-point calculation errors using strict decimal rounding rules.
- **Dual Input Modes:** Full support for both interactive mouse clicks and fluid keyboard navigation.
- **Defensive Error Handling:** Built-in safeguards to catch and handle edge cases gracefully, such as dividing a number by zero.

---

## ⌨️ Keyboard Shortcuts

This calculator maps standard keyboard keys to the user interface for rapid calculations:

| Keyboard Key | Calculator Function |
| :--- | :--- |
| `0` to `9` | Appends numbers |
| `.` | Appends a decimal point (max one per number) |
| `+`, `-`, `*`, `/` | Triggers addition, subtraction, multiplication, and division |
| `%` | Triggers percentage/modulo calculations |
| `Enter` or `=` | Evaluates the active mathematical equation |
| `Backspace` | Deletes the last character entered (DEL) |
| `Escape` | Clears all data, operands, and active states (AC) |

---

## 🛠️ Tech Stack Used

- **HTML5:** Clean structural syntax utilizing semantic layout wrappers.
- **CSS3:** Custom UI design utilizing modern dark mode variables, structural drop-shadow depth, and dynamic layout generation via CSS Grid.
- **JavaScript (ES6):** Comprehensive event capturing using window event listeners, array looping via `forEach`, state switches, and conditional input routers.

---

## 📁 Project Structure

```text
├── index.html       # Markup elements and structural button mappings
├── style.css        # Comment-free grid layout design tokens
└── script.js        # Logic engine handling click, keyboard, and calculation states