import * as React from "react";
import DataTable from "../Components/DataTable";
import { assessmentType } from "../Helpers/AssessmentHelper";
import { fetchAllAssessments } from "../Helpers/AssessmentHelper";
import { useAuth0 } from "@auth0/auth0-react";

export default function AssessmentsScreen() {
  const [assessments, setAssessments] = React.useState<assessmentType[]>([]);
  const { getAccessTokenSilently } = useAuth0();
  React.useEffect(() => {
    const fetchRubrics = async () => {
      //   try {
      //     const token = await getAccessTokenSilently({
      //       authorizationParams: {
      //         audience: `https://auth0-jwt-authorizer`,
      //       },
      //     });
      //     console.log(token);
      //     const assessments = await fetchAllAssessments(token);
      //     setAssessments(assessments);
      //   } catch (e) {
      //     console.error(e);
      //   }
    };
    fetchRubrics();
  }, [getAccessTokenSilently]);
  return (
    <div style={{ minWidth: "300px" }}>
      <h1 style={{ textAlign: "center" }}>Assessments</h1>
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
  );
}
