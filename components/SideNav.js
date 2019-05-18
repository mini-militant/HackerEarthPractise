import React from "react"


class SideNav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true
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
      <button  onClick={this.handleClick} type="button" className="btn btn-outline-secondary btn-block">
          {this.props.Ispname}
      </button>
      <p></p>
    </div>
  );
  }
  
   
}

export default SideNav
  