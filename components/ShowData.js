import React from "react"

class ShowData extends React.Component{
  render(){
    return(
      <div>
        <div className="col-6">
          <div className="row">
            <div className="col">
                <img src={props.ISPdata.image} alt="error"/>
            </div> 
            <div className="col">
            <div className="card">
            <div className="card-body">
                <p> <i class="material-icons">attach_money</i>&nbsp;&nbsp;
                     Min. Plan : {props.ISPdata.lowest_price} /- 
                </p>
                <p><i class="material-icons">network_wifi</i> 
                  &nbsp;&nbsp;
                   Max Speed :{props.ISPdata.max_speed}</p>
                
                 <p><i class="material-icons">local_phone</i> 
                  &nbsp;&nbsp;
                   {props.ISPdata.contact_no}</p>
                <p><i class="material-icons">email</i>
                &nbsp;&nbsp;
                {props.ISPdata.email}
                </p>

                <StarRating
                   starRatedColor="#8c9906"
                   rating={props.ISPdata.rating}
                   starDimension="35px"
                   starSpacing="0px"
                 />
                 <div class="md-form">
                    <i class="fas fa-pencil-alt prefix"></i>
                    <textarea id="form10" class="md-textarea form-control" rows="3" value={props.ISPdata.description}>
                    
                    </textarea>
                  </div>
                <a href= {props.ISPdata.url}>Go to Website</a></div>
            </div>
          </div>
          
          </div>
          </div>
      </div>

    );
  }
}

export default ShowData