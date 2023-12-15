AOS.init();

$(document).ready(function () {
  const savedTheme = localStorage.getItem("theme");
  if (!savedTheme) {
    localStorage.setItem("theme", "light");
    savedTheme = "light";
  }
  setTheme(savedTheme);

  $("#theme-toggle").click(function () {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });

  $("div.card").hover(function () {
    $(this).toggleClass("animate__animated animate__tada");
  });

  $("#pricing-button").click(function () {
    $("#pricing").fadeToggle();
  });

  $(".main-text").hover(function () {
    $(this).toggleClass("animate__animated animate__shakeX");
  });

  $("#fake-theme-toggle").click(function () {
    $(this).addClass("animate__animated animate__hinge");
  });

  $("#main-image").click(function () {
    $(this).toggleClass("animate__animated animate__swing");
  });

  $(".news-button").click(function () {
    $(this).addClass("animate__animated animate__hinge");
  });
});

function setTheme(theme) {
  if (theme === "light") {
    $("#theme-toggle").text("Light Theme");
    $("body").attr("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    $("#theme-toggle").text("Dark Theme");
    $("body").attr("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

const upcomingBtn = document.getElementById("show-upcoming");
const upcomingSection = document.getElementById("upcoming");

if (upcomingBtn) {
  upcomingBtn.addEventListener("click", (e) => {
    if (upcomingBtn.innerHTML == "Show Upcoming Exhibitions") {
      upcomingSection.style.display = "block";
      upcomingBtn.innerHTML = "Hide Upcoming Exhibitions";
    } else {
      upcomingSection.style.display = "none";
      upcomingBtn.innerHTML = "Show Upcoming Exhibitions";
    }
  });
}

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

const popupWindow = document.getElementById("popupWindow");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".contact-form button");

document.getElementById("contact-btn").addEventListener("click", (e) => {
  popupWindow.style.display = "block";
});
closeBtn.addEventListener("click", (e) => {
  popupWindow.style.display = "none";
});

submitBtn.addEventListener("click", (e) => {
  alert("Thank you for your submission!");
  popupWindow.style.display = "none";
});

window.onclick = function (event) {
  if (event.target === popupWindow) {
    popupWindow.style.display = "none";
  }
};
