import { useState } from "react";
import { Player } from "@remotion/player";
import "./App.scss";
import Editor from "@monaco-editor/react";
import { MyComposition } from "./remotion/Composition";

const App = () => {
  const [editorValue, setEditorValue] = useState("");

  const onEditorChange = (event: any) => {
    setEditorValue(event);
  };

  const runCode = () => {};

  return (
    <div className="App">
      <div className="code-editor-container">
        <header>NAJJAK VISUALIZER EVER</header>
        <div className="actions-container">
          <select name="code-sample" id="code-sample">
            <option>Choose an example</option>
          </select>
          <button onClick={runCode}>Run/Edit</button>
          <button>Step</button>
          <button>Play</button>
        </div>
        <Editor
          className="code-editor"
          theme="vs-dark"
          defaultLanguage="typescript"
          defaultValue="// some comment"
          onChange={onEditorChange}
        />
      </div>
      <div className="execution-visualizer-container">
        <div className="sections-container">
          <div className="call-stack-container">
            <Player
              component={MyComposition}
              compositionHeight={800}
              compositionWidth={400}
              durationInFrames={210}
              fps={30}
              controls
            ></Player>
          </div>
          <div className="execution-logs-container"></div>
          <div className="right-test">
            <div className="horizontal-container"></div>
            <div className="horizontal-container"></div>
            <div className="horizontal-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
