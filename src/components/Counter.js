import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  //   const handleClick = (event) => {
  //     return event.preventDefault();
  //   };
  return (
    <div className="counter">
      <div className="counterset">
        <button
          type="submit"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <div className="counter-result">{counter}</div>
        <button
          type="submit"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <div
        className="reset-Btn"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </div>
    </div>
  );
};
export default Counter;
