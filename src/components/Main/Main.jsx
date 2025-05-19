import ItemCard from "../ItemCard/ItemCard";
import CaloriesGraph from "../CaloriesGraph/CaloriesGraph";
import SpinWheel from "../SpinWheel/SpinWheel";
import HabitsSection from "../HabitsSection/HabitsSection";
import "./Main.css";

function Main({ handleAddClick, habitItems }) {
  return (
    <main className="dashboard__content">
      <section className="dashboard__user__info">
        <p className="dashboard__title">Dashboard</p>
        <CaloriesGraph />
        <SpinWheel />
        <HabitsSection
          handleAddClick={handleAddClick}
          habitItems={habitItems}
        />
      </section>
    </main>
  );
}

export default Main;
