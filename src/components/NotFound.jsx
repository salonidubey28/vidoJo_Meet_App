import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist. Enter valid name or link</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFound;
