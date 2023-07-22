import axios from "axios";
export type assessmentType = {
  StudentID: number;
  RubricName: string;
  Facilitator: string;
  Date: string;
  Points: number;
  Comments: string;
  Criterion: string;
};
const baseURL =
  "https://fdfresyb0a.execute-api.us-east-1.amazonaws.com/develop";

export const fetchAllAssessments = async (token: string) => {
  try {
    const response = await axios.get(baseURL + "/assessmentsProcessor", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
