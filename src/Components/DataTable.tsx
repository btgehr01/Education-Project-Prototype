import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface Row {
  [key: string]: string | number;
}

interface Props {
  labels: string[];
  rows: Row[];
}

const CollapsibleTable = ({ labels, rows }: Props) => {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  const handleRowClick = (index: number) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [index]: !prevExpandedRows[index],
    }));
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {labels.map((label, index) => (
              <TableCell key={`${label} ${index}`}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <React.Fragment key={index}>
              <TableRow onClick={() => handleRowClick(index)}>
                <TableCell>
                  {expandedRows[index] ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </TableCell>
                {labels.map((label, columnIndex) => (
                  <TableCell key={columnIndex}>{row[label]}</TableCell>
                ))}
              </TableRow>
              {expandedRows[index] && (
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={labels.length + 1}
                  >
                    <Collapse
                      in={expandedRows[index]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <div>Extra Content</div>
                    </Collapse>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
