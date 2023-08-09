import axios from "axios";
export type personnelType = {
  FirstName: string;
  LastName: string;
  Title: string;
  Type: "Admin" | "Advisor/Evaluator";
};
const baseURL =
  "https://q4h7rj2itl.execute-api.us-east-1.amazonaws.com/develop";

export const fetchAllPersonnel = async (token: string) => {
  try {
    const response = await axios.get(baseURL + "/personnelProcessor", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
