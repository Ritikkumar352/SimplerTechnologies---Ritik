import { useState } from "react";
import "../styles/SignUp.css";

function SignUp({ onSignUp }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSignUp) {   
      onSignUp(formData.name, formData.email);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" required onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required onChange={handleChange} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
