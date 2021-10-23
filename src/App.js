import { useState } from "react";

// import logo from "./logo.svg";
import "./App.css";

import Fetcher from "./components/Fetcher";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div id="App-BodyContainer">
          <div id="fetcherWrapper" className="wrapperStuff bDebug2">
            <Fetcher></Fetcher>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
