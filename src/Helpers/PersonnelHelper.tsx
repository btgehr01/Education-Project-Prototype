import axios from "axios";
export type personnelType = {
  id: number;
  value: string;
};
const baseURL =
  "https://q4h7rj2itl.execute-api.us-east-1.amazonaws.com/developp";

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
