export type RegisterRequest = {
    email: string,
    password: string,
    fullName: string,
    phoneNumber: string,
}

export type LoginRequest = {
    email: string;
    password: string;
}