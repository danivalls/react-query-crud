import styled from "styled-components";
import { TableCell } from "@mui/material";

export const TableCellHeader = styled(TableCell)`
  background-color: ${({ theme }) => theme.colors.contentBackground};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 0.5rem;
  white-space: nowrap;
`;

export const NoDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

