import axios from "axios";
export type studentType = {
  id: number;
  value: string;
};
const baseURL =
  "https://n1p2q59dzd.execute-api.us-east-1.amazonaws.com/develop";

export const fetchAllStudents = async (token: string) => {
  try {
    const response = await axios.get(baseURL + "/studentsProcessor", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
