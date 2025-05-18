import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";

import "./App.css";
import "../../index.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AppContext from "../../contexts/AppContext";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import { getToken, setToken } from "../../utils/token";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// import ItemModalDeleteConfirmation from "../ItemModalDeleteConfirmation/ItemModalDeleteConfirmation";
import { JsonAPI } from "../../utils/api";

const jsonServerApi = new JsonAPI();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [habitItems, setHabitItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    jsonServerApi
      .getItems()
      .then((response) => {
        setHabitItems(response.data || []);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      setIsLoading(false);
      return;
    }
    jsonServerApi
      .getUserInfo(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser({
          username: data.data.name,
          email: data.data.email,
          avatar: data.data.avatar,
          _id: data.data._id
        });
      })
      .catch(console.error);
  }, []);

  function handleSignupClick() {
    setActiveModal("signup");
  }

  function handleLoginClick() {
    setActiveModal("signin");
  }

  function handleCardClick(card) {
    setActiveModal("preview");
    setSelectedCard(card);
  }

  function handleAddClick() {
    setActiveModal("add-garment");
  }

  function closeActiveModal() {
    setActiveModal("");
  }

  function handleAddItemModalSubmit({ habitButton }, resetForm) {
    const token = getToken();
    jsonServerApi
      .postItems(
        {
          habit: habitButton
        },
        token
      )
      .then((data) => {
        setHabitItems([data, ...habitItems]);
      })
      .then(() => {
        closeActiveModal();
      })
      .then(() => {
        resetForm();
      })
      .catch(console.error);
  }

  const handleUpdateProfile = ({ name, avatar }) => {
    const token = getToken();
    jsonServerApi
      .updateUserInfo({ name, avatar }, token)
      .then(() => {
        return jsonServerApi.getUserInfo(token);
      })
      .then((data) => {
        // console.log("User Data:", data.data);
        setCurrentUser({
          username: data.data.name,
          email: data.data.email,
          _id: data.data._id,
          avatar: data.data.avatar
        });

        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Invalid email or avatar URL");
      });
  };

  function handleRegistration({ name, email, password, avatar }) {
    return jsonServerApi
      .createUser({
        name,
        email,
        password,
        avatar
      })
      .then(() => {
        return jsonServerApi.authorize({ email, password });
      })
      .then((data) => {
        if (data.data.token) {
          setToken(data.data.token);
          return jsonServerApi.getUserInfo(data.data.token);
        }
      })
      .then((userinfo) => {
        setCurrentUser({
          username: userinfo.data.name,
          email: userinfo.data.email,
          avatar: userinfo.data.avatar || null,
          _id: userinfo.data._id
        });
        setIsLoggedIn(true);
        closeActiveModal();
        navigate("/");
      })
      .catch((error) => {
        if (error.message === "Email already exists") {
          return Promise.reject(
            "This email is already registered. Please use a different email or try logging in."
          );
        }
        return Promise.reject(
          "An error occurred during registration. Please try again."
        );
      });
  }
  function handleLogin({ email, password }) {
    if (!email || !password) {
      return;
    }
    jsonServerApi
      .authorize({ email, password })
      .then((data) => {
        if (data.data.token) {
          setToken(data.data.token);
          return jsonServerApi.getUserInfo(data.data.token);
        }
      })
      .then((data) => {
        // console.log("User Data:", data.data)
        setCurrentUser({
          username: data.data.name,
          email: data.data.email,
          _id: data.data._id,
          avatar: data.data.avatar || null
        });
        setIsLoggedIn(true);

        const redirectPath = location.state?.from?.pathname || "/";
        navigate(redirectPath);
        // console.log("Login Successful!")
        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Invalid email or password");
      });
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({ username: "", email: "", avatar: "", _id: "" });
    setToken("");
    navigate("/");
  };

  const handleValidation = (data) => {
    const urlRegex = /^https?:\/\/\S+$/i;
    const errors = {};

    if (data.name.length < 3) {
      errors.name = "Username must be larger than 3";
    }

    if (!urlRegex.test(data.avatar)) {
      errors.avatar = "Avatar must be a valid URL";
    }

    return Object.keys(errors).length === 0 ? true : errors;
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        currentUser,
        isLoading,
        handleLogout,
        handleUpdateProfile,
        handleValidation
      }}
    >
      <div className="page">
        <div className="page__content">
          <Header
            handleSignupClick={handleSignupClick}
            handleLoginClick={handleLoginClick}
            handleAddClick={handleAddClick}
            onColor={"#fff"}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleCardClick={handleCardClick}
                  habitItems={habitItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    onCardClick={handleCardClick}
                    habitItems={habitItems}
                    handleAddClick={handleAddClick}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          <RegisterModal
            isOpen={activeModal === "signup"}
            onClose={closeActiveModal}
            handleRegistration={handleRegistration}
          />
          <LoginModal
            isOpen={activeModal === "signin"}
            onClose={closeActiveModal}
            handleLogin={handleLogin}
            errorMessage={errorMessage}
          />

          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={closeActiveModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
          />
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            onClose={closeActiveModal}
            // onDelete={handleDeleteCardConfirmation}
          />
          {/* <ItemModalDeleteConfirmation
            isOpen={activeModal === "confirm-delete"}
            onClose={closeActiveModal}
            onHandleDeleteCard={handleDeleteCard}
          /> */}

          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
