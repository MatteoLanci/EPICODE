/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";

import { leftFooterPanelLinks, rightFooterPanelLinks } from "./data/myFooter";
import { nanoid } from "nanoid";

import { ThemeContext } from "../../context/ThemeContext";

import { useLocation } from "react-router-dom";

import "./myFooter.css";

const MyFooter = () => {
  const { theme } = useContext(ThemeContext);

  const location = useLocation();

  const isBookDetailsPage = location.pathname.includes("/book/");

  return (
    <footer
      className={`footer page-footer blue pt-4 bg-dark text-light mt-5 overflow-hidden w-100 ${
        theme === "light" ? "footerLightTheme" : "footerDarkTheme"
      }`}
    >
      <div className="container-fluid text-center text-md-left">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/home?lang=it"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            <i className="bi bi-twitter"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://epicode.com/it/"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            <i className="bi bi-google"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/matteolanci/"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/MatteoLanci"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            <i className="bi bi-github"></i>
          </a>
        </section>
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="col-auto">
                <button
                  type={isBookDetailsPage ? "button" : "submit"}
                  className="btn btn-outline-light mb-4"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
        <div className="row ">
          <div className="col-md-6 mt-md-0 mt-3  d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-uppercase">EpiBooks</h5>
            <p>Where Every Request Finds its Perfect Solution!</p>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              {leftFooterPanelLinks.map((link) => {
                return (
                  <a
                    href="#"
                    key={nanoid()}
                    className="text-decoration-none footerLink "
                  >
                    <li key={link.index}>{link.title}</li>
                  </a>
                );
              })}
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              {rightFooterPanelLinks.map((link) => {
                return (
                  <a
                    href="#"
                    key={nanoid()}
                    className="text-decoration-none footerLink "
                  >
                    <li key={link.index} className={link.className}>
                      {link.title}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3 mt-1">
        © 2023 Copyright:&nbsp;Matteo Lanci{" "}
        <span style={{ fontSize: ".7rem" }}>for</span>&nbsp;
        <a href="#" className="text-decoration-none ">
          EpiBooks.com
        </a>
        &nbsp;| EPICODE
      </div>
    </footer>
  );
};

export default MyFooter;
