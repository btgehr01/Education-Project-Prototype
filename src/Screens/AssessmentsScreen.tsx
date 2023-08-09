import * as React from "react";
import DataTable from "../Components/DataTable";
import { assessmentType } from "../Helpers/AssessmentHelper";
import { fetchAllAssessments } from "../Helpers/AssessmentHelper";
import { useAuth0 } from "@auth0/auth0-react";
import AssessmentsGUI from "../Components/AssessmentGUI";

export default function AssessmentsScreen() {
  const [assessments, setAssessments] = React.useState<assessmentType[]>([]);
  const { getAccessTokenSilently } = useAuth0();
  React.useEffect(() => {
    const fetchRubrics = async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://auth0-jwt-authorizer`,
          },
        });
        console.log(token);
        const assessments = await fetchAllAssessments(token);
        setAssessments(assessments);
      } catch (e) {
        console.error(e);
      }
    };
    fetchRubrics();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Assessments GUI</h1>
      <AssessmentsGUI assessments={assessments} />
      <h1 style={{ textAlign: "center" }}>Assessments Database Table</h1>
      <div
        style={{
          border: "2px solid #000",
          borderRadius: "10px",
          padding: "50px 50px 100px 50px",
        }}
      >
        <DataTable
          labels={[
            "StudentID",
            "RubricName",
            "Facilitator",
            "Date",
            "Points",
            "Comments",
            "Criterion",
          ]}
          rows={assessments !== undefined ? assessments : []}
        />
      </div>
    </div>
  );
}
