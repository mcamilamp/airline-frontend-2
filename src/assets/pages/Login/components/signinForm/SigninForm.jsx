import React, {useState} from "react";
import Auth from "../scripts/auth"
import {redirect} from "react-router-dom";

function SigninForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const auth = new Auth()
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userData = {
        username,
        email,
        password,
        roles: "ROLE_USER"
      }

      const response = await auth.login(userData);
      redirect("/principalPage")
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <p>Use your account</p>
        <input type="email"
               name="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required />
        <input type="password"
               name="pswd"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required />
        <a href="#">Forget your password?</a>
        <button type={"submit"}>Sign In</button>
      </form>
    </div>
  );
}

export default SigninForm;
