import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Loginpage.css";
import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <div>
      <div className="boxLogin">
        <div></div>

        <div>
          <center>
            <button className="fbBtn">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: "24px", marginRight: "10px" }}
              />
              Sign Up with Facebook{" "}
            </button>{" "}
          </center>
          <br />
          <center>
            <button className="googleBtn">
              <FontAwesomeIcon
                icon={faGoogle}
                style={{ fontSize: "21px", marginRight: "12px" }}
              />
              Sign Up with Google{" "}
            </button>{" "}
          </center>
          <br /> <br />
          <div className="dividerH2">
            <h2>or</h2>
          </div>
          <br />
          <form>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            ></input>{" "}
          </form>
          <form>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            ></input>{" "}
          </form>
          <br />
          <center>
            <Link to="/">
              <button className="loginBtn">LOGIN</button>
            </Link>
          </center>
          <br />
          <center>
            <div className="notMember">
              <p>
                Not yet a member? <a href=" ">Sign up here!</a>
              </p>
            </div>
          </center>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Loginpage;
