import {useState, useRef} from 'react';

export default function TimerChellange({title, targetTime}){
  var timer = useRef();
  const [timerExpired, setTimeExpired ]= useState(false);
  const [timeStart, setStartTime] = useState(false);
  function HandleStart(){
    
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    },targetTime*1000);
    setStartTime(true);
  }
  function HandleEnd(){
    clearTimeout(timer.current);
    
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
         {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timeStart ? HandleEnd() : HandleStart()}> 
          {timeStart ? "Stop" : "Start"} Challange
        </button>
      </p>
      <p className={timeStart ? "active" : undefined}>
        {timeStart ?"Time is running" : "Time inactive"}
      </p>
    </section>
  );
}