import React from "react";
import SmCard from "./SmCard";
import VerticalCard from "./VerticalCard";
import ChartDB from "./ChartDB";
import SkeletonCard from "./SkeletonCard";
import SharedButton from "../sharedComponent/SharedButton";
import { Button, Card, Row, Col } from "react-bootstrap";
import img1 from "../assets/graph.svg";
import img2 from "../assets/graph_2.svg";
import img3 from "../assets/graph_3.svg";
const DashboardCard = () => {
  const cardDetails = [
    { title: "Total Profit", price: "$350.240", pons: "+18.23", imgcard: img1 },
    {
      title: "Total revenue",
      price: "$400.690",
      pons: "+28.35",
      imgcard: img2,
    },
    { title: "Product sold", price: "$200.000", pons: "+28.35", imgcard: img3 },
  ];
  return (
    <div className="bashborad-card">
      <Row className="mt-2 mb-3">
        {cardDetails.length ? (
          cardDetails.map((item, index) => {
            return (
              <Col className="mt-2 mb-2">
                <SmCard
                  title={item.title}
                  price={item.price}
                  pons={item.pons}
                  theimg={item.imgcard}
                  key={index}
                />
              </Col>
            );
          })
        ) : (
          <h1>no data found </h1>
        )}
      </Row>
      <Row className="mt-3 mb-2">
        <Col  className="mt-2 mb-2">
          <VerticalCard />
        </Col>
        <Col md={6}  className="mt-2 mb-2">
          <div className="bg_chart card db-card vr-card">
            <ChartDB />
          </div>{" "}
        </Col>
        <Col>
          <SkeletonCard />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardCard;
