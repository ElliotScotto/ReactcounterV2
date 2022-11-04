import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

// const tabCounters = [<Counter />];
for (let i = 0; i < 3; i++) {
  console.log(i);
}

function App() {
  const [tab, setTab] = useState([0]);
  const newTab = [...tab];

  return (
    <div className="App">
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          newTab.push(newTab[0] + 1);
          setTab(newTab);
        }}
      >
        Add Counter
      </button>
      <Counter />
      <br />
      <br />
      <br />
      <br />
      <br />
      {newTab.length}
    </div>
  );
}

export default App;
