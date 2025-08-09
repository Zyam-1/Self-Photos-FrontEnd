import baseApi from "./api/baseApi";

export const getMedia = async (page = 1, pageLimit = 10) => {
  try {
    const response = await baseApi.get(
      `/media?page=${page}&perPage=${pageLimit}`
    );
    return response;
  } catch (error) {
    console.error("❌Error in getMedia Services", error);
  }
};

export const uploadMedia = async (formData: FormData) => {
  try {
    const response = await baseApi.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("❌ Error in uploadMedia:", error);
  }
};
