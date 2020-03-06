import React from "react";
import FileLine from "./FileLine";
import FileElement from "./FileElement";

function FileHeader({ children }) {
  const recordTypeCode = (
    <FileElement title="Record Type Code" color={0}>
      {children.substr(0, 1)}
    </FileElement>
  );

  const priorityCode = (
    <FileElement title="Priority Code" color={1}>
      {children.substr(1, 2)}
    </FileElement>
  );

  const immediateDestination = (
    <FileElement title="Immediate Destination" color={2}>
      {children.substr(3, 10)}
    </FileElement>
  );

  const immediateOrigin = (
    <FileElement title="Immediate Origin" color={3}>
      {children.substr(13, 10)}
    </FileElement>
  );

  const fileCreationDate = (
    <FileElement title="File Creation Date" color={4}>
      {children.substr(23, 6)}
    </FileElement>
  );

  const fileCreationTime = (
    <FileElement title="File Creation Time" color={5}>
      {children.substr(29, 4)}
    </FileElement>
  );

  const fileModifier = (
    <FileElement title="File ID Modifier" color={6}>
      {children.substr(33, 1)}
    </FileElement>
  );

  const recordSize = (
    <FileElement title="Record Size" color={7}>
      {children.substr(34, 3)}
    </FileElement>
  );

  const blockingFactor = (
    <FileElement title="Blocking Factor" color={8}>
      {children.substr(37, 2)}
    </FileElement>
  );

  const formatCode = (
    <FileElement title="Format Code" color={9}>
      {children.substr(39, 1)}
    </FileElement>
  );

  const immediateDestinationName = (
    <FileElement title="Immediate Destination Name" color={10}>
      {children.substr(40, 23)}
    </FileElement>
  );

  const immediateOriginName = (
    <FileElement title="Immediate Origin Name" color={11}>
      {children.substr(63, 23)}
    </FileElement>
  );

  const referenceCode = (
    <FileElement title="Reference Code" color={12}>
      {children.substr(86, 8)}
    </FileElement>
  );

  return (
    <FileLine>
      {recordTypeCode}
      {priorityCode}
      {immediateDestination}
      {immediateOrigin}
      {fileCreationDate}
      {fileCreationTime}
      {fileModifier}
      {recordSize}
      {blockingFactor}
      {formatCode}
      {immediateDestinationName}
      {immediateOriginName}
      {referenceCode}
    </FileLine>
  );
}

export default FileHeader;
