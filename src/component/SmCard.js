import React from 'react'
import { Button, Card } from "react-bootstrap";
const SmCard = (props) => {
  return (
    <div className='card db-card'>
      <div className='card_head Profit_details'>
        <h6>{props.title}</h6>
        <span >{props.pons}</span>
      </div>
      <div className='price_graph'>
        <span>{props.price}</span>
        <img src={props.theimg} alt="" />
      </div>
    </div>
  )
}

export default SmCard
