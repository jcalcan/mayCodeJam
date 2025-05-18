import "./ItemCard.css";

function ItemCard({ item /*onCardClick*/ }) {
  // function handleImageClick() {
  //   onCardClick(item);
  // }

  return (
    <li className="itemCard">
      <h2 className="itemCard-title">{item.habit}</h2>
      {/* <img
        onClick={handleImageClick}
        className="itemCard-img"
        src={item.imageUrl}
        alt={item.habit}
      /> */}
    </li>
  );
}

export default ItemCard;
