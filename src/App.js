import './App.css';
import axios from 'axios';
import React  from 'react';
import {useState, useEffect} from 'react';

function App() {

  const [usdtAmount, setUsdtAmount] = useState(1);
  const [zar, setZar] = useState([])

    useEffect(() => {
      axios.get('/api', {
        params: {
          USDT: usdtAmount
        }
      }).then(response => setZar(response.data))
    }, [usdtAmount]);
  
  return (
    <div id="wrapper" style={{display: 'flex'}}>
      <div id="section1" style={{paddingLeft: '25px'}}>
        <p>USDT amount to buy:</p>
        <input type="text" id="usdt" name="usdt" placeholder='1' value={usdtAmount} onChange={(e) => setUsdtAmount(e.target.value)}/>
      </div>   
      <div id="section2" style={{paddingLeft: '50px'}}>
        <p>Price:</p>
        <p>{zar}</p>
      </div>
    </div>
  );
}

export default App;
