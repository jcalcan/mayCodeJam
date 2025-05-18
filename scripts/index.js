document.addEventListener("DOMContentLoaded", () => {
  const maxValue = 2000;

  const addHabitBtn = document.getElementById("addHabitBtn");
  const habitModal = document.getElementById("habitModal");
  const cancelHabitBtn = document.getElementById("cancelHabitBtn");
  const bars = document.querySelectorAll(".graph__bar");

  function showHabitModal() {
    habitModal.classList.remove("habit-modal-hidden");
  }

  function hideHabitModal() {
    habitModal.classList.add("habit-modal-hidden");
  }

  function updateGraphBars() {
    bars.forEach((bar) => {
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

// experimenting the feature

function handleMoodSelection(event) {
  const mood = event.currentTarget.dataset.mood;

  document.body.setAttribute("data-mood", mood);
  moodPopup.classList.add("mood--hidden");
  dashboard.classList.remove("dashboard--hidden");
}

let moodBtns, moodPopup, dashboard;

document.addEventListener("DOMContentLoaded", () => {
  moodBtns = document.querySelectorAll(".mood__btn");
  moodPopup = document.getElementById("mood");
  dashboard = document.getElementById("dashboard");
  moodBtns.forEach((btn) => {
    btn.addEventListener("click", handleMoodSelection);
  });
});
