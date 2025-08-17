import '../styles/SignUp.css';

function SignUp() {
  return (
   
    <div className="signup">
      <form action="">

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />

        <button type="submit">Sign Up</button>

      </form>

    </div>



  )
}

export default SignUp;