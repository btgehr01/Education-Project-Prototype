import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import React from "react";

type props = {
  studentIds: number[];
};

export type plotOptions = "score" | "growth";

const AssessmentsGUI = ({ studentIds }: props) => {
  const [plotAll, setPlotAll] = React.useState<boolean>(true);
  const [selectedOption, setSelectedOption] =
    React.useState<plotOptions>("score");
  const [studentId, setStudentId] = React.useState<number>(0);

  const handleFirstToggleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlotAll(event.target.value === "all");
    setSelectedOption("score");
  };

  const handlePlottingToggleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (event.target.value) {
      case "score":
        setSelectedOption("score");
        break;
      case "growth":
        setSelectedOption("growth");
        break;
    }
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setStudentId(+event.target.value);
  };

  return (
    <div>
      <FormControl>
        <FormLabel id="graph-radio-buttons">Data Selection:</FormLabel>
        <RadioGroup
          row
          aria-labelledby="row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="all"
            control={
              <Radio checked={plotAll} onChange={handleFirstToggleChange} />
            }
            label="All Students"
          />
          <FormControlLabel
            value="individual"
            control={
              <Radio checked={!plotAll} onChange={handleFirstToggleChange} />
            }
            label="Individual Student"
          />
        </RadioGroup>
        <FormLabel id="graph-radio-buttons">Plotting Options:</FormLabel>
        {plotAll ? (
          <RadioGroup
            row
            aria-labelledby="row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="score"
              control={
                <Radio
                  checked={selectedOption === "score"}
                  onChange={handlePlottingToggleChange}
                />
              }
              label="Average Score"
            />
            <FormControlLabel
              value="growth"
              control={
                <Radio
                  checked={selectedOption === "growth"}
                  onChange={handlePlottingToggleChange}
                />
              }
              label="Average Growth"
            />
          </RadioGroup>
        ) : (
          <>
            <FormControl required sx={{ m: 1, maxWidth: 150 }}>
              <InputLabel id="select-small-label">Student ID</InputLabel>
              <Select
                labelId="select-small-label"
                id="select-small"
                value={studentId === 0 ? "" : `${studentId}`}
                label="Student ID"
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {studentIds.map((studentId: number) => {
                  return (
                    <MenuItem value={studentId}>{`${studentId}`}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="score"
                control={
                  <Radio
                    checked={selectedOption === "score"}
                    onChange={handlePlottingToggleChange}
                  />
                }
                label="Assessment Scores"
              />
              <FormControlLabel
                value="growth"
                control={
                  <Radio
                    checked={selectedOption === "growth"}
                    onChange={handlePlottingToggleChange}
                  />
                }
                label="Assessment Growth"
              />
            </RadioGroup>
          </>
        )}
      </FormControl>
    </div>
  );
};

export default AssessmentsGUI;
