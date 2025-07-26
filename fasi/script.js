// Dynamic rotating roles in home section
const roles = [
  "Web development|",
  "Android development|",
  "Full-stack development|",
  "Backend-development|",
  "System administrator|",
  "Web designing|",
];

const typedTextElem = document.getElementById("typed-text");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const erasingSpeed = 80;
const delayBetweenRoles = 1500;

function type() {
  const currentRole = roles[roleIndex];
  if (!isDeleting) {
    // Typing characters
    typedTextElem.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenRoles);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    // Deleting characters
    typedTextElem.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, erasingSpeed);
    }
  }
}

// Start typing animation once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  if (roles.length && typedTextElem) {
    type();
  }
});

// Fade-in animation on scroll for sections
const faders = document.querySelectorAll(".fade-in");

function checkFade() {
  faders.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);


function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const icon = document.getElementById("menu-icon");

  navLinks.classList.toggle("active");

  // Toggle icon
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
}

// Close menu when link clicked (mobile)
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById("navLinks");
    const icon = document.getElementById("menu-icon");

    navLinks.classList.remove("active");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  });
});
