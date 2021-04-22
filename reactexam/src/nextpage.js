import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Nextpage = (props) => {

    
    const history = useHistory();

    

    const parms = useParams();
    const title = parms.page
    const details = parms.details
    const handleRoute = () =>{ 
        history.push("/home");
      }
     
  return (
    
    <div style={{backgroundColor:"red" ,margin:"10px",padding:"10px"}} >
            <div style={{backgroundColor:"yellow" , width:"100%", padding:"10px"}} >
                 <h1>{title}</h1>
                 <h5>{details} </h5>
                 <button style={{padding:"5px 25px 5px 25px" ,color:"red"}}
                         onClick={handleRoute}>
                         Back
                 </button>
            </div>
    </div>
    
  );
};



export default Nextpage;
