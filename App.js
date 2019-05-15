import React, { Component } from 'react';
import './style.css';
import ISP from './components/ISP'
import ISP_data from './components/ISP_data'

function App(){
{/* all the data is mapped via object named "data" */}
 const ISP_data_mapping = ISP_data.map(data => 
  <ISP key={data.id} ISPdata={data}/>  
  );
 
    return (
      <div>
        
       {ISP_data_mapping}
      </div>
    );
 }


 

export default App;