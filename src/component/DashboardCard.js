import React from "react";
import SmCard from "./SmCard";
import VerticalCard from "./VerticalCard"
import SharedButton from "../sharedComponent/SharedButton"
import { Button, Card,Row,Col } from "react-bootstrap";
import img1 from "./graph.svg";
import img2 from "./graph_2.svg";
import img3 from "./graph_3.svg";
const DashboardCard = () => {
  const cardDetails = [
    { title: "Total Profit", price: "$350.240",pons:"+18.23",imgcard:img1},
    { title: "Total revenue", price: "$400.690",pons:"+28.35",imgcard:img2},
    { title: "Product sold", price: "$200.000",pons:"+28.35",imgcard:img3},
    
  ];
  return (
    <div className="bashborad-card">
      <Row className="mt-2 mb-3">
      {cardDetails.length ?  cardDetails.map((item, index) => {
        return ( <Col><SmCard title={item.title} price={item.price} pons={item.pons} theimg={item.imgcard} key={index}/></Col> );
      }): <h1>no data found </h1>}
     
      </Row>
      <Row className="mt-3 mb-2">
      <Col>
        <VerticalCard />
      </Col>
        <Col xs={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </div>
  );
};

export default DashboardCard;
