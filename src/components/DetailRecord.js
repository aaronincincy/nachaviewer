import React from "react";
import FileLine from "./FileLine";
import FileElement from "./FileElement";

function DetailRecord({ children }) {
  const recordTypeCode = (
    <FileElement title="Record Type Code" color={0}>
      {children.substr(0, 1)}
    </FileElement>
  );

  const transactionCode = (
    <FileElement title="Transaction Code" color={1}>
      {children.substr(1, 2)}
    </FileElement>
  );

  const receivingDfiIdentification = (
    <FileElement title="Receiving DFI Identification" color={2}>
      {children.substr(3, 8)}
    </FileElement>
  );

  const checkDigit = (
    <FileElement title="Check Digit" color={3}>
      {children.substr(11, 1)}
    </FileElement>
  );

  const dfiAccountNumber = (
    <FileElement title="DFI Account Number" color={4}>
      {children.substr(12, 17)}
    </FileElement>
  );

  const amount = (
    <FileElement title="Amount" color={5}>
      {children.substr(29, 10)}
    </FileElement>
  );

  const individualIdentificationNumber = (
    <FileElement title="Individual Identification Number" color={6}>
      {children.substr(39, 15)}
    </FileElement>
  );

  const individualName = (
    <FileElement title="Individual Name" color={7}>
      {children.substr(54, 22)}
    </FileElement>
  );

  const discretionaryData = (
    <FileElement title="Discretionary Data" color={8}>
      {children.substr(76, 2)}
    </FileElement>
  );

  const addendaRecordIndicator = (
    <FileElement title="Addenda Record Indicator" color={9}>
      {children.substr(78, 1)}
    </FileElement>
  );

  const traceNumber = (
    <FileElement title="Trace Number" color={10}>
      {children.substr(79, 15)}
    </FileElement>
  );

  return (
    <FileLine>
      {recordTypeCode}
      {transactionCode}
      {receivingDfiIdentification}
      {checkDigit}
      {dfiAccountNumber}
      {amount}
      {individualIdentificationNumber}
      {individualName}
      {discretionaryData}
      {addendaRecordIndicator}
      {traceNumber}
    </FileLine>
  );
}

export default DetailRecord;
