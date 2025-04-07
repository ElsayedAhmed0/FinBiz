import React from "react";
import SharedButton from "../sharedComponent/SharedButton"
import {Dropdown}  from "react-bootstrap";
const Header = () => {
  return (
    <header className="main_header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <a href=""><img src="img/logo.svg" alt="" /></a>
          </div>
          <div className="nav_bar">
            <ul>
              <li>
                <a href="">Product</a>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    Pages
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <a href="">Integrations</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="">
            {/* <button>Get started</button> */}
            <SharedButton variant="btnstart" label="Get started" size="fnt_16"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
