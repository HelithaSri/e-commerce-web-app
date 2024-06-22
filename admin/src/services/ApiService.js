import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";

export const uploadProductImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("product", imageFile);

  try {
    const response = await axios.post(
      `${API_BASE_URL}/products/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};

export const addNewProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};

export const fetchProductsInfo = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {});
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
};
