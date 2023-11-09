// Use at least 15 selectors to update elements within Javascript
// Use at least 5 mouse events

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const themeToggleButton = document.getElementById("theme-toggle");
  if (document.body.classList.contains("dark-theme")) {
    themeToggleButton.textContent = "Light Theme";
  } else {
    themeToggleButton.textContent = "Dark Theme";
  }
}

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
