import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = () => (
  <AceEditor
    mode="javascript"
    theme="monokai"
    name="code-editor"
    editorProps={{ $blockScrolling: true }}
    width="100%"
    height="500px"
  />
);

export default CodeEditor;
