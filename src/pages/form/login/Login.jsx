import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import SectionIcons from "../../../components/section-icons/SectionIcons";
import SocialConnect from "../../../components/social-connect/SocialConnect";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <section className="login-section">
      <div className="social-login">
        <SocialConnect social="Google" color="red" />
        <SocialConnect social="Facebook" color="blue" />
      </div>
      <p className="text-login">Sign in with Email Address</p>
      <form action="" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Email or Username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="remember-box">
          <div>
            <input type="checkbox" name="" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <p>Forget Password?</p>
        </div>

        <button className="submit-btn">Sign In</button>

        <p className="sign-up-msg">
          Don't have an account? <a href="/">Sign up</a>
        </p>
      </form>
      <SectionIcons children={[faUserPlus]} />
    </section>
  );
};

export default Login;
