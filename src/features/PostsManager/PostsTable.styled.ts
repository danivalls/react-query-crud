import styled from "styled-components";
import { TableCell } from "@mui/material";

export const TableCellHeader = styled(TableCell)`
  background-color: ${({ theme }) => theme.colors.contentBackground};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1rem;
  white-space: nowrap;
`;

