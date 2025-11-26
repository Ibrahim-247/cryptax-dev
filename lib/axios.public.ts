import axios, { AxiosInstance } from "axios";

const baseURL: string =
    process.env.NEXT_PUBLIC_BASE_URL || "https://cryptax-dev.netlify.app";

/**
 * Creates a pre-configured Axios instance for public API requests.
 * @returns {AxiosInstance} A configured Axios instance.
 */
export function axiosPublic(): AxiosInstance {
    const instance: AxiosInstance = axios.create({
        baseURL: `${baseURL}/api`,
        timeout: 30000,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return instance;
}

export default axiosPublic;
