import * as React from "react";
import DataTable from "../Components/DataTable";
import { assessmentType } from "../Helpers/AssessmentHelper";
import { fetchAllAssessments } from "../Helpers/AssessmentHelper";
import { useAuth0 } from "@auth0/auth0-react";

export default function AssessmentsScreen() {
  const [assessments, setAssessments] = React.useState<assessmentType[]>([
    {
      id: 1,
      value: "update",
    },
    {
      id: 3,
      value: "Jeff",
    },
    {
      id: 4,
      value: "Sam",
    },
  ]);
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
      <DataTable labels={["id", "value"]} rows={assessments} />
    </div>
  );
}
