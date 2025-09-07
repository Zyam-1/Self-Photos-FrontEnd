import { login } from "@/services/api/userApi"; // <-- your login function
import { storeJWT } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useState } from "react";



export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    const loginMutation = useMutation({
        mutationFn: () => login({email, password}),
        onSuccess: async (data) =>{
            storeJWT(data?.data.token);
            router.replace("/(tabs)");
        },
        onError: (error : any) =>{
            console.log("Error in loginMutation: ", error);
        }
    })
}
