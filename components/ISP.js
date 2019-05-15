import React from "react"

const ISP = (props) =>{
  return(
    <div>
       <h3 > {props.ISPdata.name}</h3>
        <h3> {props.ISPdata.lowest_price}</h3>
        <h3> {props.ISPdata.rating}</h3>
        <h3> {props.ISPdata.max_speed}</h3>
        <h3> {props.ISPdata.description}</h3>
        <h3> {props.ISPdata.contact_no}</h3>
        <img src={props.ISPdata.image} alt="error"/>
        <h3> {props.ISPdata.url}</h3>
    </div>

  );
}


export default ISP;