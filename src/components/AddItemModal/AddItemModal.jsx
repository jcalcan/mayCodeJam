import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

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
          Run
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
          workout
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
