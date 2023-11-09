// Use at least 15 selectors to update elements within Javascript
// Use at least 5 mouse events

function loadThemePreference() {
  const savedTheme = localStorage.getItem("theme");
  const themeToggleButton = document.getElementById("theme-toggle");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggleButton.textContent = "Light Theme";
  } else {
    document.body.classList.remove("dark-theme");
    themeToggleButton.textContent = "Dark Theme";
  }
}

// Set the theme on page load
document.addEventListener("DOMContentLoaded", loadThemePreference);

const theme = document.getElementById("theme-toggle");
theme.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-theme");
  const themeToggleButton = document.getElementById("theme-toggle");
  if (document.body.classList.contains("dark-theme")) {
    themeToggleButton.textContent = "Light Theme";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggleButton.textContent = "Dark Theme";
    localStorage.setItem("theme", "light");
  }
});

const header = document.querySelector("header");
header.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  header.style.backgroundImage = `radial-gradient(at ${x}% ${y}%, rgb(27 27 27), rgb(0 0 0))`;
});

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 255;
  const y = (e.clientY / window.innerHeight) * 255;
  header.style.color = `rgb(${x}, ${y}, 150)`;
});

const galleryItems = document.querySelectorAll(".gallery-item img");
galleryItems.forEach((img) => {
  img.addEventListener("click", () => {
    const isZoomed = img.classList.contains("zoomed");
    galleryItems.forEach((i) => i.classList.remove("zoomed"));
    if (isZoomed) {
      document
        .querySelector(".gallery-overlay")
        .classList.remove("show-overlay");
    } else {
      img.classList.add("zoomed");
      document.querySelector(".gallery-overlay").classList.add("show-overlay");
    }
  });
});
