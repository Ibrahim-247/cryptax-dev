/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const baseURL: string =
    process.env.NEXT_PUBLIC_BASE_URL || "https://admin.aichique.com";
const ACCESS_TOKEN_KEY: string =
    process.env.AUTH_TOKEN_NAME || "cryptax_auth_token";

/**
 * Creates a private Axios instance that automatically attaches auth tokens
 * and redirects to /auth/sign-in on 401 errors.
 * @returns {AxiosInstance} Configured private Axios instance
 */
export function axiosPrivateClient(): AxiosInstance {
    const router = useRouter();
    const token: string | null = Cookies.get(ACCESS_TOKEN_KEY) || null;

    const instance: AxiosInstance = axios.create({
        baseURL: `${baseURL}/api`,
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
        },
    });

    instance.interceptors.response.use(
        (res: AxiosResponse) => res,
        (error: AxiosError) => {
            if (error.response?.status === 401) {
                Cookies.remove(ACCESS_TOKEN_KEY);
                router.push("/auth/sign-in");
            }
            return Promise.reject(error);
        }
    );

    return instance;
}

export default axiosPrivateClient;
