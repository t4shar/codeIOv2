"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import the Monaco Editor to avoid SSR issues.
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function Editor() {
  const [code, setCode] = useState("// Write your code here");

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const editorDidMount = (editor, monaco) => {
    console.log("Editor mounted", editor);
  };

  return (
    <div className="w-full flex justify-center">
      <MonacoEditor
        width="80%"
        height="600px"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={{
          automaticLayout: true,
          glyphMargin: true,
          folding: true,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
        }}
        onChange={handleEditorChange}
        onMount={editorDidMount}
      />
    </div>
  );
}
