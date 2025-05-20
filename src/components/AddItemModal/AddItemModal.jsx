import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

export default function AddItemModal({
  onClose,
  isOpen,
  onAddItemModalSubmit
}) {
  const [habitButton, setHabitButton] = useState("");

  function handleHabitButton(e) {
    setHabitButton(e.target.value);
  }

  function resetForm() {
    setHabitButton("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(habitButton);
    onAddItemModalSubmit({ habitButton }, resetForm);
  }

  return (
    <ModalWithForm
      title="New Habit"
      buttonText="Add Habit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the Habit type:</legend>
        <label htmlFor="run" className="modal__label modal__label_type_radio">
          <input
            id="run"
            name="habit"
            type="radio"
            className="modal__radio-input"
            value="run"
            onChange={handleHabitButton}
            checked={habitButton === "run"}
          />{" "}
          Morning run
        </label>
        <label
          htmlFor="workout"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="workout"
            name="habit"
            type="radio"
            className="modal__radio-input"
            value="workout"
            onChange={handleHabitButton}
            checked={habitButton === "workout"}
          />
          Workout
        </label>
        <label
          htmlFor="meditate"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="meditate"
            name="habit"
            type="radio"
            className="modal__radio-input"
            value="meditate"
            onChange={handleHabitButton}
            checked={habitButton === "meditate"}
          />
          Meditate - 30 minutes
        </label>

        <label
          htmlFor="drink-water"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="drink-water"
            name="habit"
            type="radio"
            className="modal__radio-input"
            value="drink water"
            onChange={handleHabitButton}
            checked={habitButton === "drink water"}
          />
          1.5L of water daily
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
