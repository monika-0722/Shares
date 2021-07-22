import React,{useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';

const Sharelist =({value})=> {

    return(
        
     <Col lg="6">
      <div className="list-item">
      <h4> List Of Shares</h4>

      {value && Object.keys(value).map((item) => (
          <>
          <p>{value[item] + " share of " + item } </p>
         
          </>
  ))}
  </div>
  </Col> 
    )

}

export default  Sharelist;