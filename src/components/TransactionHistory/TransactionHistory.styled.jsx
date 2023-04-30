import styled from '@emotion/styled';

export const Sheet = styled.table`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const TableOfContents = styled.thead``;

export const FirstRow = styled.tr``;

const tableBorder = `
  position: relative;
  &:not(:last-child)::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    border-right: 1px solid #b3afaf;
  }
`;

export const NameOfColumn = styled.th`
  height: 60px;
  text-transform: uppercase;
  font-size: 16px;
  background-color: ${props => props.theme.colors.NameOfColumn};
  color: var(--global-white-color);
  position: relative;
  ${tableBorder};
`;

export const BodyOfSheet = styled.tbody``;

export const Cell = styled.td`
  height: 40px;
  border: 1px solid var(--global-white-color);
  text-align: center;
  position: relative;
  ${tableBorder};
`;

export const Row = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.white};
  }
`;
