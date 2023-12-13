import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [stop, setStop] = useState(null);
  let countertimer;

  useEffect(() => {
    if (!stop) {
      countertimer = setInterval(
        () => setCount((prevState) => prevState + 1),
        1000
      );
    }
    return () => clearInterval(countertimer);
  }, [stop]);

  const startMyCount = () => setStop(false);

  const stopMyCount = () => {
    setStop(true);
    setCount(count);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>React counter with 1 second interval.</h1>
      <h1>{count}</h1>
      <button onClick={startMyCount}>Start</button>
      <button onClick={stopMyCount}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
