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
import LineGraph from "./LineChart";
import React from "react";
import { assessmentType } from "../Helpers/AssessmentHelper";
import { LineChart } from "@mui/x-charts";

type props = {
  assessments: assessmentType[];
};

export type dataOptions = "all" | "student" | "evaluator";
export type plotOptions = "scores" | "deviation";

const AssessmentsGUI = ({ assessments }: props) => {
  const studentIds: number[] = Array.from(
    new Set(assessments.map((item) => item.StudentID))
  );

  const facilitators: string[] = Array.from(
    new Set(assessments.map((item) => item.Facilitator))
  );

  // Calculate average scores for each rubric name
  const rubricScores: {
    [rubricName: string]: { totalPoints: number; count: number };
  } = {};
  assessments.forEach((assessment: assessmentType) => {
    if (!rubricScores[assessment.RubricName]) {
      rubricScores[assessment.RubricName] = { totalPoints: 0, count: 0 };
    }

    rubricScores[assessment.RubricName].totalPoints += assessment.Points;
    rubricScores[assessment.RubricName].count++;
  });

  const rubricAverages: { [rubricName: string]: number } = {};
  for (const rubricName in rubricScores) {
    rubricAverages[rubricName] =
      rubricScores[rubricName].totalPoints / rubricScores[rubricName].count;
  }

  const [dataOption, setDataOption] = React.useState<dataOptions>("all");
  const [plotOption, setPlotOption] = React.useState<plotOptions>("scores");
  const [studentId, setStudentId] = React.useState<number>(0);
  const [facilitatorName, setFacilitatorName] = React.useState<string>("");
  const [fillPlot, setFillPlot] = React.useState<boolean>(false);

  const handleFirstToggleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFillPlot(false);
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

  const getStudentScores = (studentId: number) => {
    const rubricScores: { [rubricName: string]: number } = {};
    assessments.forEach((assessment: assessmentType) => {
      if (assessment.StudentID === studentId) {
        rubricScores[assessment.RubricName] = assessment.Points;
      }
    });
    return rubricScores;
  };

  const getEvaluatorScores = (evaluatorName: string) => {
    const evaluatorScores: {
      [rubricName: string]: { totalPoints: number; count: number };
    } = {};
    assessments.forEach((assessment: assessmentType) => {
      if (assessment.Facilitator === evaluatorName) {
        if (!evaluatorScores[assessment.RubricName]) {
          evaluatorScores[assessment.RubricName] = { totalPoints: 0, count: 0 };
        }

        evaluatorScores[assessment.RubricName].totalPoints += assessment.Points;
        evaluatorScores[assessment.RubricName].count++;
      }
    });

    const evaluatorAvgScores: { [rubricName: string]: number } = {};
    for (const rubricName in evaluatorScores) {
      evaluatorAvgScores[rubricName] =
        evaluatorScores[rubricName].totalPoints /
        evaluatorScores[rubricName].count;
    }

    return evaluatorAvgScores;
  };

  const renderPlot = () => {
    if (fillPlot) {
      switch (dataOption) {
        case "all":
          if (plotOption === "scores") {
            return (
              <LineGraph
                data1={Object.values(rubricAverages)}
                label1="Average Scores"
                xLabels={Object.keys(rubricAverages)}
              />
            );
          }
          break;
        case "evaluator":
          if (plotOption === "scores") {
            return (
              <LineGraph
                data1={Object.values(getEvaluatorScores(facilitatorName))}
                label1="Evaluator Scores"
                xLabels={Object.keys(getEvaluatorScores(facilitatorName))}
              />
            );
          } else if (plotOption === "deviation") {
            return (
              <LineGraph
                data1={Object.values(getEvaluatorScores(facilitatorName))}
                label1="Scores"
                data2={Object.values(rubricAverages)}
                label2="Average Scores"
                xLabels={Object.keys(getEvaluatorScores(facilitatorName))}
              />
            );
          }
          break;
        case "student":
          if (plotOption === "scores") {
            return (
              <LineGraph
                data1={Object.values(getStudentScores(studentId))}
                label1="Student Scores"
                xLabels={Object.keys(getStudentScores(studentId))}
              />
            );
          } else if (plotOption === "deviation") {
            return (
              <LineGraph
                data1={Object.values(getStudentScores(studentId))}
                label1="Scores"
                data2={Object.values(rubricAverages)}
                label2="Average Scores"
                xLabels={Object.keys(getStudentScores(studentId))}
              />
            );
          }
          break;
      }
    } else {
      return <LineChart width={800} height={500} series={[]} />;
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
          <Button
            variant="contained"
            size="medium"
            disabled={
              (dataOption === "evaluator" && facilitatorName === "") ||
              (dataOption === "student" && studentId === 0)
            }
            onClick={() => (!fillPlot ? setFillPlot(true) : null)}
          >
            Generate Plot
          </Button>
        </div>
        {renderPlot()}
      </FormControl>
    </div>
  );
};

export default AssessmentsGUI;
