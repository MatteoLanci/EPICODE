import React, { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoDark from "../../assets/logo.png";
import logoLight from "../../assets/logo_white.png";
import "./styles.css";
import { TbBulbOff, TbBulb } from "react-icons/tb";

import { ThemeContext } from "../../context/themeContext";
import { useSession } from "../../middlewares/ProtectedRoutes";

const NavBar = (props) => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const session = useSession();
  // console.log(session);

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
  };

  return (
    <Navbar
      expand="lg"
      className="blog-navbar"
      fixed="top"
      bg={theme === "light" ? "light" : "dark"}
    >
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/homepage">
          <img
            className="blog-navbar-brand"
            alt="logo"
            src={theme === "light" ? logoDark : logoLight}
          />
        </Navbar.Brand>
        <div className="d-flex justify-content-between align-items-center gap-3">
          {session && (
            <>
              <p className={`m-0 ${theme === "light" ? "" : "text-light"}`}>
                You are logged as {session.firstName || session.displayName} {session.lastName}
              </p>

              <img
                src={session.avatar || session.photos[0].value}
                alt={session.firstName}
                className="userNavbar"
              />

              <Link to={"/"}>
                <Button
                  variant={theme === "light" ? "outline-primary" : "outline-warning"}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Link>
            </>
          )}

          {theme === "light" ? (
            <TbBulbOff style={{ fontSize: "2rem" }} onClick={() => handleTheme()} />
          ) : (
            <TbBulb style={{ fontSize: "2rem", color: "white" }} onClick={() => handleTheme()} />
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
