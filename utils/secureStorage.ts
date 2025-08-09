import * as SecureStore from "expo-secure-store";

export const saveToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error("❌Error in saveToken", error);
  }
};

export const getToken = async (key: string) => {
  try {
    const value = await SecureStore.getItemAsync(key);
    return value;
  } catch (error) {
    console.error("❌ Error in getToken", error);
  }
};

export const removeToken = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("❌ Error in removeToken: ", error);
  }
};
