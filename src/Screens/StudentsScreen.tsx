import * as React from "react";
import DataTable from "../Components/DataTable";
import { studentType } from "../Helpers/StudentHelper";
import { fetchAllStudents } from "../Helpers/StudentHelper";
import { useAuth0 } from "@auth0/auth0-react";

export default function StudentScreen() {
  const [students, setStudents] = React.useState<studentType[]>([]);
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
        // const students = await fetchAllStudents(token);
        // setStudents(students);
      } catch (e) {
        console.error(e);
      }
    };
    fetchRubrics();
  }, [getAccessTokenSilently]);
  return (
    <div style={{ minWidth: "300px" }}>
      <h1 style={{ textAlign: "center" }}>Students</h1>
      <DataTable
        labels={[
          "studentID",
          "FirstName",
          "LastName",
          "NominationType",
          "DistrictWorkEmail",
          "PersonalEmail",
          "NominatorFirstName",
          "NominatorLastName",
          "NominatorWorkEmail",
          "SchoolDistrict",
          "SchoolName",
          "Cohort",
        ]}
        rows={students !== undefined ? students : []}
      />
    </div>
  );
}
