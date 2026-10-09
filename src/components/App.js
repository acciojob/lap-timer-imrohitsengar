import React, { useState, useRef } from "react";
import "./../styles/App.css";

const App = () => {
  const [time, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapTime, setLapTime] = useState([]);
  const intervalRef = useRef(null);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0") +
      ":" +
      String(milliseconds).padStart(2, "0")
    );
  };

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const lapTimer = () => {
    setLapTime([...lapTime, formatTime(time)]);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
    setIsRunning(false);
    setLapTime([]);
  };

  return (
    <div>
      <h1>Lap Timer</h1>
      <p>{formatTime(time)}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={lapTimer}>Lap</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default App;
