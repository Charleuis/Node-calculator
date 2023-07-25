import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import React, {useState, useEffect } from 'react'
import './Style.scss'

const App=()=> {
    const [inputNum,setInputNum] = useState(0);
    const [calclatedNum,setCalulateNum] = useState(0);
    const [operator,setOperato] = useState('');
    const [isDecimal,setIsDecimal]=useState(false)
    const [decimalCount,setDecimalCount]=useState(1);
    const [monitor,setMonitor] = useState('');

    useEffect(()=>{
        setMonitor(inputNum);
    },[inputNum])

    const TakeInputNum = (num) => {
        if(isDecimal){
            num=num/Math.pow(10,decimalCount);
            setDecimalCount(decimalCount+1);
            setInputNum(parseFloat((inputNum+num).toFixed(decimalCount)));
        }
        else setInputNum(inputNum*10+num)
    }

  return (
    <div className='calculator'>
        <section className='monitor'> 
        <p className='out-put'>0</p>
        </section>
      <section className='keyboard'>
        <div className='keyboard-row'>
        <button className='one-block blue'>AC</button>
        <button className='one-block blue'> -/+</button>
        <button className='one-block blue'> %</button>
        <button className='one-block red'>/</button>
        </div>
        <div className='keyboard-row'>
        <button onClick={()=>{TakeInputNum(7)}} className='one-block'>7</button>
        <button onClick={()=>{TakeInputNum(8)}} className='one-block'>8</button>
        <button onClick={()=>{TakeInputNum(9)}} className='one-block'>9</button>
        <button className='one-block red'>*</button>
        </div>
        <div className='keyboard-row'>
        <button onClick={()=>{TakeInputNum(4)}} className='one-block'>4</button>
        <button onClick={()=>{TakeInputNum(5)}} className='one-block'>5</button>
        <button onClick={()=>{TakeInputNum(6)}} className='one-block'>6</button>
        <button className='one-block red'>-</button>
        </div>
        <div className='keyboard-row'>
        <button onClick={()=>{TakeInputNum(1)}} className='one-block'>1</button>
        <button onClick={()=>{TakeInputNum(2)}} className='one-block'>2</button>
        <button onClick={()=>{TakeInputNum(3)}} className='one-block'>3</button>
        <button className='one-block red'>+</button>
        </div>
        <div className='keyboard-row'>
        <button onClick={()=>{TakeInputNum(0)}} className='one-block'>0</button>
        <button className='one-block'> .</button>
        <button className='one-block red'> =</button>
        </div>
      </section>
    </div>
  )
}

export default App
