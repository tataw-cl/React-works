import React from "react";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
// import WithAuth from "./withAuth";

const Homepage = () => {
  const { logOut, currentUser  } = useAuth();
  const navigate = useNavigate();
  async function handleLogOut() {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <div>
      Welcome to the Homepage Landing page
      <p>
        <strong>Email:</strong> {currentUser && currentUser.email}
      </p>
      <button onClick={handleLogOut}>
        Log Out
        {/* <Link to="/signup">Log Out</Link> */}
      </button>
    </div>
  );
};
export default Homepage;
// export default WithAuth(Homepage);
