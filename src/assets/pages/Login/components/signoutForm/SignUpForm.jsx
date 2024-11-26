import React, {useState} from "react";
import axios from "axios";
import Auth from "../scripts/auth";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const auth = new Auth();
    try {
      const userData = {
        username,
        email,
        password,
        roles: "ROLE_USER"
      }

      const response = await auth.createUser(userData);
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p>Use your email for registration</p>
        <input type="text"
               name="txt"
               placeholder="Name"
               value={username}
               onChange={e => setUsername(e.target.value)}
               required />

        <input type="email"
               name="email"
               placeholder="Email"
               value={email}
               onChange={e => setEmail(e.target.value)}
               required />

        <input type="password"
               name="pswd"
               placeholder="Password"
               value={password}
               onChange={e => setPassword(e.target.value)}
               required />

        <button type={"submit"}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
