import React,{useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Quantity =({value, myList, setlist, disable, text, setNumber, number, setLabel})=> {

    // console.log(value)
    function AddItems(){
      setlist({...myList, [value]: number});   
      console.log("hello") 
      setLabel(value)
    }
      
    return(
        <>
        <button disabled={disable} onClick={AddItems} style={{color: text}}>Buy Shares</button>  
        <input type="number" className="quantity-btn"  width="200" onChange={e=>setNumber(e.target.value)} value={number} min="1" />
        </>
    )
  }

export default Quantity;