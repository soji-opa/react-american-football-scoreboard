//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [timerStart, setTimerStart] =  useState(false)
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [displayedTime, setDisplayedTime] = useState('00:00')
  const [score, setScore] = useState(
    [{team: "lions", amount: 7},
      {team: "tigers", amount: 7}
    ])
  //const [value, setValue] = useState(7);

  useEffect(() => {
    let timerId;
    if(minute < 2 && timerStart){
      timerId =  setInterval(() => {
     
        if(seconds < 5) {
         setSeconds(s => s + 1)
        } else {
          setSeconds(0)
          setMinute(m => m + 1)
        }
        const normalizedMinute = String(minute).length === 1 ? `0${minute}` : minute 
        const normalizedSeconds = String(seconds).length === 1 ? `0${seconds}` : seconds 
        setDisplayedTime(`${normalizedMinute}:${normalizedSeconds}`)  
       }, 1000)
      
    }else if( timerStart === false && minute < 2) {
      setDisplayedTime('00:00')
    }else {
      
     setDisplayedTime("60:00")
     setTimerStart(false)
    }
    return () => {
      clearInterval(timerId)
    }
  
  }, [minute,seconds,timerStart])

  const startTimer = (e)=>{
    e.preventDefault()
    setTimerStart(true)
  }
  

  const onClickHandler = (teamName, amt)=>{

    const score2 = score.map(prev=>{
      if(prev.team === teamName){
        prev.amount += amt
      }
      return prev
    })
    setScore(score2)

  }
 
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{score[0].amount}</div>
          </div>
          <div className="timer">{displayedTime}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{score[1].amount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick ={()=>onClickHandler("lions", 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=>onClickHandler("lions", 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=>onClickHandler("tigers", 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=>onClickHandler("tigers", 3)}>Away Field Goal</button>
        </div>
        <button className="awayButtons__fieldGoal" onClick={startTimer}>Start Timer</button>
      </section>
    </div>
  );
}

export default App;
