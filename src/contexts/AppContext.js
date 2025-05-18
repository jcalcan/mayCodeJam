import React from "react";

const AppContext = React.createContext({
  isLoggedIn: false,
  isLoading: true,
  currentUser: null,
  handleLogout: () => {},
  handleUpdateProfile: () => {}
});

export default AppContext;
