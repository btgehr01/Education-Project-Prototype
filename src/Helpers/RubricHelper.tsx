import axios from "axios";
const baseURL =
  "https://t9v5v2149b.execute-api.us-east-1.amazonaws.com/develop";

export const fetchRubric = async (rubricId: string, token: string) => {
  try {
    const response = await axios.get("https://aws-api-endpoint", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const postData = async (rubric: any, token: string) => {
  try {
    const response = await axios.post("https://your-api-endpoint", rubric, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const updateData = async (
  rubricId: string,
  updatedRubric: any,
  token: string
) => {
  try {
    const response = await axios.put(
      `https://your-api-endpoint/${rubricId}`,
      updatedRubric,
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

export const deleteData = async (rubricId: string, token: string) => {
  try {
    const response = await axios.delete(
      `https://your-api-endpoint/${rubricId}`,
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
