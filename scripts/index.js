document.addEventListener("DOMContentLoaded", () => {
  const maxValue = 2000;

  const habitModal = document.getElementById("habitModal");
  const addHabitBtn = document.getElementById("addHabitBtn");
  const cancelHabitBtn = document.getElementById("cancelHabitBtn");
  const graphBars = document.querySelectorAll(".graph__bar");

  function showHabitModal() {
    habitModal.classList.remove("habit-modal-hidden");
  }

  function hideHabitModal() {
    habitModal.classList.add("habit-modal-hidden");
  }

  function updateGraphBars() {
    graphBars.forEach((bar) => {
      const value = parseInt(bar.getAttribute("data-value"), 10);
      const height = (value / maxValue) * 100;
      bar.style.height = `${height}%`;

      if (value > maxValue) {
        bar.classList.add("graph__bar--overflow");
      }
    });
  }
  updateGraphBars();

  addHabitBtn.addEventListener("click", showHabitModal);
  cancelHabitBtn.addEventListener("click", hideHabitModal);
});

let lastSpinDegrees = 0;
const spinWheel = document.querySelector(".spinwheel__box");
const videoModal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__close-btn");

function showVideo(section) {
  const videoContainer = document.querySelector("#videoContainer");
  const iframe = videoContainer.querySelector("iframe");
  const videos = {
    Strength: "https://www.youtube.com/embed/H1F-UfC8Mb8?si=WabegDvWTvk7nHSY",
  };
}

spinWheel.addEventListener("click", function () {
  const spins = Math.floor(Math.random() * 5) + 5;
  lastSpinDegrees = spins * 360 + Math.floor(Math.random() * 360);
  spinWheel.style.transform = `rotate(${lastSpinDegrees}deg)`;
});

spinWheel.addEventListener("transitionend", function () {
  const section = getSelection(lastSpinDegrees);
  showVideo(section);
  videoModal.classList.add("modal-visible");
});

closeBtn.addEventListener("click", function () {
  console.log("Close button clicked");
  videoModal.classList.remove("modal-visible");
});
