import React from "react";
import PricingCard from "./PricingCard";
import { Row, Col } from "react-bootstrap";
const PricingSec = () => {
  const PriceCardDAta = [
    {
      id:"1",
      title: "Basic",
      description:
        "Get a professional website designed according to your needs.",
      price: "$499",
      features: [
        "Get a fully designed Website.",
        "Webflow Development",
        "Limited Support",
      ],
      label: "Get started",
      actionBtn:"basic",
      stylebtn:"btnstart"
    },
    {
      id:"2",
      title: "Pro",
      description:
        "Get a professional website designed according to your needs.",
      price: "$699",
      features: [
        "Get a fully designed Website.",
        "Webflow Development",
        "Limited Support",
        "Standart integrations",
        "Email support",
      ],
      label: "Get started",
      distinct: "Popular",
      actionBtn:"pro",
      stylebtn:"mail_btn"
    },
    {
      id:"3",
      title: "Enterprise",
      description:
        "Get a professional website designed according to your needs.",
      price: "$999",
      features: [
        "Get a fully designed Website.",
        "Webflow Development",
        "Limited Support",
        "Standart integrations",
      ],
      label: "Contact Us",
      actionBtn:"interprice",
      stylebtn:"demo_btn"
    },
  ];
  return (
    <div className="container">
    <div className="testimonials_sec">
      <div className="title_sec">
        <img src="img/Pricing.svg" alt="" />
        <span>Pricing</span>
      </div>
      <h3>Find the right plan</h3>
      <p>
        "Invest in your company's future with our comprehensive financial
        solution. Contact us for pricing details and see how we can help you
        streamline your finances and reach your business goals.
      </p>
      
      <Row className="mt-2 mb-3 PricingCard_sec">
        { PriceCardDAta.map((item)=>{
            return (
              <Col> <PricingCard key={item.id} {...item} /></Col>
          
            )
        })
         
        }
      </Row>
    </div>
    </div>
  );
};

export default PricingSec;
{/* <PricingCard title={item.title} description={item.description} price={item.price} features={item.features} label={item.label} distinct={item.distinct} actionBtn={item.actionBtn}  key={index} /> */}