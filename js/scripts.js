document.addEventListener("DOMContentLoaded", function () {
  const moreBtn = document.getElementById("moreBtn");
  const moreInfo = document.getElementById("moreInfo");

  if (moreBtn && moreInfo) {
    moreBtn.addEventListener("click", function () {
      if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        moreBtn.textContent = "Show Less";
      } else {
        moreInfo.style.display = "none";
        moreBtn.textContent = "More About Me";
      }
    });
  }

  const surpriseBtn = document.getElementById("surpriseBtn");
  const surpriseOutput = document.getElementById("surpriseOutput");
  const funFacts = [
    "I can solve a Rubik’s cube in under a minute!",
    "I once built my own gaming PC from scratch.",
    "I’ve edited over 100 YouTube videos.",
    "I’m learning Japanese as a hobby.",
    "I have a cat named Pixel."
  ];

  if (surpriseBtn && surpriseOutput) {
    surpriseBtn.addEventListener("click", function () {
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      surpriseOutput.textContent = funFacts[randomIndex];
    });
  }

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      let valid = true;

      [name, email, message].forEach((field) => {
        if (!field.value.trim()) {
          field.style.border = "2px solid red";
          valid = false;
        } else {
          field.style.border = "2px solid green";
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("Please fill in all fields before submitting.");
      }
    });
  }

  const viewMoreButtons = document.querySelectorAll(".view-more-btn");

  viewMoreButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const detail = btn.nextElementSibling;
      if (detail.style.display === "none" || detail.style.display === "") {
        detail.style.display = "block";
        btn.textContent = "View Less";
      } else {
        detail.style.display = "none";
        btn.textContent = "View More";
      }
    });
  });
});
