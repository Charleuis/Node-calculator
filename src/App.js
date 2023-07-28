import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import React, {useState, useEffect } from 'react'
import './Style.scss'

const App  =()=> {
    const [inputNum,setInputNum] = useState(0);
    const [calclatedNum,setCalulatedNum] = useState(0);
    const [operator,setOperator] = useState('');
    const [isDecimal,setIsDecimal]=useState(false)
    const [decimalCount,setDecimalCount]=useState(1);
    const [monitor,setMonitor] = useState('');

    useEffect(()=>{
        setMonitor(inputNum);
    },[inputNum])

    useEffect(()=>{
      setMonitor(calclatedNum)
    },[calclatedNum])
 
    // take input numbers from keyboard 
    const TakeInputNum = (num) => {
        if(isDecimal){
            num=num/Math.pow(10,decimalCount);
            setDecimalCount(decimalCount+1);
            setInputNum(parseFloat((inputNum+num).toFixed(decimalCount)));
        }
        else setInputNum(inputNum*10+num)
    }

    // take operators from keyboard
    const TakeOperator = (operator)=>{
      setOperator(operator);
      Calculate();
      setInputNum(0);
    }

    // For the calculation
    const Calculate = () =>{
      setIsDecimal(false);
      setDecimalCount(1);
      if(operator == '/' && inputNum == 0){
        setCalulatedNum(NaN);
        setInputNum(0);
        return
      }
      if(calclatedNum == 0 && inputNum == 0){
        return;
      }
     switch(operator){
      case '+':
        setCalulatedNum(calclatedNum+inputNum);
        break;
      case '-':
        setCalulatedNum(calclatedNum-inputNum);
        break;
      case '*':
        setCalulatedNum(calclatedNum*inputNum);
        break;
      case '/':
        setCalulatedNum(calclatedNum/inputNum);
        break;
     } 
     if(operator == ''){
      setCalulatedNum(inputNum)
     }else{
      setInputNum(0);
     }
     return;
    }

    //get the equation
    const GetEqual = () =>{
      Calculate();
      setOperator('');
    }

    //clear all
    const Clear =()=>{
      setInputNum(0)
      setCalulatedNum(0)
      setMonitor('0')
      setOperator('')
    }

    const Percentage = () =>{
      setCalulatedNum(inputNum/100);
    }

    //backspace
    const Del = () => {
      // Remove the last character from inputNum
      const newInputNum = inputNum.toString().slice(0, -1);
      // If newInputNum is blank, set it to '0'
      if (newInputNum === '') {
        setInputNum(0);
      } else {
        setInputNum(parseFloat(newInputNum));
      }
    }
    
    
    
    
  return (
    <div className='calculator'>
        <section className='monitor'> 
        <p className='out-put'>{monitor}</p>
        </section>
      <section className='keyboard'>
        <div className='keyboard-row'>
        <button onClick={()=>{Clear()}} className='one-block blue'> AC</button>
        <button onClick={()=>{Del()}}className='one-block blue'>⇠</button>
        <button onClick={()=>{Percentage()}} className='one-block blue'> %</button>
        <button onClick={()=>{TakeOperator('/')}} className='one-block red'> /</button>
        </div>
        <div className='keyboard-row'>
        <button onClick={()=>{TakeInputNum(7)}} className='one-block'>7</button>
        <button onClick={()=>{TakeInputNum(8)}} className='one-block'>8</button>
        <button onClick={()=>{TakeInputNum(9)}} className='one-block'>9</button>
        <button onClick={()=>{TakeOperator('*')}} className='one-block red'> *</button>
        </div>
        <div className='keyboard-row'>
        <button onClick={()=>{TakeInputNum(4)}} className='one-block'>4</button>
        <button onClick={()=>{TakeInputNum(5)}} className='one-block'>5</button>
        <button onClick={()=>{TakeInputNum(6)}} className='one-block'>6</button>
        <button onClick={()=>{TakeOperator('-')}} className='one-block red'> -</button>
        </div>
        <div className='keyboard-row'>
        <button onClick={()=>{TakeInputNum(1)}} className='one-block'>1</button>
        <button onClick={()=>{TakeInputNum(2)}} className='one-block'>2</button>
        <button onClick={()=>{TakeInputNum(3)}} className='one-block'>3</button>
        <button onClick={()=>{TakeOperator('+')}} className='one-block red'>+</button>
        </div>
        <div className='keyboard-row'>
        <button onClick={()=>{TakeInputNum(0)}} className='two-block'>0</button>
        <button onClick={()=>{setIsDecimal(true)}} className='one-block'> .</button>
        <button onClick={()=>{GetEqual()}} className='one-block red'> =</button>
        </div>
      </section>
    </div>
  )
}

export default App
