import { useState } from "react";
import "./App.scss";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const App = () => {
  const [editorValue, setEditorValue] = useState("");
  const [valueToPrint, setValueToPrint] = useState("");

  const onEditorChange = (event: any) => {
    setEditorValue(event);
  };

  const runCode = () => {
    const scriptToExecute = new Function(editorValue);
    selectAllConsoleLogs(editorValue);
    return scriptToExecute();
  };

  const selectAllConsoleLogs = (script: string) => {
    const consoleLogs = [];

    const smt = Array.from(script.matchAll(/console\.log\(([^)]+)\);/gim));
    console.log("IN HERE", smt);
  };

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
        <div className="ne-znam">
          <div className="call-stack-container">{valueToPrint}</div>
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
