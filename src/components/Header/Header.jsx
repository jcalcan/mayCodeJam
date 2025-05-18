import { Link } from "react-router-dom";
import "./Header.css";
import avatar from "../../assets/avatar.svg";
import logo from "../../assets/Logo.svg";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";

function Header({ handleAddClick, handleSignupClick, handleLoginClick }) {
  const { isLoggedIn, currentUser } = useContext(AppContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric"
  });

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" alt="Codify Fitness" src={logo} />
      </Link>
      <p className="header__date">{currentDate}</p>

      {!isLoggedIn ? (
        <>
          <button
            type="button"
            className="header__signup-btn"
            onClick={handleSignupClick}
          >
            Sign Up
          </button>

          <button
            type="button"
            className="header__login-btn"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="header__add-habit-btn"
            onClick={handleAddClick}
          >
            + Add Habit
          </button>
          {isLoggedIn && currentUser && (
            <>
              <Link to="/profile">
                <div className="header__user-container">
                  <p className="header__username">{currentUser.name}</p>
                  {currentUser.avatar && currentUser.avatar !== "" ? (
                    <img
                      src={currentUser.avatar || avatar}
                      alt={currentUser.name}
                      className="header__avatar"
                    />
                  ) : (
                    <span className="header__avatar">
                      {currentUser.name?.trim()
                        ? currentUser.name[0].toUpperCase()
                        : ""}
                    </span>
                  )}
                </div>
              </Link>
            </>
          )}
        </>
      )}
    </header>
  );
}

export default Header;
