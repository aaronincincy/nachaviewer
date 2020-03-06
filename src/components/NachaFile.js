import React from "react";
import FileContent from "./FileContent";

function NachaFile({ children }) {
  const lines = children
    .trim()
    .split("\n")
    .map(line => line.trim());

  return <FileContent file={lines} />;
}

export default NachaFile;
