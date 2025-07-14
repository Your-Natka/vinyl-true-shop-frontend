export const authMe = async (accessToken: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/me`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });

    if (!response.ok) {
        throw new Error(response.statusText);
        return;
    }

    return response.json();
};