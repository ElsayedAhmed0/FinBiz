import React, { useState } from "react";
import SharedButton from "../sharedComponent/SharedButton";
import { Dropdown } from "react-bootstrap";
import { MdMenu } from "react-icons/md";
const Header = () => {

const [open, setShow] = useState(false);
  return (
    <header className="main_header">
      <div class="nave-responsive">
        <a href="">
          <img src="img/logo.svg" alt="" />
        </a>
        
        <div class="bar" onClick={() => setShow(!open)}>
          <MdMenu />
        </div>
      </div>
     
      <div className="container">
        <div className={open ? "header open" : "header"} id="header_bar">
          <div className="logo">
            <a href="">
              <img src="img/logo.svg" alt="" />
            </a>
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
            <SharedButton
              variant="btnstart"
              label="Get started"
              size="fnt_16"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
