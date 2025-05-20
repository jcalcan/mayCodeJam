import "./ItemCard.css";

const habitIcons = {
  run: { src: "/run-icon.svg", alt: "Run Icon", label: "Morning run" },
  workout: { src: "/run-icon.svg", alt: "Run Icon", label: "Workout" },
  "drink water": {
    src: "/water.png",
    alt: "Water Icon",
    label: "1.5L of water daily"
  },
  meditate: {
    src: "/meditation.png",
    alt: "Meditate Icon",
    label: "Meditate - 30 minutes"
  }
};

const habitLabels = {
  run: "Morning run",
  workout: "Workout",
  meditate: "Meditate - 30 minutes",
  "drink water": "1.5L of water daily"
};

function ItemCard({ item }) {
  const icon = habitIcons[item.habit];

  return (
    <li className="itemCard-tracker__item">
      <img
        src={icon.src}
        alt={icon.alt}
        width={48}
        height={48}
        style={{ flexShrink: 0 }}
      />
      <h2 className="itemCard-title">{icon.label}</h2>
    </li>
  );
}

export default ItemCard;
