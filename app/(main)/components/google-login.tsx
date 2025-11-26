"use client"
import Image from "next/image";
import google from "@/public/images/google.png";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleLogin = () => {
    // get google mutation from useAuth
    {/*  const {
        googleMutation
    } = useAuth(); */}
    // use google login
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log("Google token:", tokenResponse);
            //     googleMutation.mutate(tokenResponse.access_token);
        },
        onError: () => {
            console.log("Login Failed");
        },
    });
    // google login
    return (
        <button className="w-full flex cursor-pointer border rounded-full border-[#A6AAB5] py-3 px-4 sm:py-4 sm:px-5 text-[#222E48] font-medium text-xl disabled:opacity-0 disabled:cursor-not-allowed capitalize gap-3 sm:gap-5 justify-center items-center transition-all">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Image
                    src={google}
                    alt='apple'
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 640px) 20px, 24px"
                />
            </div>
            <span className="text-base">Sign up with Google</span>
        </button>
    )
}

export default GoogleLogin