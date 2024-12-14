// src/components/Header.js
import React from "react";
import "../../App.css";

const Header = () => {
  return (
    <header style={headerStyles}>
      <div class="wrap">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-3 mb-md-0 mb-4 d-flex align-items-center">
              <a class="navbar-brand" href="index.html">
                Chiro Care
              </a>
            </div>
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-8 mb-md-0 mb-3">
                  <div class="top-wrap d-flex">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-location-arrow"></span>
                    </div>
                    <div class="text">
                      <span>Address</span>
                      <span>
                        198 West 21th Street, Suite 721 New York NY 10016
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="top-wrap d-flex">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-phone"></span>
                    </div>
                    <div class="text">
                      <span>Call us</span>
                      <span>(+01) 123 456 7890</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav></nav>
    </header>
  );
};

// Inline styles for simplicity (can be moved to a separate CSS file)
const headerStyles = {
  background: "#333",
  color: "#fff",
  padding: "10px 0",
};

export default Header;
