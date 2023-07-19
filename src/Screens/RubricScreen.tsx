import * as React from "react";
import DataTable from "../Components/DataTable";
import { useAuth0 } from "@auth0/auth0-react";

type rubricType = {
  id: number;
  value: string;
};

export default function RubricScreen() {
  const [rubrics, setRubrics] = React.useState<rubricType[]>([
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
      try {
        // const token = await getAccessTokenSilently({
        //   authorizationParams: {
        //     audience: `https://auth0-jwt-authorizer`,
        //   },
        // });
        // console.log(token);
        // const rubrics = await RubricHelper.fetchAllRubrics(token);
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
      <DataTable labels={["id", "value"]} rows={rubrics} />
    </div>
  );
}
