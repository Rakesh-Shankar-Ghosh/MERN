import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-success text-align p-4" style={{ maxHeight: "20vh" }}>
        <h1 className="text-center"> Footer Page Called</h1>
        <p className="text-center mt-3">
          <Link to="/About">About</Link>| |<Link to="/Contact">Contact</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
