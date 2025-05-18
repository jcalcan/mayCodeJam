import ItemCard from "../ItemCard/ItemCard";
import "./HabitsSection.css";

function HabitsSection({ onCardClick, habitItems, handleAddClick }) {
  return (
    <div className="habits-section">
      <div className="habits-items-menu">
        <p>Your Items</p>
        <button className="habits-items-menu_btn" onClick={handleAddClick}>
          + Add New
        </button>
      </div>
      <ul className="habits-section__list">
        {habitItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default HabitsSection;
