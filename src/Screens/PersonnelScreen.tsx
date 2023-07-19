import * as React from "react";
import DataTable from "../Components/DataTable";
import { personnelType } from "../Helpers/PersonnelHelper";
import { fetchAllPersonnel } from "../Helpers/PersonnelHelper";
import { useAuth0 } from "@auth0/auth0-react";

export default function PersonnelScreen() {
  const [personnel, setPersonnel] = React.useState<personnelType[]>([
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
        // const personnel = await fetchAllPersonnel(token);
        // setPersonnel(personnel);
      } catch (e) {
        console.error(e);
      }
    };
    fetchRubrics();
  }, [getAccessTokenSilently]);
  return (
    <div style={{ minWidth: "300px" }}>
      <h1 style={{ textAlign: "center" }}>Personnel</h1>
      <DataTable labels={["id", "value"]} rows={personnel} />
    </div>
  );
}
