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
import { studentType } from "../Helpers/StudentHelper";
import { rubricType } from "../Helpers/RubricHelper";
import { personnelType } from "../Helpers/PersonnelHelper";
import { assessmentType } from "../Helpers/AssessmentHelper";
import {
  studentProperties,
  personnelProperties,
  rubricProperties,
  assessmentProperties,
} from "../Types/types";

type unionType = studentType | personnelType | rubricType | assessmentType;
type unionPropType =
  | studentProperties
  | personnelProperties
  | rubricProperties
  | assessmentProperties;

interface Props {
  labels: unionPropType[];
  rows: unionType[];
}

const returnCell = (row: unionType, label: string, index: number) => {
  if (label in (row as studentType)) {
    const student = row as studentType;
    const studentLabel = label as studentProperties;
    return <TableCell key={index}>{student[studentLabel]}</TableCell>;
  }

  if (label in (row as personnelType)) {
    const personnel = row as personnelType;
    const personnelLabel = label as personnelProperties;
    return <TableCell key={index}>{personnel[personnelLabel]}</TableCell>;
  }

  if (label in (row as rubricType)) {
    const rubric = row as rubricType;
    const rubricLabel = label as rubricProperties;
    return <TableCell key={index}>{rubric[rubricLabel]}</TableCell>;
  }

  if (label in (row as assessmentType)) {
    const assessment = row as assessmentType;
    const assessmentLabel = label as assessmentProperties;
    return <TableCell key={index}>{assessment[assessmentLabel]}</TableCell>;
  } else {
    return null;
  }
};

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
          {rows.map(
            (
              row: studentType | personnelType | rubricType | assessmentType,
              index
            ) => (
              <React.Fragment key={index}>
                <TableRow onClick={() => handleRowClick(index)}>
                  <TableCell>
                    {expandedRows[index] ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </TableCell>
                  {labels.map((label, columnIndex) => {
                    return returnCell(row, label, columnIndex);
                  })}
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
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
