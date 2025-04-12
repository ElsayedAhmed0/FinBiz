import React from "react";
import ChartDB from "./ChartDB";
import { Row, Col } from "react-bootstrap";
const BgChartDB = () => {
  return (
    <div className="nxt_chart">
      <Row>
        <Col className="mt-2 mb-2">
          <div className="card db-card vr-card">
            <div className="d_db_card">
              <p>
                Make informed decisions backed by data through our analytics
                tools. 
              </p>
              <img src="img/sm-chart.svg" alt="" />
            </div>
          </div>
        </Col>
        <Col md={5} className="mt-2 mb-2">
          <div className="card db-card vr-card">
            <div className="d_db_card">
              <p>
              Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of mind for you.
              </p>
              <div className="nxt_chart_bg">
                <ChartDB />
              </div>
            </div>
          </div>
        </Col>
        <Col>
        <div className="card db-card vr-card">
            <div className="d_db_card">
              <p>
                Make informed decisions backed by data through our analytics
                tools. 
              </p>
              <img src="img/sm-chart_2.svg" alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BgChartDB;
