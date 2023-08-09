import * as React from "react";
import DataTable from "../Components/DataTable";
import { personnelType } from "../Helpers/PersonnelHelper";
import { fetchAllPersonnel } from "../Helpers/PersonnelHelper";
import { useAuth0 } from "@auth0/auth0-react";

export default function PersonnelScreen() {
  const [personnel, setPersonnel] = React.useState<personnelType[]>();
  const { getAccessTokenSilently } = useAuth0();
  React.useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://auth0-jwt-authorizer`,
          },
        });
        const personnel = await fetchAllPersonnel(token);
        setPersonnel(personnel);
      } catch (e) {
        console.error(e);
      }
    };
    fetchPersonnel();
  }, [getAccessTokenSilently]);
  return (
    <div style={{ minWidth: "300px" }}>
      <h1 style={{ textAlign: "center" }}>Personnel</h1>
      <DataTable
        labels={["FirstName", "LastName", "Title", "Type"]}
        rows={personnel !== undefined ? personnel : []}
      />
    </div>
  );
}
