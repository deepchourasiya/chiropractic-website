// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <p>© 2024 Your Chiropractic Clinic. All rights reserved.</p>
    </footer>
  );
};

// Inline styles for simplicity (can be moved to a separate CSS file)
const footerStyles = {
  background: "#333",
  color: "#fff",
  padding: "10px 0",
  textAlign: "center",
  position: "absolute",
  bottom: "0",
  width: "100%",
};

export default Footer;
