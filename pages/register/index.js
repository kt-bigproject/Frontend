import { useState, useContext } from "react";
import AuthContext from "../../src/components/AuthContext/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password1, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, email, password1, password2);
    console.log(registerUser)
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <hr />
        <div>
          <label htmlFor="username">id</label>
          <input
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label htmlFor="Email">이메일</label>
          <input
            type="text"
            id="Email"
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
            required
          />
          <p></p>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-password">비밀번호 확인</label>
          <input
            type="password"
            id="confirm-password"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <p>{password2 !== password1 ? "비밀번호가 올바르지 않습니다" : ""}</p>
        </div>
        <button>Register</button>
      </form>
    </section>
  );
}

export default Register;