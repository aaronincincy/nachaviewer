import React from "react";
import FileLine from "./FileLine";
import FileElement from "./FileElement";

function BatchFooter({ children }) {
  const recordTypeCode = (
    <FileElement title="Record Type Code" color={7}>
      {children.substr(0, 1)}
    </FileElement>
  );

  const serviceClassCode = (
    <FileElement title="Service Class Code" color={8}>
      {children.substr(1, 3)}
    </FileElement>
  );

  const entryCount = (
    <FileElement title="Entry / Addenda Count" color={9}>
      {children.substr(4, 6)}
    </FileElement>
  );

  const entryHash = (
    <FileElement title="Entry Hash" color={10}>
      {children.substr(10, 10)}
    </FileElement>
  );

  const totalDebits = (
    <FileElement title="Total Debit Entry Dollar Amount" color={11}>
      {children.substr(20, 12)}
    </FileElement>
  );

  const totalCredits = (
    <FileElement title="Total Credit Entry Dollar Amount" color={12}>
      {children.substr(32, 12)}
    </FileElement>
  );

  const companyIdentification = (
    <FileElement title="Company Identification" color={13}>
      {children.substr(44, 10)}
    </FileElement>
  );

  const messageAuthenticationCode = (
    <FileElement title="Message Authentication Code" color={14}>
      {children.substr(54, 19)}
    </FileElement>
  );

  const reserved = (
    <FileElement title="Reserved" color={15}>
      {children.substr(73, 6)}
    </FileElement>
  );

  const originatingDfiIdentification = (
    <FileElement title="Originating DFI Identification" color={2}>
      {children.substr(79, 8)}
    </FileElement>
  );

  const batchNumber = (
    <FileElement title="Batch Number" color={3}>
      {children.substr(87, 7)}
    </FileElement>
  );

  return (
    <FileLine>
      {recordTypeCode}
      {serviceClassCode}
      {entryCount}
      {entryHash}
      {totalDebits}
      {totalCredits}
      {companyIdentification}
      {messageAuthenticationCode}
      {reserved}
      {originatingDfiIdentification}
      {batchNumber}
    </FileLine>
  );
}

export default BatchFooter;
