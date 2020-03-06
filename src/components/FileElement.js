import styled from "styled-components";
import FileLine from "./FileLine";

const hues = [
  1,
  200,
  50,
  250,
  100,
  300,
  150,
  300,
  25,
  225,
  75,
  275,
  125,
  325,
  175,
  375
];

const FileElement = styled.span`
  border-radius: 5px;
  ${FileLine}:hover & {
    background: hsl(${props => hues[props.color ?? 0]}, 100%, 92%);
  }

  ${FileLine}:hover &:hover {
    background: hsl(${props => hues[props.color ?? 0]}, 100%, 80%);
  }
`;
export default FileElement;
