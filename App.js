import React, { Component } from 'react';
import './style.css';
import ISP from './components/ISP'
import ISP_data from './components/ISP_data'
import Header from './components/Header'
import SideNav from './components/SideNav'

function App(){
{/* all the data is mapped via object named "data" */}
 const ISP_data_mapping = ISP_data.map(data => 
  <ISP key={data.id} ISPdata={data} ISPname={data.name}/>  
  );
 
    return (
      <div>
      <Header/>      
      <div className="container-fluid">
        {ISP_data_mapping}
       </div>
      </div>
    );
 }


 

export default App;