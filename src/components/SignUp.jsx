import "../styles/SignUp.css";

function SignUp() {
  return (
    <div className="signup">
      <form action="">
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
