// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Tab Switching
const tabs = document.querySelectorAll(".tab-menu li");
const contents = document.querySelectorAll(".tab-content");

// Function to activate a tab
const activateTab = (selectedTab) => {
  tabs.forEach(t => t.classList.remove("active"));
  contents.forEach(c => c.classList.remove("active"));
  selectedTab.classList.add("active");
  const targetContent = document.getElementById(selectedTab.dataset.tab);
  if (targetContent) {
    targetContent.classList.add("active");
  }
};

// Add click and keyboard (Enter/Space) functionality for tabs
tabs.forEach(tab => {
  tab.addEventListener("click", () => activateTab(tab));

  tab.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activateTab(tab);
    }
  });
});

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

const applyTheme = (theme) => {
  document.body.classList.toggle("dark-mode", theme === "dark");
  themeToggle.textContent = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
};

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  applyTheme(currentTheme);
  localStorage.setItem("theme", currentTheme);
});

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

// Contact Form Validation
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateForm() {
  let isValid = true;

  // Name Validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty!";
    nameError.style.display = "block";
    nameInput.classList.add("invalid");
    isValid = false;
  } else {
    nameError.style.display = "none";
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  }

  // Email Validation
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Invalid email format!";
    emailError.style.display = "block";
    emailInput.classList.add("invalid");
    isValid = false;
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
  }

  // Message Validation
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters!";
    messageError.style.display = "block";
    messageInput.classList.add("invalid");
    isValid = false;
  } else {
    messageError.style.display = "none";
    messageInput.classList.remove("invalid");
    messageInput.classList.add("valid");
  }

  return isValid;
}

form.addEventListener("input", validateForm);
form.addEventListener("submit", (e) => {
  if (!validateForm()) {
    e.preventDefault();
  }
});

// Dropdown Contact Info Card
const toggleButton = document.getElementById("contact-info-toggle");
const dropdownCard = document.getElementById("dropdown-card");

toggleButton.addEventListener("click", () => {
  dropdownCard.classList.toggle("active");
});


// Scroll-to-Top Button
const scrollTopButton = document.createElement("button");
scrollTopButton.id = "scroll-to-top";
scrollTopButton.textContent = "↑";
document.body.appendChild(scrollTopButton);

scrollTopButton.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  function createConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`; // Random position across the viewport
    confetti.style.animationDelay = `${Math.random() * 2}s`; // Random delay for fall
    confetti.style.backgroundColor = getRandomColor();
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000); // Remove confetti after 5 seconds
  }

  function getRandomColor() {
    const colors = ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0", "#9966ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual form submission for demo
    console.log("Form submitted!"); // Debugging log
    for (let i = 0; i < 30; i++) {
      createConfetti();
    }
  });
});
