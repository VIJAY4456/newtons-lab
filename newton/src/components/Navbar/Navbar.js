import React from "react";
import styles from "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-region">
      <div className="FirstNavbar">
        <p class="wp-block-paragraph ">
          <a href="http://www.newtonslab.in/#pricing">
            Save 90% on subscription for a limited time only →
          </a>
        </p>
      </div>
      <div>
        <nav className="navbar black">
          <div className="navbar-container">
            <div className="newton-part">
              <img
                className="newton-img"
                src="	https://newtonslab.in/wp-content/uploads/2024/01/Logo-with-text-dark-1.png"
              ></img>
              <h1 className="newton-name">Newton</h1>
            </div>
            <div className="midllepart">
              <ul className="navigation-2">
                <li className=".wp-block-navigation .wp-block-navigation-item">
                  <span className=".wp-block-navigation-item__label">Home</span>
                </li>
                <li className=".wp-block-navigation .wp-block-navigation-item">
                  {" "}
                  <span className=".wp-block-navigation-item__label">
                    Use Cases
                  </span>
                </li>
                <li className=".wp-block-navigation .wp-block-navigation-item">
                  {" "}
                  <span className=".wp-block-navigation-item__label">
                    Pricing
                  </span>
                </li>
              </ul>
            </div>
            <div className="singn-part-1">
              <div className="sign-part-2">Sign in</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
