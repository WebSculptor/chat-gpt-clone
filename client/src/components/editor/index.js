import React from "react";
import "./editor.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { sunburst } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const EditorWindow = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={sunburst}>
      {code}
    </SyntaxHighlighter>
  );
};
