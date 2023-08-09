import axios from "axios";
const baseURL =
  "https://t9v5v2149b.execute-api.us-east-1.amazonaws.com/develop";

export type rubricType = {
  RubricName: string;
  "Dimension/Criterion": string;
  PossiblePoints: number;
  Criteria: string;
};

export const fetchRubric = async (rubricId: string, token: string) => {
  try {
    const response = await axios.get(
      baseURL + `/getRubric?rubricId=${rubricId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchAllRubrics = async (token: string) => {
  try {
    const response = await axios.get(baseURL + "/getRubrics", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const postRubric = async (rubric: rubricType, token: string) => {
  try {
    const response = await axios.post(baseURL + "/createRubric", rubric, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const updateRubric = async (
  updatedRubric: rubricType,
  token: string
) => {
  try {
    const response = await axios.put(baseURL + `/updateRubric`, updatedRubric, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteRubric = async (rubricId: string, token: string) => {
  try {
    const response = await axios.delete(
      baseURL + `/deleteRubric?rubicId=${rubricId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
