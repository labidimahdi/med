import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Connexion = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  function handleLogin(e) {
    console.log(emailRef.current.value, passwordRef.current.value);
    e.preventDefault();
    axios
      .post(
        "http://localhost:5001/app/signin",
        {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setUser((prev) => ({ ...prev, accessToken: res.data.token }));
        localStorage.setItem("isAuth", true);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Navbar />
      <div className="connexion">
        <form className="form" action="#" method="POST" onSubmit={handleLogin}>
          <h1>Connectez-vous à Meditide</h1>
          <h2>Identifiez-vous pour accéder à votre compte</h2>
          <div className="form-group">
            <input
              id="email"
              name="email"
              type="email"
              ref={emailRef}
              autoComplete="email"
              required
              placeholder="email address"
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              ref={passwordRef}
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit">SignIn</button>
          <Link className="form-link" to="/Signup">
            SignUp
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Connexion;