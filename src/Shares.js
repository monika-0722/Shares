import React,{useState, useEffect} from 'react';
// import Line from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import '../node_modules/react-linechart/dist/styles.css';
import axios from 'axios';
import { PageItem } from 'react-bootstrap';

const Shares =({value, number, btndisable, setLabel, label})=> {
   
  console.log(value)
  const[account, setAccount] = useState(200);
    useEffect( ()=> {
    
          async function getdata() {
           axios .get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${label}&apikey=ADTS8QH44RW2PB9D`)
           .then( result=> {
          
            const labels = Object.keys(result.data["Weekly Time Series"]);
            const priceData = labels.map( item => result.data['Weekly Time Series'][item]["1. open"])
            console.log(priceData[0]);
            // console.log(labels)

            const newshare = account -  (Number(number) * parseInt(priceData[0]));
            setAccount(newshare)
            console.log(number)
            console.log(label)  
             if(newshare  < 0){
              setAccount("Insufficient Balance")
              alert("Cannot Add More Shares")
              btndisable();
             }
           }) 
           .catch((error) => { 
             console.log(error)
           })
           
          }
          getdata(value)  
        },[value]
        )
        

        return (
        <div className="blance-div">
       <span className="balance">Balance left - {account}</span>
        </div>
        )
        }

    export default Shares;

  