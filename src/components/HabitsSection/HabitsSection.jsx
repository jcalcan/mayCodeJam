import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import AppContext from "../../contexts/AppContext";
import "./HabitsSection.css";

function HabitsSection({ onCardClick, habitItems, handleAddClick }) {
  const { isLoggedIn, currentUser } = useContext(AppContext);
  const habits = [
    {
      icon: "public/running.png",
      alt: "Running icon",
      name: "Morning run"
    },
    {
      icon: "public/water.png",
      alt: "water icon",
      name: "1.5L of water daily"
    },
    {
      icon: "public/meditation.png",
      alt: "meditation icon",
      name: "Meditate - 30 minutes"
    }
  ];

  return (
    <div className="habits-section">
      <div className="habits-items-menu">
        <p>Your Items</p>
        <button className="habits-items-menu_btn" onClick={handleAddClick}>
          + Add New
        </button>
      </div>
      <section className="tracker">
        <h2 className="tracker__title">Habit Tracker</h2>
        <ul className="tracker__list">
          {habitItems.map((habit) => (
            <ItemCard key={habit._id} item={habit} onCardClick={onCardClick} />
          ))}
        </ul>

        <button
          className="tracker__add-btn"
          id="addHabitBtn"
          onClick={handleAddClick}
          disabled={!isLoggedIn}
        >
          Add Habit
        </button>
      </section>
    </div>
  );
}

export default HabitsSection;
