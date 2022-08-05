import { TableCell } from "@mui/material";
import styled from "styled-components";

export const TableCellHeader = styled(TableCell)`
  background-color: ${({ theme }) => theme.colors.contentBackground};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1rem;
  padding: 0.75rem;
  white-space: nowrap;
`;

export const NoDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
