import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import SectionIcons from "../../../components/section-icons/SectionIcons";
import SocialConnect from "../../../components/social-connect/SocialConnect";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <section className="register-section">
      <div className="social-register">
        <SocialConnect social="Google" color="red" />
        <SocialConnect social="Facebook" color="blue" />
      </div>
      <p className="text-register">Sign in with Email Address</p>
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

        <button className="submit-btn">Sign In</button>

        <p className="sign-up-msg">
          Already have an account? <a href="/">Sign in</a>
        </p>
      </form>
      {/* <div className="register-icons">
        <Link to="/register">Guest Login</Link>
        <Link to="/register">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </Link>
      </div> */}

      <SectionIcons children={[faArrowRightToBracket]} btns={["Guest Login"]} />
    </section>
  );
};

export default Register;
