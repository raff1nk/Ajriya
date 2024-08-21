document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("backsound");

  document.body.addEventListener("click", function () {
    if (audio.paused) {
      audio.play().catch(function (error) {
        console.log("Autoplay prevented:", error);
      });
    }
    audio.muted = false;
  });

  audio.play().catch(function (error) {
    console.log("Autoplay prevented:", error);
  });

  const sections = [
    { id: 1, colors: ["#ff9a9e", "#fad0c4"] },
    { id: 2, colors: ["#a18cd1", "#fbc2eb"] },
    { id: 3, colors: ["#fad0c4", "#ffd1ff"] },
  ];

  function updateBackground(sectionId) {
    const section = sections.find((s) => s.id === sectionId);
    document.body.style.background = `linear-gradient(to bottom, ${section.colors.join(", ")})`;
  }

  window.navigate = function (direction, currentSection) {
    let nextSection;

    if (direction === "next") {
      nextSection = currentSection + 1;
    } else {
      nextSection = currentSection - 1;
    }

    if (nextSection < 1 || nextSection > 3) {
      return;
    }

    document.querySelector(".section.active").classList.remove("active");
    document.getElementById(`section${nextSection}`).classList.add("active");
    updateBackground(nextSection);
  };

  updateBackground(1); // Set initial background for section 1

  window.login = function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const validUsername = "Teh ajriya c";
    const validPassword = "c";

    if (username === validUsername && password === validPassword) {
      document.getElementById("login-section").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    } else {
      errorMessage.textContent = "Username atau password salah";
    }
  };
});
