import React from "react";
import { ImKeyboard } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div>
          <h1>Typecat</h1>
          <p>
            <ImKeyboard />
          </p>
        </div>
        <div>
          <h3>
            <BiUserCircle />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
