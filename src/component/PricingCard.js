import React from "react";

import SharedButton from "../sharedComponent/SharedButton"
const PricingCard = (props) => {
    // const distinct = true;
  return (
    <div className="card_price">
     
     {props.distinct ? <div> <img src="img/Popular-star.svg" alt="" /> {props.distinct}</div> : ''}
     

      <div className="pr_card__title">
        <h3>{props.title}</h3>
      </div>
      <div className="pr_card_description">
        <span> {props.description}</span>
      </div>

      <div className="pr_card_price">
        <span> {props.price} </span>
      </div>
      <div className="pr_card_feature">
        <ul>
          {props.features.map((feature, index) => (
            <li key={index}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg> {feature}</li>
          ))}
        </ul>
      </div>
      <div className="pr_card_btn">
      <SharedButton variant="mail_btn" label="Book a Demo" size="fnt_16"/>
      </div>
    </div>
  );
};

export default PricingCard;
