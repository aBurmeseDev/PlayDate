import React, { Component } from "react";
import { Link } from "react-router-dom";
import googleButton from "../../pages/Login/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png";
import logo from "./logo3.png";
import "./Navbar.css";

class Navbar extends Component {
  componentDidMount() {
    this.props.handleResize(this.navbarElement.clientHeight);

    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.props.handleResize(this.navbarElement.clientHeight);
  };

  render() {
    return (
      <nav
        className="navbar-fixed-top navbar-toggler"
        ref={element => (this.navbarElement = element)}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img
                alt="Kids Fun"
                src={logo}
                style={{ width: 100, height: 60, marginTop: -17 }}
              />
            </Link>
          </div>
          {this.props.user && this.props.user._id && (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-">
              <li
                className={
                  window.location.pathname === "/search" ? "active" : ""
                }
              >
                <Link to="/search">Explore</Link>
              </li>
              <li
                className={
                  window.location.pathname === "/playgroup" ? "active" : ""
                }
              >
                <Link to="/playgroup">Playgroups</Link>
              </li>
              <li>
                <a href="/" className="logout" onClick={this.props.logout}>
                  Logout
                </a>
              </li>
            </ul>
          )}
          {!this.props.user && (
            <ul className="nav navbar-nav navbar-right">
              <a
                href={"http://localhost:3001/auth/google/"}
                // href={
                //   window.location.hostname === "localhost"
                //     ? "http://localhost:3001/auth/google/"
                //     : "https://.herokuapp.com/auth/google/"
                // }
              >
                {/*<GoogleButton /> */}
                <img
                  src={googleButton}
                  alt="sign into Google Button"
                  className="googleBtn"
                />
              </a>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
