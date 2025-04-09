import React from "react";
import SharedButton from "../sharedComponent/SharedButton"
const UpgradeFinances = () => {
  return (
    <div className="container">
      <div className="upgrade_card">
        <div className="upgrade_sec">
          <div className="upgrade_description">
            <h2>Let’s Upgrade your finances experience by using FinBiz</h2>
            <div className="upgrade_btns">
            <SharedButton variant="demo_btn"  label="Request Demo" size="fnt_16"/>
            <SharedButton variant="mail_btn"  label="Watch Video" size="fnt_16"/>
            </div>
          </div>
          <div className="upgrade_img">
            <img src="img/upgrade_img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeFinances;
