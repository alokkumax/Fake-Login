import React, { useState } from "react";
import FakePromise from "./FakePromise";
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const disabledBtn = !email || pass.length < 6 || loading;
  const handelLogin = async () => {
    setErr(null);
    setLoading(true);
    try {
      await FakePromise({ email, pass });
      alert("Login Success");
      setLoading(false);
    } catch (error) {
      // console.log(error);
      setErr(error.message);
      setLoading(false);
      setEmail("");
      setPass("");
    }
  };

  return (
    <div className="login">
      <div className="inp">
        <label>email :</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        ></input>
      </div>
      <div className="inp">
        <label>password :</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          type="password"
        ></input>
      </div>
      <div className="err">{err}</div>
      <button disabled={disabledBtn} onClick={handelLogin}>
        Login
      </button>
    </div>
  );
}
export default Login;
