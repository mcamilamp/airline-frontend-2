import React from "react";

function SigninForm() {
  return (
    <div>
      <form action="#">
        <h1>Sign In</h1>
        <p>Use your account</p>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="pswd" placeholder="Password" required />
        <a href="#">Forget your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SigninForm;
