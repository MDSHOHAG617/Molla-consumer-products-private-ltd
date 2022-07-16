import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img
        className="mx-auto w-96 lg:w-6/12"
        src="https://i.pinimg.com/originals/09/4c/fd/094cfdfce64c317a2c071756cd332ff8.gif"
        alt=""
      />
      <Link to="/" className="btn">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
