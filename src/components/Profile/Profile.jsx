import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import HabitsSection from "../HabitsSection/HabitsSection";

function Profile({ onCardClick, habitItems, handleAddClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <HabitsSection
          onCardClick={onCardClick}
          habitItems={habitItems}
          handleAddClick={handleAddClick}
        />
      </section>
    </div>
  );
}

export default Profile;
