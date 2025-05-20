import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  function handleImageClick() {
    onCardClick(item);
  }

  return (
    <li className="itemCard-tracker__item" onClick={() => onCardClick(item)}>
      <img
        src="/run-icon.svg"
        alt="Run Icon"
        width={48}
        height={48}
        style={{ flexShrink: 0 }}
      />
      <h2 className="itemCard-title">{item.habit}</h2>
    </li>
  );
}

export default ItemCard;
