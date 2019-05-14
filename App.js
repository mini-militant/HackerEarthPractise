import React, { Component } from 'react';
import './style.css';
import ISP from './components/ISP'
import ISP_data from './components/ISP_data'

function App(){

 const ISP_data_mapping = ISP_data.map(data =>  <ISP key={data.id} question={data.question} punchLine={data.punchLine}/>);

 
    return (
      <div>
      
       {ISP_data}
      </div>
    );
  

}
 

export default App;