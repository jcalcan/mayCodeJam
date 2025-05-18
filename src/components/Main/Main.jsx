import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ handleCardClick, habitItems }) {
  return (
    <main className="dashboard__content">
      <section className="dashboard__user__info">
        <p className="dashboard__title">Dashboard</p>
        <ul className="dashboard-cards__list">
          {habitItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
                // handleCardLike={handleCardLike}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
