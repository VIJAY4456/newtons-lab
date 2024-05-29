import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    if (name && email && password) {
      const res = await fetch(
        "https://signup-react-project-default-rtdb.firebaseio.com/signup-react-projectdata.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          password: "",
        });
        alert("Account created successfully");
        navigate("/ChatGPT"); // Navigate to chatbot page
      }
    } else {
      alert("Please fill all required fields");
    }
  };

  return (
    <div>
      <div className="sign-up-part">
        <div>
          <div className="newton-imge">
            <img
              className="newton-imgee"
              src="https://newtonslab.in/wp-content/uploads/2024/01/Logo-with-text-dark-1.png"
              alt="Newton Logo"
            ></img>
          </div>
          <div className="create-txt">
            <h>Create an Account</h>
          </div>
          <hr></hr>
          <div className="signup-container">
            {/* Input fields for name, email, and password */}
            <input
              className="elements-txt"
              type="text"
              placeholder="Full Name"
              name="name"
              value={user.name}
              onChange={getUserData}
            />
            <input
              className="elements-txt"
              type="email"
              placeholder="E-mail"
              name="email"
              value={user.email}
              onChange={getUserData}
            />
            <input
              className="elements-txt"
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={getUserData}
            />
            {/* Button to submit the signup form */}
            <button className="creat-button" onClick={postData}>
              Create Account
            </button>
            <hr></hr>
            <div className="sign-txt">
              have an account?<a href="">sign in</a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="Newon-img-part">
        <img
          className="right-img"
          src="https://app.newtonslab.in/media/agency/customizations/login_signup/Newton-web_1_k1QCEtk.jpg"
          alt="Newton Image"
        ></img>
      </div>
    </div>
  );
};

export default Signup;
