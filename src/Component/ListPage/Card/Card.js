import React from "react";
import "./Card.css";


import ReserveModal from "./ReserveModal";
import ScheduleModal from "./ScheduleModal";

export default function Card(props) {

  
  return (
    <>
      <div className="CardContainer" >
        <img
          src={'data:image/jpeg;base64,'+props.img}
          alt=""
          className="CardImg"
          onClick={()=>window.location=`/pg/${props.key1}`}
        />
       
        <div className="CardDis">
          <div className="title" onClick={()=>window.location=`/pg/${props.key1}`}>
            <h1 className="mb-0">{props.title}</h1>
            <span>{props.location}</span>
          </div>
          <div className="details">
            <span>details</span>
          </div>
          <div className="amenities">
           {props.Amenities.map((obj)=>{
            return <span>{obj}</span>
           })}
          </div>
          <div>
            <a href="/s">view directions</a>
          </div>
        </div>

        <div className="CardPrice">
          <div className="price-section">
            <div>
              <span style={{ color: "lightgray", fontSize: "15px" }}>
                starts from
              </span>
              <br></br>
              <span
                style={{
                  fontFamily: "Arial",
                  fontWeight: "bolder",
                  fontSize: "30px",
                }}
              >
                {props.price}
              </span>
            </div>
            <div>
            <i className="fa-regular fa-bookmark"></i></div>
          </div>
          <div>
            <ScheduleModal title={props.title} />
            <ReserveModal/>
          </div>
        </div>
      </div>
    </>
  );
}
