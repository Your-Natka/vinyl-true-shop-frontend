import { RegisterRequest } from "@/types/auth";

export const register = async (values: RegisterRequest) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    });

    console.log(response);
    if (response.ok) return response.json();
    throw new Error("REGISTER_FAIL");
};