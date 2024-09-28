import styled from 'styled-components';

export const TableUI = styled.table`
  width: 100%;
  caption-side: bottom;
  text-align: left;
  font-size: 0.875rem;
  border-collapse: collapse;
  & th,
  & td {
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
  }
  & tr:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
export const TableHeaderUI = styled.thead`
  border-bottom: 2px solid #000;
`;
export const TableBodyUI = styled.tbody`
  & tr:last-child {
    border: none;
  }
`;
export const TableFooterUI = styled.tfoot`
  border-top: 2px solid #000;
  font-weight: bold;
`;
export const TableHeadUI = styled.th`
  padding: 0.5rem;
  font-weight: bold;
`;
export const TableCellUI = styled.td`
  padding: 0.5rem;
`;
export const TableCaptionUI = styled.caption`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #666;
`;
