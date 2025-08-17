import { useState } from "react";
import SignUp from "./components/SignUp";
import UserCard from "./components/UserCard";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);

  const handleSignUp = (name, email) => {
    setUser({ name, email });
  };

  return (
    <div>
      <Navbar />  

      {user ? (
        <UserCard name={user.name} email={user.email} />
      ) : (
        <SignUp onSignUp={handleSignUp} />
      )}
    </div>
  );
}

export default App;
