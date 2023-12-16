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

  $("#signupbtn").click(function () {
    var firstName = $("#first").val();
    var lastName = $("#surname").val();
    var instagramUsername = $("#instagram").val();
    var email = $("#humberemail").val();
    var phoneNumber = $("#phone").val();
    var exhibition = $("#exhibition").val();

    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Instagram Username", instagramUsername);
    localStorage.setItem("Email", email + "@humber.ca");
    localStorage.setItem("Phone Number", "+1" + phoneNumber);
    localStorage.setItem("Exhibition", exhibition);

    alert("Form data saved!");
    displayUserData();
  });

  function createDataCard(label, data) {
    return `
        <div class="col-md-4 mb-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${label}</h5>
                    <p class="card-text">${data}</p>
                </div>
            </div>
        </div>
    `;
  }

  function displayUserData() {
    var userDataHTML = "<h2 class='mb-3'>You have been siged up!</h2>";

    var dataItems = [
      "Exhibition",
      "First Name",
      "Last Name",
      "Instagram Username",
      "Email",
      "Phone Number",
    ];

    dataItems.forEach(function (item) {
      var data = localStorage.getItem(item);
      if (data) {
        userDataHTML += createDataCard(item, data);
      }
    });

    $("#userData").html(userDataHTML);
  }

  displayUserData();
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
