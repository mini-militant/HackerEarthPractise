import React from "react"

const ISP = (props) =>{
  return(
    <div>
       <h3 > {props.data.name}</h3>
        <h3> {props.data.lowest_price}</h3>
        <h3> {props.data.rating}</h3>
        <h3> {props.data.max_speed}</h3>
        <h3> {props.data.description}</h3>
        <h3> {props.data.contact_no}</h3>
        <img src={props.data.image} alt="error"/>
        <h3> {props.data.url}</h3>
    </div>

  );
}


export default ISP;