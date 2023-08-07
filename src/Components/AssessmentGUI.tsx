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
  Button,
} from "@mui/material";
import React from "react";

type props = {
  studentIds: number[];
  facilitators: string[];
};

export type dataOptions = "all" | "student" | "evaluator";
export type plotOptions = "scores" | "deviation";

const AssessmentsGUI = ({ studentIds, facilitators }: props) => {
  const [dataOption, setDataOption] = React.useState<dataOptions>("all");
  const [plotOption, setPlotOption] = React.useState<plotOptions>("scores");
  const [studentId, setStudentId] = React.useState<number>(0);
  const [facilitatorName, setFacilitatorName] = React.useState<string>("");

  const handleFirstToggleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (event.target.value) {
      case "all":
        setDataOption("all");
        break;
      case "student":
        setDataOption("student");
        break;
      case "evaluator":
        setDataOption("evaluator");
        break;
    }
    setPlotOption("scores");
  };

  const handlePlottingToggleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (event.target.value) {
      case "score":
        setPlotOption("scores");
        break;
      case "growth":
        setPlotOption("deviation");
        break;
    }
  };

  const handleStudentSelectChange = (event: SelectChangeEvent) => {
    setStudentId(+event.target.value);
  };

  const handleFacilitatorSelectChange = (event: SelectChangeEvent) => {
    setFacilitatorName(event.target.value);
  };

  const renderPlottingOptions = () => {
    if (dataOption === "all") {
      return (
        <RadioGroup
          row
          aria-labelledby="row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="score"
            control={
              <Radio
                checked={plotOption === "scores"}
                onChange={handlePlottingToggleChange}
              />
            }
            label="Average Score"
          />
          <FormControlLabel
            value="growth"
            control={
              <Radio
                checked={plotOption === "deviation"}
                onChange={handlePlottingToggleChange}
              />
            }
            label="Score Deviation"
          />
        </RadioGroup>
      );
    } else if (dataOption === "student") {
      return (
        <>
          <FormControl required sx={{ m: 1, maxWidth: 150 }}>
            <InputLabel id="select-small-label">Student ID</InputLabel>
            <Select
              labelId="select-small-label"
              id="select-small"
              value={studentId === 0 ? "" : `${studentId}`}
              label="Student ID"
              onChange={handleStudentSelectChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {studentIds.map((studentId: number) => {
                return (
                  <MenuItem
                    key={studentId}
                    value={studentId}
                  >{`${studentId}`}</MenuItem>
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
                  checked={plotOption === "scores"}
                  onChange={handlePlottingToggleChange}
                />
              }
              label="Assessment Scores"
            />
            <FormControlLabel
              value="growth"
              control={
                <Radio
                  checked={plotOption === "deviation"}
                  onChange={handlePlottingToggleChange}
                />
              }
              label="Score Deviation"
            />
          </RadioGroup>
        </>
      );
    } else if (dataOption === "evaluator") {
      return (
        <>
          <FormControl required sx={{ m: 1, maxWidth: 150 }}>
            <InputLabel id="select-small-label">Facilitator</InputLabel>
            <Select
              labelId="select-small-label"
              id="select-small"
              value={facilitatorName}
              label="Facilitator"
              onChange={handleFacilitatorSelectChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {facilitators.map((facilitatorName: string) => {
                return (
                  <MenuItem
                    key={facilitatorName}
                    value={facilitatorName}
                  >{`${facilitatorName}`}</MenuItem>
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
                  checked={plotOption === "scores"}
                  onChange={handlePlottingToggleChange}
                />
              }
              label="Assessment Scores"
            />
            <FormControlLabel
              value="growth"
              control={
                <Radio
                  checked={plotOption === "deviation"}
                  onChange={handlePlottingToggleChange}
                />
              }
              label="Score Deviation"
            />
          </RadioGroup>
        </>
      );
    }
  };

  return (
    <div
      style={{
        border: "2px solid #000",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <FormControl>
        <FormLabel id="graph-radio-buttons">Data Selection:</FormLabel>
        <RadioGroup
          style={{ paddingBottom: "20px" }}
          row
          aria-labelledby="row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="all"
            control={
              <Radio
                checked={dataOption === "all"}
                onChange={handleFirstToggleChange}
              />
            }
            label="All Students"
          />
          <FormControlLabel
            value="student"
            control={
              <Radio
                checked={dataOption === "student"}
                onChange={handleFirstToggleChange}
              />
            }
            label="Individual Student"
          />
          <FormControlLabel
            value="evaluator"
            control={
              <Radio
                checked={dataOption === "evaluator"}
                onChange={handleFirstToggleChange}
              />
            }
            label="Evaluator"
          />
        </RadioGroup>
        <FormLabel id="graph-radio-buttons">Plotting Options:</FormLabel>
        {renderPlottingOptions()}
        <div style={{ paddingTop: "15px" }}>
          <Button variant="contained" size="medium">
            Generate Plot
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default AssessmentsGUI;
