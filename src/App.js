import { useState } from "react";

// import logo from "./logo.svg";
import "./App.css";

import Filter from "./components/Filter";
import Fetcher from "./components/Fetcher";

function App() {
  const [filterTargetText, setFilterTargetText] = useState("");

  return (
    <div className="App">
      <div className="App-body">
        <div id="App-BodyContainer">
          <div id="nameFilterWrapper">
            <Filter
              setTarget={() => {
                setFilterTargetText();
                // fixme; its something like this.
              }}
            />
          </div>
          <div id="fetcherWrapper">
            <Fetcher filterTargetText={filterTargetText}></Fetcher>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
