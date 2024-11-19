import React from "react";

function SignoutForm() {
  return (
    <div>
      <form action="#">
        <h1>Create Account</h1>
        <p>Use your email for registration</p>
        <input type="text" name="txt" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="pswd" placeholder="Password" required />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignoutForm;
