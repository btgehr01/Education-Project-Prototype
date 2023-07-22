import * as React from "react";
import DataTable from "../Components/DataTable";
import { rubricType } from "../Helpers/RubricHelper";
import { fetchAllRubrics } from "../Helpers/RubricHelper";
import { useAuth0 } from "@auth0/auth0-react";

export default function RubricScreen() {
  const [rubrics, setRubrics] = React.useState<rubricType[]>([]);
  const { getAccessTokenSilently } = useAuth0();
  React.useEffect(() => {
    const fetchRubrics = async () => {
      try {
        // const token = await getAccessTokenSilently({
        //   authorizationParams: {
        //     audience: `https://auth0-jwt-authorizer`,
        //   },
        // });
        // console.log(token);
        // const rubrics = await fetchAllRubrics(token);
        // setRubrics(rubrics);
      } catch (e) {
        console.error(e);
      }
    };
    fetchRubrics();
  }, [getAccessTokenSilently]);
  return (
    <div style={{ minWidth: "300px" }}>
      <h1 style={{ textAlign: "center" }}>Rubrics</h1>
      <DataTable
        labels={[
          "RubricName",
          "Dimension/Criterion",
          "PossiblePoints",
          "Criteria",
        ]}
        rows={rubrics}
      />
    </div>
  );
}
