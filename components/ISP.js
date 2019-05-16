import React from "react"
import StarRating from 'react-star-rating-component'

const ISP = (props) =>{
  return(
    <div>
      <div className="row">
        <div className="col">
        <div className="border-margin">
        <h3> {props.ISPdata.name}</h3>
        </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
                <p> <i class="material-icons">attach_money</i>&nbsp;&nbsp;
                     Min. Plan : {props.ISPdata.lowest_price} /- 
                </p>

                
               
                
                <p>
                <i class="material-icons">network_wifi</i> 
                  &nbsp;&nbsp;
                   Max Speed :{props.ISPdata.max_speed}</p>
                <h3> {props.ISPdata.description}</h3>
                 <p><i class="material-icons">local_phone</i> 
                  &nbsp;&nbsp;
                   {props.ISPdata.contact_no}</p>
                <img src={props.ISPdata.image} alt="error"/>
                <p><i class="material-icons">email</i>
                &nbsp;&nbsp;
                {props.ISPdata.email}
                </p>
                <StarRating
                  starCount={5}
                   value={props.ISPdata.rating} 
                 />
                <a href= {props.ISPdata.url}>Go to Website</a></div>
            </div>
          </div>
      </div>  
    </div>

  );
}


export default ISP;