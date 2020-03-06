import React from "react";
import FileLine from "./FileLine";
import FileElement from "./FileElement";

function FileTrailer({ children }) {
  return (
    <FileLine>
      <FileElement title="File Trailer">{children}</FileElement>
    </FileLine>
  );
}

export default FileTrailer;
