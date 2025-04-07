import React from "react";
import SharedButton from "../sharedComponent/SharedButton";
const VerticalCard = () => {
  return (
    <div className="card db-card vr-card">
      <div className="card_head ">
        <h6>Total Balance</h6>
      </div>
      <div className="price_graph">
        <span>$350.0</span>
      </div>
      <SharedButton variant="trans_btn" label="Transfer" size="fnt_16"/>
      <hr />
      <div className="card_head ">
        <h6>Total Income</h6>
      </div>
      <div className="price_graph">
        <span>$320.0</span>
      </div>
      <hr />
      <div className="card_head ">
        <h6>Total Expense</h6>
      </div>
      <div className="price_graph">
        <span>$220.0</span>
      </div>
    </div>
  );
};

export default VerticalCard;
