import React, { memo, useCallback } from "react";

import PropTypes from "prop-types";

import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";
const Login = ({ setIsAuth }) => {
  const [password, login] = [12345, "abc"];
  const navigate = useNavigate();
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (login == e.target.login.value && password == e.target.password.value) {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/");
    }
  }, []);

  return (
    <>
      <section className="login">
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="Enter your login"
            className="input"
            type="text"
            id="login"
            name="login"
          />
          <input
            placeholder="*********"
            className="input"
            type="password"
            id="password"
            name="password"
          />
          <div>
            <p>
              <strong>login:</strong> {login}
            </p>
            <p>
              <strong>password:</strong> {password}
            </p>
          </div>
          <button>Submit</button>
        </form>
      </section>
    </>
  );
};

Login.protoType = {
  setIsAuth: PropTypes.func,
};

const LoginPage = memo(Login);

export default LoginPage;
