import * as storage from "@/utils/secureStorage";



export const storeJWT = async (token : string) => {
    await storage.saveToken("userToken", token);
    console.log("✔ JWT Stored Successfully");
}

export const getJWT = async () => {
    const userToken = await storage.getToken("userToken");

    return userToken || null;
    
}

export const clearJWT = async () => {
    await storage.removeToken("userToken");
    console.log("✔ JWT Removed Successfully");
}