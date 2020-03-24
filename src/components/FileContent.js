import React, { useMemo } from "react";
import FileHeader from "./FileHeader";
import BatchHeader from "./BatchHeader";
import DetailRecord from "./DetailRecord";
import BatchFooter from "./BatchFooter";
import FileFooter from "./FileFooter";
import Batch from "./Batch";
import styled from "styled-components";
import FileTrailer from "./FileTrailer";

import { VariableSizeList as List } from "react-window";

const File = styled.div`
  white-space: pre;
  letter-spacing: 1px;
  font-family: "Fira Code", Consolas, monospace;
`;

function NachaLine({ line }) {
  switch (line[0]) {
    case "1":
      return <FileHeader>{line}</FileHeader>;
    case "5":
      return <BatchHeader>{line}</BatchHeader>;
    case "6":
      return <DetailRecord>{line}</DetailRecord>;
    case "8":
      return <BatchFooter>{line}</BatchFooter>;
    case "9":
      if (
        line ===
        "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"
      ) {
        return <FileTrailer>{line}</FileTrailer>;
      } else {
        return <FileFooter>{line}</FileFooter>;
      }
    default:
      throw new Error(`Unexpected File Contents beginning with line: ${line}`);
  }
}
function* mapBlocks(file) {
  for (var i = 0; i < file.length; i++) {
    const line = file[i];
    switch (line[0]) {
      case "1":
      case "9":
        yield line;
        break;
      case "5":
        const batch = [line];
        do {
          batch.push(file[++i]);
        } while (file[i].startsWith("8") === false);
        yield batch;
        break;
      default:
        throw new Error(
          `Unexpected File Contents beginning with line: ${line}`
        );
    }
  }
}

function FileContent({ file, filter }) {
  const displayedLines = useMemo(() => {
    const blocks = Array.from(mapBlocks(file))
      .filter(block => {
        if (Array.isArray(block) && filter) {
          return block.some(line =>
            line.toUpperCase().includes(filter.toUpperCase())
          );
        }
        return true;
      })
      .map(block => (Array.isArray(block) ? block : [block]));

    return blocks;
  }, [file, filter]);

  function Block({ index, style }) {
    const block = displayedLines[index];

    if (block[0][0] === "5") {
      return (
        <div style={style}>
          <Batch>
            {displayedLines[index].map((line, i) => (
              <NachaLine key={i} line={line} />
            ))}
          </Batch>
        </div>
      );
    }

    return (
      <div style={style}>
        {displayedLines[index].map((line, i) => (
          <NachaLine key={i} line={line} />
        ))}
      </div>
    );
  }

  return (
    <File>
      <List
        key={filter}
        height={500}
        itemCount={displayedLines.length}
        itemSize={i => displayedLines[i].length * 20}
      >
        {Block}
      </List>
    </File>
  );
}

export default FileContent;
