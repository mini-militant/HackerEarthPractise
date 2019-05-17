import React from "react"
import StarRating from 'react-star-ratings'

class ISP extends React.Component {
constructor() {
        super()
        this.state = {
            isLoading: true
        }
        this.handleClick=this.handleClick.bind(this);
    }

 handleClick(){
  const isLoading=this.state.isLoading;
  this.setState(function(prevState){
    return{
      isLoading:!prevState.isLoading
  };
  })
}

render(){   
       
  return(
    <div>
      <div className="row">
        <div className="col-6">
        
          
          <button onClick={this.handleClick} type="button" className="btn btn-outline-secondary btn-block">
          {this.props.ISPdata.name}
          </button>

        </div>
          {this.state.isLoading ?
                <h1></h1> :

          <div className="col">
            <div className="row">
                <div className="col">
                      <img src={this.props.ISPdata.image} alt="error"/>
                </div> 
            <div className="col">
            <div className="card">
            <div className="card-body">
                <p> <i className="material-icons">attach_money</i>&nbsp;&nbsp;
                     Min. Plan : {this.props.ISPdata.lowest_price} /- 
                </p>
                <p><i className="material-icons">network_wifi</i> 
                  &nbsp;&nbsp;
                   Max Speed :{this.props.ISPdata.max_speed}</p>
                
                 <p><i className="material-icons">local_phone</i> 
                  &nbsp;&nbsp;
                   {this.props.ISPdata.contact_no}</p>
                <p><i className="material-icons">email</i>
                &nbsp;&nbsp;
                {this.props.ISPdata.email}
                </p>

                <StarRating
                   starRatedColor="#8c9906"
                   rating={this.props.ISPdata.rating}
                   starDimension="35px"
                   starSpacing="0px"
                 />
                 <div className="md-form">
                    <i className="fas fa-pencil-alt prefix"></i>
                    <textarea id="form10" className="md-textarea form-control" rows="3" value={this.props.ISPdata.description}>
                    
                    </textarea>
                  </div>
                <a href= {this.props.ISPdata.url}>Go to Website</a></div>
            </div>
          </div>
          </div>  
      
    </div>}
                   
          </div>
          </div>
      

  )
}
}


export default ISP;