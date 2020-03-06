import React from "react";
import FileLine from "./FileLine";
import FileElement from "./FileElement";

function BatchHeader({ children }) {
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

  const companyName = (
    <FileElement title="Company Name" color={9}>
      {children.substr(4, 16)}
    </FileElement>
  );

  const companyDiscretionaryData = (
    <FileElement title="Company Discretionary Data" color={10}>
      {children.substr(20, 20)}
    </FileElement>
  );

  const companyIdentification = (
    <FileElement title="Company Identification" color={11}>
      {children.substr(40, 10)}
    </FileElement>
  );

  const secCode = (
    <FileElement title="Standard Entry Class Code" color={12}>
      {children.substr(50, 3)}
    </FileElement>
  );

  const companyEntryDescription = (
    <FileElement title="Company Entry Description" color={13}>
      {children.substr(53, 10)}
    </FileElement>
  );

  const companyDescriptiveDate = (
    <FileElement title="Company Descriptive Date" color={14}>
      {children.substr(63, 6)}
    </FileElement>
  );

  const effectiveEntryDate = (
    <FileElement title="Effective Entry Date" color={15}>
      {children.substr(69, 6)}
    </FileElement>
  );

  const settlementDate = (
    <FileElement title="Settlement Date" color={2}>
      {children.substr(75, 3)}
    </FileElement>
  );

  const originatorStatusCode = (
    <FileElement title="Originator Status Code" color={3}>
      {children.substr(78, 1)}
    </FileElement>
  );

  const originatingDfiIdentification = (
    <FileElement title="Originating DFI Identification" color={4}>
      {children.substr(79, 8)}
    </FileElement>
  );

  const batchNumber = (
    <FileElement title="Batch Number" color={5}>
      {children.substr(87, 7)}
    </FileElement>
  );

  return (
    <FileLine>
      {recordTypeCode}
      {serviceClassCode}
      {companyName}
      {companyDiscretionaryData}
      {companyIdentification}
      {secCode}
      {companyEntryDescription}
      {companyDescriptiveDate}
      {effectiveEntryDate}
      {settlementDate}
      {originatorStatusCode}
      {originatingDfiIdentification}
      {batchNumber}
    </FileLine>
  );
}

export default BatchHeader;
