import React from "react";
import FileLine from "./FileLine";
import FileElement from "./FileElement";

function FileFooter({ children }) {
  const recordTypeCode = (
    <FileElement title="Record Type Code" color={0}>
      {children.substr(0, 1)}
    </FileElement>
  );

  const batchCount = (
    <FileElement title="Batch Count" color={1}>
      {children.substr(1, 6)}
    </FileElement>
  );

  const blockCount = (
    <FileElement title="Block Count" color={2}>
      {children.substr(7, 6)}
    </FileElement>
  );

  const entryCount = (
    <FileElement title="Entry / Addenda Count" color={3}>
      {children.substr(13, 8)}
    </FileElement>
  );

  const entryHash = (
    <FileElement title="Entry Hash" color={4}>
      {children.substr(21, 10)}
    </FileElement>
  );

  const totalDebits = (
    <FileElement title="Total Debit Entry Dollar Amount in File" color={5}>
      {children.substr(31, 12)}
    </FileElement>
  );

  const totalCredits = (
    <FileElement title="Total Credit Entry Dollar Amount in File" color={6}>
      {children.substr(43, 12)}
    </FileElement>
  );

  const reserved = (
    <FileElement title="Reserved" color={7}>
      {children.substr(55, 39)}
    </FileElement>
  );

  return (
    <FileLine>
      {recordTypeCode}
      {batchCount}
      {blockCount}
      {entryCount}
      {entryHash}
      {totalDebits}
      {totalCredits}
      {reserved}
    </FileLine>
  );
}

export default FileFooter;
