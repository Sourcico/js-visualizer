import { useState } from "react";
import { Player } from "@remotion/player";
import "./App.scss";
import Editor from "@monaco-editor/react";
import { Video } from "./remotion/video/Video";

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
        <Player
          component={Video}
          compositionHeight={860}
          compositionWidth={1000}
          durationInFrames={450}
          fps={30}
          autoPlay
        ></Player>
      </div>
    </div>
  );
};

export default App;
