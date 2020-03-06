import React, { useMemo } from "react";
import FileHeader from "./FileHeader";
import BatchHeader from "./BatchHeader";
import DetailRecord from "./DetailRecord";
import BatchFooter from "./BatchFooter";
import FileFooter from "./FileFooter";
import Batch from "./Batch";
import styled from "styled-components";
import FileTrailer from "./FileTrailer";

const File = styled.div`
  white-space: pre;
  letter-spacing: 1px;
  font-family: "Fira Code", Consolas, monospace;
`;

function FileContent({ file }) {
  const contents = useMemo(() => {
    let currentBatch = null;
    const result = [];
    file.forEach(line => {
      switch (line[0]) {
        case "1":
          result.push(<FileHeader>{line}</FileHeader>);
          break;
        case "5":
          currentBatch = [<BatchHeader>{line}</BatchHeader>];
          break;
        case "6":
          currentBatch.push(<DetailRecord>{line}</DetailRecord>);
          break;
        case "8":
          currentBatch.push(<BatchFooter>{line}</BatchFooter>);
          result.push(<Batch>{currentBatch}</Batch>);
          break;
        case "9":
          if (
            line ===
            "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"
          ) {
            result.push(<FileTrailer>{line}</FileTrailer>);
          } else {
            result.push(<FileFooter>{line}</FileFooter>);
          }
          break;
        default:
          throw new Error(
            `Unexpected File Contents beginning with line: ${line}`
          );
      }
    });
    return result;
  }, [file]);

  return <File>{contents}</File>;
}

export default FileContent;
