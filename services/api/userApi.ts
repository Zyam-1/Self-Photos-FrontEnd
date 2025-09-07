import { AuthResponse } from "@/types/auth";
import baseApi from "./baseApi";

export const register = async ({ email, password, name }: any) => {
  try {
    const response = await baseApi.post<AuthResponse>("/register", {
      name,
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error("Error in register service: ", error);
  }
};

export const login = async ({ email, password }: any) => {
  try {
    const response = await baseApi.post<AuthResponse>("/login", {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error("Error in login service: ", error);
  }
};

export const getProfile = async () => {
  try {
    const response = await baseApi.get("/profile");
    return response;
  } catch (error) {
    console.error("❌Error in getProfile: ", error);
  }
};

export const updateProfile = async (data: any) => {
  try {
    const response = await baseApi.patch("/profile", data);
    return response;
  } catch (error) {
    console.error("❌Error in Update Profile: ", error);
  }
};
