import axios from "axios";

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
