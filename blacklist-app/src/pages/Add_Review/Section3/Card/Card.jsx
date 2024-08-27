// import React from 'react'
import "./Card.css"

export default function Card(props) {
  return (
    <div className="addreview3-service">
        <div className="addreview3-numb">
            <h4>{props.numb}</h4>
        </div>

        <div className="addreview3-service-header">
            <h5> {props.header}</h5>
            <p>
             {props.desc}
            </p>
        </div>      

    </div>
  )
}
