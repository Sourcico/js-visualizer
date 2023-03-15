import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="code-editor-container">
        <header>NAJJAK VISUALIZER EVER</header>
        <div className="actions-container">
          <select name="code-sample" id="code-sample">
            <option>Choose an example</option>
          </select>
          <button>Run/Edit</button>
          <button>Step</button>
          <button>Play</button>
        </div>
      </div>
      <div className="execution-visualizer-container">
        <div className="ne-znam">
          <div className="call-stack-container"></div>
          <div className="right-test">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
