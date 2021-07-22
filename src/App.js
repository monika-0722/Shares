import React,{useState, useEffect} from 'react';
import './App.css';

import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import Details from './Details';
// import  Stocklist from './Stocklist';
// import Graph from './GraphApi';
import  Sharelist  from './Sharelist';
import  Shares  from './Shares';
// import TodoList from './TodoList';
import  Quantity from './Quantity';

const App =()=> {

const[input, setInput] = useState('IB');
const[output, setOutput] = useState([]);

//  const[selectedValue, setselectedValue] = useState([]);
//  const[myList, setmyList] = useState([]);
//  const[prices, setPrices] = useState([]);
const [disable, setDisable] = useState(false);
const [text, setText] = useState("#fff");
const[newdata, setNewdata] = useState([]);
const[myList, setMyList] =  useState({});
const[account, setAccount] = useState(200);
const[number, setNumber] = useState(1);
const[label, setLabel] = useState("");

console.log(myList)

  function printInput(value){
        setInput(value); 
      }

      useEffect( () => {

        async function getData(){
          if(input.length > 2){
          const res = await Axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=6ZHH1SV65RNOBNP0`)
          // const res =  ["AB", "AV" , "VD" ]
          setOutput(res.data.bestMatches)
          }
          else{
            setOutput([])
          }
         
        }
      
        getData()
      }, [input])

      function btndisable(){
        setDisable(true)
        console.log(disable)
        setText("#000")
      }

  
return(

  <div className = "App">
   <Shares  value={myList} label={label} disable={disable} setDisable={setDisable} btndisable={btndisable} number={number} /> 
    <Container>
    <Row>

{/* <Details value={selectedValue} /> */}

   <Col lg="12">
     <div className="input-section">
  <input type="text" placeholder="search" onChange={e=>printInput(e.target.value)} name="result" value={input}  />
   </div>

    {output && output.map(item =>(
    
      <p><button onClick={e=>setNewdata([item["1. symbol"]])} >{item["1. symbol"]} </button> &nbsp;
      
      {myList && <Quantity value={item["1. symbol"]} myList={myList} setlist={setMyList} disable={disable}  text={text} number={number} setNumber={setNumber} setLabel={setLabel} /> }
      </p>
     
    ))}

  </Col> 
  <Col lg="4">
     <Sharelist value={myList}  />  
  </Col>

{/* <Stocklist value={myList} />  */}
 
</Row>
</Container>
  
  </div>
)

}
export default App;


