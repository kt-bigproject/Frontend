import { useContext } from "react";
import AuthContext from "../../src/components/AuthContext/AuthContext";

export default function LoginPage() {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <hr />
        <label htmlFor="username">id</label>
        <input type="text" id="username" placeholder="Enter Username" /><br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" /><br />
        <button type="submit">Login</button>
      </form>
    </section>
  );

};
