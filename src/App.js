import "./App.css";

import Fetcher from "./components/Fetcher";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div id="App-BodyContainer">
          <div id="fetcherWrapper" className="wrapperStuff">
            <Fetcher></Fetcher>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
