import { LoginRequest } from "@/types/auth";

export const login = async (values: LoginRequest) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(values)
    });

    if (!response.ok) {
        throw new Error("LOGIN_ERROR");
        return;
    }

    return response.json();
};