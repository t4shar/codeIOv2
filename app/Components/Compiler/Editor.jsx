import dynamic from "next/dynamic"


const MonacoEditor = dynamic(() => import('react-monaco-editor'), { ssr: false })

export default function Editor(){
    const editorDidMount = (editor, monaco) => {
        console.log('Editor mounted')
      }
    return(
        <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value="// Write your code here"
        editorDidMount={editorDidMount}
      />
    )
}