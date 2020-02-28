import React, {useState} from "react";
import "./App.css";

function BottomRow() {
  const [qtrValue, setqtrValue] = useState(0);

  const [ballValue, setBallValue] =  useState(21);

  const [toGoVal, setToGoVal] = useState(7)

  const [downVal, setdownVal] = useState(3)
  const initialqtrValue = 0
   
 //function for handling quarters so it doesn't exceed 4 quarters 
  const onclickHandlerQtrValue = () => {
    if(qtrValue<4){
      setqtrValue(qtrValue+1)
    } else{
      return setqtrValue(initialqtrValue)
    }
    
    }
  //}

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downVal}</div>
        <button className="awayButtons__fieldGoal" onClick={()=>{setdownVal(downVal+1)}}>Update To Go</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGoVal}</div>
        <button className="awayButtons__fieldGoal" onClick={()=>{setToGoVal(toGoVal+1)}}>Update To Go</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball On</h3>
        <div className="ballOn__value">{ballValue}</div>
        
        <button className="awayButtons__fieldGoal" onClick={()=>{setBallValue(ballValue+1)}}>Update Ball On</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{qtrValue}</div>
        <button className="awayButtons__fieldGoal" onClick={onclickHandlerQtrValue }>Update Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
