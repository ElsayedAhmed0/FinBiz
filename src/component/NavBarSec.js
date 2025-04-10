import React from "react";
import SharedButton from "../sharedComponent/SharedButton";
const NavBarSec = () => {
  return (
    <div className="sm_navbar">
      <div className="layer_img">
        <img src="img/layer.png" alt="" />
      </div>
      <div className="sm_nav_list">
        <ul>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Integration</a>
          </li>
          <li>
            <a href="">Demo</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            {" "}
            <SharedButton
              variant="login_btn"
              label="Login"
              size="fnt_16"
            />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarSec;
