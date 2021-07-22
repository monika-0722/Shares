import React,{useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

// const  fetchRandomData =(value)=> {

 
//     Axios
//       .get(`https://www.alphavantage.co/query?function=EARNINGS&symbol=${value}&apikey=ADTS8QH44RW2PB9D`)
//       .then(response => {
        
//         setItems(response.data.annualEarnings);
//         console.log(response.data.annualEarnings);
//       })
//       .catch(error => console.log(error));
//   }
  



    const Details =({value}) => {
        // const {value} = props;

       

        const [items, setItems] = useState([]);
    
        useEffect( ()=> {
    
        async function fetchRandomData() {
    
     
            Axios
              .get(`https://www.alphavantage.co/query?function=EARNINGS&symbol=${value}&apikey=ADTS8QH44RW2PB9D`)
              .then(response => {
                
                setItems(response.data.annualEarnings);
                console.log(response.data.annualEarnings);
              })
              .catch(error => console.log(error));
          }
          fetchRandomData(value)  
        },[value]
        )
    
        return(
    
        <Col lg="3">
      
      
      {items && items.map(item => (
        <>
      
          <div className="box">
          
          <p>Fiscal Date Ending : {item.fiscalDateEnding}</p>
          <p>Reported ESP : {item.reportedEPS}</p>
          </div>
         
        </>
      ))}
    
    </Col>
        )
    
    }
    
    export default Details;