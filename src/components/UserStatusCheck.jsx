const UserStatusCheck = ({ loggedIn, isAdmin }) => {
  if (loggedIn && isAdmin) {
    return <h1>WelcomeAdmin!</h1>;
  } else if (loggedIn) {
    return <h1>WelcomeUser!</h1>;
  }
};

export default UserStatusCheck;
