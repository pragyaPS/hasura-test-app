import styled from "styled-components";

export const Table = styled.table`
  ${(props) => props.className};
  border-collapse: collapse;
`;
export const checkboxCell = {
  width: "30px",
  textAlign: "center !important",
};
export const Td = styled.td`
  ${(props) => props.className};
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
`;
export const Th = styled.th`
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
`;
