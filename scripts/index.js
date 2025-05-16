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
