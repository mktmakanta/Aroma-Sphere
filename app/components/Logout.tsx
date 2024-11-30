import { logoutUser } from "../lib/auth";

const LogoutButton = () => {
  return <button onClick={logoutUser}>Log Out</button>;
};

export default LogoutButton;
