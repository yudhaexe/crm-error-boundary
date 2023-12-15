import React from "react";
import { TableCell, TableRow } from "@mui/material";

interface FinancialRowProps {
  label: string;
  value?: string | number;
}

const FinancialRow: React.FC<FinancialRowProps> = ({ label, value }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {label}
      </TableCell>
      <TableCell align="right">${value}</TableCell>
    </TableRow>
  );
};

export default FinancialRow;
