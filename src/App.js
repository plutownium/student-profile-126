// import logo from "./logo.svg";
import "./App.css";

import Fetcher from "./components/Fetcher";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div id="App-BodyContainer">
          <h1>Foo</h1>
          <Fetcher></Fetcher>
        </div>
      </div>
    </div>
  );
}

export default App;
