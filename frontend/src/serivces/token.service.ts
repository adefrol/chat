"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getToken() {
    const token = cookies().get("token")?.value;
    if (!token) return
    return token;
}
async function deleteToken() {
    return cookies().delete("token");
}

async function setToken(token: string) {
    return cookies().set({
        name: "token",
        value: token,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), //7d
        path: "/",
        secure: true,
        sameSite: "strict",
        httpOnly: true,
    });
}

export { getToken, deleteToken, setToken };
